# Deploying Marg on Vercel

The deployed app is a static React (Vite) site. Authentication uses Firebase, so **no MongoDB connection string or backend server is required**.

## 1. Test the build locally
```bash
cd frontend
npm install
npm run build      # must finish without errors
npm run preview    # optional: open the printed URL and click around
```

## 2. Push to GitHub
Make sure `.env` files are **not** committed (the root `.gitignore` already blocks them).
```bash
cd Marg
git init
git add .
git status         # confirm no .env file is listed
git commit -m "Initial commit: Marg career guidance platform"
git branch -M main
git remote add origin https://github.com/manishdas2071/Marg.git
git push -u origin main
```

## 3. Prepare Firebase
1. Firebase Console → **Authentication → Sign-in method** → enable **Email/Password** and **Google**.
2. Keep the console open; you will add the Vercel domain in step 5.

## 4. Import into Vercel
1. Go to https://vercel.com → **Add New → Project** → import your `Marg` GitHub repo.
2. **Root Directory:** click *Edit* and choose **`frontend`**.
3. Framework Preset should auto-detect **Vite** (Build: `npm run build`, Output: `dist`).
4. Open **Environment Variables** and add these six (values from Firebase → Project settings → Your apps → Web app):

| Name |
|---|
| `VITE_FIREBASE_API_KEY` |
| `VITE_FIREBASE_AUTH_DOMAIN` |
| `VITE_FIREBASE_PROJECT_ID` |
| `VITE_FIREBASE_STORAGE_BUCKET` |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` |
| `VITE_FIREBASE_APP_ID` |

5. Click **Deploy**. You get a URL like `https://marg-xxxx.vercel.app`.

## 5. Authorise the domain in Firebase (required!)
Firebase Console → **Authentication → Settings → Authorized domains → Add domain** → paste your Vercel domain (e.g. `marg-xxxx.vercel.app`, without `https://`).
Without this, **Google sign-in fails** on the live site.

## 6. Test the live site
- Open the URL in a private window.
- Visit `/career` while signed out → you should be sent to Sign in.
- Create an account, sign out, sign in with Google, try Forgot Password.
- Refresh on a deep link such as `/career` → it should not 404.

## Troubleshooting
| Problem | Fix |
|---|---|
| Blank page / `Firebase config is missing` in console | Env variables not set in Vercel. Add them, then **Redeploy**. |
| Google popup: `auth/unauthorized-domain` | Add the domain in step 5. |
| `auth/operation-not-allowed` | Enable that provider in Firebase → Sign-in method. |
| 404 on refresh | Make sure `frontend/vercel.json` exists and Root Directory is `frontend`. |
| Changed env vars but nothing changed | Vite bakes them in at build time — trigger a new deployment. |

## Custom domain / nicer URL (optional)
Vercel → Project → **Settings → Domains**. You can also rename the project (Settings → General) to get `marg-career.vercel.app`; remember to add the new domain to Firebase's authorized list.
