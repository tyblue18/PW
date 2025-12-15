# How to Trigger Deployment from Vercel Dashboard

## Method 1: Manual Redeploy (Easiest)

1. Go to https://vercel.com/dashboard
2. Click on your project (PW or portfolio-website)
3. Go to the **"Deployments"** tab
4. Find the latest deployment (even if it failed)
5. Click the **three dots (⋯)** menu next to it
6. Select **"Redeploy"**
7. Confirm the redeploy

## Method 2: Redeploy from Project Settings

1. Go to your project dashboard
2. Click **"Settings"** tab
3. Scroll to **"Git"** section
4. Click **"Redeploy"** button (if available)

## Method 3: Trigger via API (Advanced)

If you have Vercel CLI installed:
```bash
vercel --prod
```

Or use the Vercel API:
```bash
curl -X POST "https://api.vercel.com/v1/deployments" \
  -H "Authorization: Bearer YOUR_VERCEL_TOKEN" \
  -d '{"name":"your-project-name"}'
```

## Method 4: Force Redeploy via Git (What we did)

Make an empty commit:
```bash
git commit --allow-empty -m "Trigger redeploy"
git push
```

## Troubleshooting Deployment Failures

If deployment keeps failing, check:

1. **Build Logs**: Click on the failed deployment → "Build Logs" tab
2. **Function Logs**: Check for runtime errors
3. **Environment Variables**: Make sure all required env vars are set
4. **Node Version**: Check if Node.js version is compatible

## Common Issues

### Cron Jobs (vercel.json)
- **Issue**: Cron jobs require Vercel Pro plan ($20/month)
- **Solution**: Remove `vercel.json` if you're on free plan, or upgrade to Pro

### Build Errors
- Check the build logs for specific error messages
- Common issues: TypeScript errors, missing dependencies, import path issues

### Function Errors
- Check function logs in Vercel dashboard
- Verify all API routes are properly exported

