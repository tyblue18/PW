# Streamlit Keep-Alive Setup

This document explains how to keep your Streamlit apps awake so they're always available for your portfolio website.

## Problem

Streamlit Cloud free tier apps go to sleep after periods of inactivity. When a user visits your portfolio and tries to view an embedded Streamlit app, they may see a loading screen that never finishes because the app is asleep.

## Solution

We've implemented an automated keep-alive system that periodically pings your Streamlit apps to prevent them from sleeping.

## How It Works

1. **API Endpoint**: `/api/keep-alive` pings all configured Streamlit apps
2. **Vercel Cron Jobs**: Automatically calls the endpoint every 15 minutes
3. **Configuration**: Streamlit URLs are stored in `/config/streamlit-apps.ts`

## Setup Instructions

### Option 1: Vercel Cron Jobs (Recommended - Automatic)

If your portfolio is deployed on Vercel, the cron job is already configured in `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/keep-alive",
      "schedule": "*/15 * * * *"
    }
  ]
}
```

**Steps:**
1. Make sure `vercel.json` is committed to your repository
2. Deploy to Vercel (or push changes if already deployed)
3. Vercel will automatically set up the cron job
4. The cron job will ping your Streamlit apps every 15 minutes

**Verify it's working:**
- Go to your Vercel dashboard
- Navigate to your project → Settings → Cron Jobs
- You should see the keep-alive cron job listed

### Option 2: External Keep-Alive Service (Alternative)

If you're not using Vercel or want a backup solution, use an external service:

#### UptimeRobot (Free - Recommended)

1. Sign up at https://uptimerobot.com (free tier: 50 monitors)
2. Click "Add New Monitor"
3. Choose "HTTP(s)" monitor type
4. Set:
   - **Friendly Name**: Portfolio Keep-Alive
   - **URL**: `https://your-portfolio-domain.com/api/keep-alive`
   - **Monitoring Interval**: 15 minutes
   - **Alert Contacts**: (optional)
5. Click "Create Monitor"

#### cron-job.org (Free)

1. Sign up at https://cron-job.org
2. Create a new cron job:
   - **Title**: Streamlit Keep-Alive
   - **URL**: `https://your-portfolio-domain.com/api/keep-alive`
   - **Schedule**: `*/15 * * * *` (every 15 minutes)
   - **Request Method**: GET
3. Save and activate

#### Better Uptime (Free tier available)

1. Sign up at https://betteruptime.com
2. Add a new monitor:
   - **URL**: `https://your-portfolio-domain.com/api/keep-alive`
   - **Check Interval**: 15 minutes
3. Save

### Option 3: Manual Testing

You can manually test the keep-alive endpoint:

```bash
# Ping all apps
curl https://your-portfolio-domain.com/api/keep-alive

# Ping specific app (by index)
curl https://your-portfolio-domain.com/api/keep-alive?app=0
```

## Adding New Streamlit Apps

When you add a new Streamlit app to your portfolio:

1. **Add to configuration** (`/config/streamlit-apps.ts`):
   ```typescript
   export const STREAMLIT_APPS = [
     // ... existing apps
     {
       name: "Your New App",
       url: "https://your-app.streamlit.app",
       slug: "your-app-slug",
     },
   ];
   ```

2. **The keep-alive system will automatically include it** - no other changes needed!

## Monitoring

### Check Keep-Alive Status

Visit: `https://your-portfolio-domain.com/api/keep-alive`

Response example:
```json
{
  "total": 2,
  "successful": 2,
  "failed": 0,
  "results": [
    {
      "index": 0,
      "url": "https://tyblue18-automated-trading-app-9dse9i.streamlit.app",
      "status": "success",
      "success": true,
      "status": 200,
      "statusText": "OK",
      "responseTime": "1234ms",
      "timestamp": "2024-01-15T10:30:00.000Z"
    },
    // ... more apps
  ],
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

### Vercel Logs

If using Vercel Cron:
1. Go to Vercel Dashboard → Your Project → Logs
2. Filter by "Cron" to see keep-alive execution logs
3. Check for any errors or failures

## Troubleshooting

### Apps Still Going to Sleep

1. **Check cron job is running**: Verify in Vercel dashboard or external service
2. **Verify endpoint works**: Manually call `/api/keep-alive` and check response
3. **Check interval**: 15 minutes should be frequent enough, but Streamlit Cloud may need more frequent pings
   - Update `vercel.json` schedule to `*/10 * * * *` (every 10 minutes) if needed
4. **Check Streamlit URLs**: Ensure URLs in `config/streamlit-apps.ts` are correct

### Endpoint Returns Errors

1. **Check Streamlit URLs**: Make sure they're accessible
2. **Check network**: Ensure your deployment can reach Streamlit Cloud
3. **Check logs**: Look at Vercel function logs for detailed error messages

### Vercel Cron Not Working

1. **Verify `vercel.json` exists**: Must be in project root
2. **Check Vercel plan**: Cron jobs require Pro plan or higher
   - If on Hobby plan, use external service (Option 2) instead
3. **Redeploy**: Push changes to trigger cron job setup

## Frequency Recommendations

- **15 minutes**: Good balance (default)
- **10 minutes**: More aggressive, better for high-traffic portfolios
- **5 minutes**: Very aggressive, may hit rate limits
- **30 minutes**: Less frequent, apps may still sleep

## Cost Considerations

- **Vercel Cron**: Included in Pro plan ($20/month), not available on Hobby plan
- **External Services**: Most have free tiers sufficient for this use case
- **Streamlit Cloud**: Free tier allows keep-alive pings

## Alternative Solutions

If keep-alive doesn't work well enough, consider:

1. **Upgrade Streamlit Cloud**: Paid plans don't sleep
2. **Migrate to Railway/Render**: These platforms have better free tier policies
3. **Use Serverless Functions**: Convert Streamlit apps to serverless functions

## Current Configuration

Your current Streamlit apps being kept alive:
- AMP: Algorithmic Market Predictor
- Password Security Enhancement System

To add more, edit `/config/streamlit-apps.ts`.

