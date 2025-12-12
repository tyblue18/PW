# Deployment Guide

This guide will help you push your portfolio to GitHub and deploy it live.

## Step 1: Push Your Code to GitHub

You already have a git repository initialized. Here's how to commit and push your changes:

### 1. Stage all your changes:
```bash
git add .
```

### 2. Commit your changes:
```bash
git commit -m "Complete portfolio website with all features"
```

### 3. Push to GitHub:
```bash
git push origin main
```

If you haven't set up the remote yet, create a new repository on GitHub first:
1. Go to https://github.com/new
2. Name it (e.g., `portfolio` or `tanishq-somani-portfolio`)
3. Don't initialize with README (you already have one)
4. Then run:
```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

## Step 2: Deploy to Vercel (Recommended for Next.js)

Vercel is the best platform for hosting Next.js applications. It's free and provides:
- Automatic deployments on every push
- Custom domains
- SSL certificates
- Fast global CDN

### Option A: Deploy via Vercel Dashboard (Easiest)

1. **Sign up/Login**: Go to [vercel.com](https://vercel.com) and sign up with your GitHub account

2. **Import Project**:
   - Click "Add New Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js

3. **Configure**:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)

4. **Deploy**:
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at `your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

Follow the prompts. For production deployment:
```bash
vercel --prod
```

## Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain (e.g., `tanishqsomani.com`)
3. Follow DNS configuration instructions
4. Vercel automatically provides SSL certificates

## Step 4: Environment Variables (If Needed)

If you add any API keys or secrets later:
1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add your variables
3. Redeploy

## Important Notes

- **Resume File**: Make sure `public/resume.pdf` exists before deploying
- **Images**: All images in `public/` folder will be accessible
- **Automatic Deployments**: Every push to `main` branch will trigger a new deployment
- **Preview Deployments**: Pull requests get preview URLs automatically

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Check for TypeScript errors: `npm run build` locally

### Images Not Loading
- Ensure images are in `public/` folder
- Use paths like `/avatar.jpg` not `/public/avatar.jpg`

### 404 Errors
- Check that all routes are properly configured
- Verify `app/projects/[slug]/page.tsx` exists

## Alternative: Deploy to Netlify

If you prefer Netlify:

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

## Alternative: Deploy to GitHub Pages (Not Recommended)

GitHub Pages doesn't support Next.js server-side features. You'd need to:
1. Export as static site: `next export` (deprecated in Next.js 13+)
2. Use `output: 'export'` in `next.config.js`
3. This loses dynamic features

**Recommendation**: Use Vercel for best Next.js experience.
