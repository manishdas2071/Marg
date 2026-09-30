const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    const mailOptions = {
      from: '"Marg Support" <marg.supports@gmail.com>',
      to: options.email,
      subject: options.subject,
      text: options.message,
    };


    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${options.email}`);
    // alert(`Email sent successfully to ${options.email}`);
  } catch (error) {
    console.error("Error sending email:", error);
    // alert("Invalid mail");
    throw new Error("Email could not be sent");
  }
};

module.exports = sendEmail;