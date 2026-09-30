const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    
    user = new User({
      name,
      email,
      password: hashedPassword,
      isVerified: true 
    });
    await user.save();

    const message = `Welcome to Marg! Your account has been successfully created. We are excited to help you find your path.`;
    await sendEmail({ email: user.email, subject: 'Verification email from Marg', message });

    res.status(200).json({ 
      message: "Registration successful" 
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error during registration" });
  }

    // res.status(200).json({ 
  //     message: "Registration successful",
  //     token,
  //     name: user.name
  //   });
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ message: "Server error during registration" });
  // }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        message: "Login successful!"
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const googleAuth = async (req, res) => {
  try {
    const { name, email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(generatedPassword, salt);

      user = await User.create({
        name,
        email,
        password: hashedPassword,
        isVerified: true
      });
    }

    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      message: "Google Authentication successful!"
    });

  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User not found" });
    if (user.isVerified) return res.status(400).json({ message: "Account already verified" });
    if (user.otpExpires < Date.now()) return res.status(400).json({ message: "OTP has expired" });

    const isMatch = await bcrypt.compare(otp, user.otp);
    if (!isMatch) return res.status(400).json({ message: "Invalid OTP" });

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    const token = generateToken(user._id);
    res.status(200).json({ message: "Email verified successfully", token, name: user.name });
  } catch (err) {
    res.status(500).json({ message: "Server error during verification" });
  }
};

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "No account with that email found" });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    user.resetPasswordToken = await bcrypt.hash(otp, 10); 
    user.resetPasswordExpires = Date.now() + 5 * 60 * 1000;
    await user.save();

    const message = `Your password reset code is: ${otp}\n\nThis code expires in 5 minutes.`;
    await sendEmail({ email: user.email, subject: 'Marg - Password Reset Code', message });
    
    res.status(200).json({ message: "Reset OTP sent to email." });
  } catch (err) {
    res.status(500).json({ message: "Server error during password reset request" });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, otp, password } = req.body;
    
    const user = await User.findOne({ 
      email,
      resetPasswordExpires: { $gt: Date.now() } 
    });

    if (!user) return res.status(400).json({ message: "Invalid or expired session" });

    const cleanOtp = String(otp).trim(); 

    const isMatch = await bcrypt.compare(cleanOtp, user.resetPasswordToken);
    
    if (!isMatch) return res.status(400).json({ message: "Incorrect OTP" });
    
    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password updated successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error during password reset" });
  }
};

module.exports = { registerUser, loginUser, googleAuth, verifyOTP, forgotPassword, resetPassword };