# Marg (The Path) 🧭 — Career Guidance Platform for Students

> **Clarity precedes success.** Marg helps 10th-pass, 12th-pass and college students explore academic streams, discover career paths, see the skills each career needs, and browse internships and jobs — all with instant, in-browser search.

🔗 **Live demo:** https://YOUR-APP.vercel.app
📄 Built as a 4th-semester B.Tech (CSE) Micro Project at **Dhemaji Engineering College, Assam**.

---

## ✨ Features

- **Stream-wise exploration** – Science, Arts and Commerce, each with its own career trajectories.
- **25 career profiles** – description, key skills and industry outlook for each career.
- **Instant search** – filtering happens in the browser (`useState` + `.filter()` / `.includes()`), so results update on every keystroke with no loading spinner.
- **Jobs & internships board** – search plus Internship / Full-Time / Remote filters (sample listings).
- **Secure authentication** – Email + Password and one-click **Sign in with Google**, powered by Firebase Authentication. Password reset by email link.
- **Protected routes** – a `<ProtectedRoute>` wrapper sends signed-out visitors to the sign-in page with a friendly message.
- **Single Page Application** – React Router, so navigation never reloads the page.
- **Responsive UI** and Contact / About pages.

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite, React Router, Font Awesome |
| Authentication | Firebase Authentication (Email/Password + Google) |
| Hosting | Vercel |
| Academic MERN version | Node.js, Express, MongoDB (Mongoose), JWT, Bcrypt, Nodemailer — kept in [`local-mern-backend/`](./local-mern-backend) |

> **Two ways to run Marg**
> - **Deployed / main version (`frontend/`)** – no database or server needed. Authentication is handled by Firebase, so there are no database credentials to protect.
> - **Academic MERN version (`local-mern-backend/`)** – the original Express + MongoDB + JWT backend described in the project report. It is kept for reference and local experiments and is **not** used by the deployed site.

## 📁 Project Structure

```
Marg/
├── frontend/                 # React + Vite app (this is what gets deployed)
│   ├── src/
│   │   ├── components/       # Navbar, Footer, ProtectedRoute, Alert
│   │   ├── context/          # AuthContext (Firebase session state)
│   │   ├── pages/            # Home, Careers, CareerDetails, Jobs, Sign, ...
│   │   └── firebase.js       # Firebase initialisation (reads env variables)
│   ├── vercel.json           # SPA rewrite so deep links work
│   └── .env.example          # Names of the required environment variables
├── local-mern-backend/       # Original Express + MongoDB backend (optional)
└── README.md
```

## 🚀 Run Locally

**Prerequisites:** Node.js 18+ and a free [Firebase](https://console.firebase.google.com) project.

```bash
git clone https://github.com/YOUR-USERNAME/Marg.git
cd Marg/frontend
npm install
cp .env.example .env        # Windows: copy .env.example .env
# fill in the VITE_FIREBASE_* values in .env
npm run dev
```

Open http://localhost:5173.

### Firebase setup (one time)
1. Firebase Console → **Add project** → add a **Web app** and copy its config into `.env`.
2. **Authentication → Sign-in method** → enable **Email/Password** and **Google**.
3. **Authentication → Settings → Authorized domains** → add `localhost` and your Vercel domain.

## ☁️ Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for the full step-by-step Vercel guide.

## 🔒 Security Notes

- No secrets are committed; all configuration is read from environment variables (`.env` is git-ignored).
- Passwords are never stored by the app — Firebase handles hashing and sessions.
- Private pages are guarded on the client by `<ProtectedRoute>`. The career and job data is public-by-design static content bundled with the app, so the guard is a sign-in prompt for user experience, not a data-security boundary.

## 🔭 Future Scope

- Move job listings to a database with an admin dashboard.
- Visual step-by-step learning roadmaps for each career.
- Quiz-based career assessment, mentor connect and AI-based course recommendations.
- Working contact form (email or database backed).

## 👥 Team

| Name | Roll No. |
|---|---|
| Manjit Kumar Das | 2481105744 |
| Royel Nath | 2481105763 |
| Suraj Saikia | 2481105774 |
| Manash Pratim Borah | 2481105758 |
| Nabajyoti Bhuyan | 2481105760 |

**Guide:** Dhrubajyoti Malakar · **Department:** Computer Science & Engineering, Dhemaji Engineering College

## 📜 License

Released under the MIT License — see [LICENSE](./LICENSE) (add the file on GitHub via *Add file → Create new file → LICENSE → Choose a license template → MIT*).
