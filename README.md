# Suman Das — Mechanical Engineering Portfolio

Professional personal portfolio of **Suman Das**, Mechanical Engineering student with hands-on industrial training at **Indian Railways (ROH Depot)**, 2D/3D CAD modeling expertise (**AutoCAD, SolidWorks**), and data visualization (**Power BI, Excel**).

---

## 🚀 How to Host on GitHub for Free (GitHub Pages)

This website is **100% static HTML/CSS/JS** with no backend or database required. You can host it on GitHub Pages for free forever.

### Option A: 1-Click Export to GitHub via AI Studio
Because the restricted workflow folder has been removed, you can now safely export or push this repository directly through AI Studio to your GitHub account without any permission errors!

### Option B: Push via Git Terminal

```bash
git init
git add .
git commit -m "Initial commit - Suman Das Portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR-GITHUB-USERNAME>/<YOUR-REPO-NAME>.git
git push -u origin main
```

### Free Deployment Steps:

#### Method 1: Vercel / Netlify / Cloudflare Pages (Easiest - 1 Click)
1. Go to [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com) (both 100% free forever).
2. Connect your GitHub account and select your repository.
3. It automatically detects Vite:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. Your site is live in 30 seconds with a free custom SSL domain!

#### Method 2: GitHub Pages (via gh-pages or static branch)
1. In your repository on GitHub, go to **Settings** → **Pages**.
2. Under **Build and deployment**:
   - You can choose **GitHub Actions** → select the standard **Static HTML** template.
   - Or deploy the compiled `dist` folder to the `gh-pages` branch.

---

## 🛠️ Local Development

To run this project locally on your computer:

```bash
# 1. Install dependencies
npm install

# 2. Start local development server
npm run dev

# 3. Create production build (generates static dist/ directory)
npm run build
```

---

## 📁 Project Structure

- `src/components/` — Modular React UI components (Hero, About, Education, Experience, Physical Projects, CAD Drawings, Skills, Certifications, Contact, Modals)
- `src/data/` — Structured portfolio data, certifications, and technical specifications
- `public/` — Static assets (SVGs, 404 SPA fallback for static hosting)
