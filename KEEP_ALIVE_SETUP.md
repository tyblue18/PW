# Keep-Alive Setup Guide

## Current Setup: GitHub Actions (Free until Jan 2026)

Your GitHub Actions workflow pings your Streamlit apps every 10 minutes.

**⚠️ Important:** Starting January 1, 2026, GitHub Actions will charge $0.002 per minute. At 10-minute intervals, this would cost approximately **$8-9/month**.

## Recommended: Switch to UptimeRobot (Free Forever)

UptimeRobot is a free service that can ping your apps every 5 minutes with no charges.

### Setup Steps:

1. **Sign up**: Go to https://uptimerobot.com (free account)

2. **Add Monitor for AMP App**:
   - Click "Add New Monitor"
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: `AMP: Algorithmic Market Predictor`
   - **URL**: `https://tyblue18-automated-trading-app-9dse9i.streamlit.app`
   - **Monitoring Interval**: Every 5 minutes
   - Click "Create Monitor"

3. **Add Monitor for Password Security App**:
   - Click "Add New Monitor" again
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: `Password Security Enhancement System`
   - **URL**: `https://password-security-enhancements-okygcudyad9pxk3tpbryb6.streamlit.app`
   - **Monitoring Interval**: Every 5 minutes
   - Click "Create Monitor"

4. **Disable GitHub Actions** (optional):
   - Go to your repo → Settings → Actions → General
   - Disable workflows if you want to avoid future charges

## Cost Comparison

| Service | Frequency | Monthly Cost |
|---------|-----------|--------------|
| GitHub Actions (current) | Every 10 min | **Free** (until Jan 2026) |
| GitHub Actions (after Jan 2026) | Every 10 min | **~$8-9/month** |
| UptimeRobot | Every 5 min | **Free forever** |

## Why UptimeRobot?

- ✅ **Free forever** (50 monitors on free tier)
- ✅ **More frequent** (every 5 minutes vs 10 minutes)
- ✅ **Reliable** (used by thousands of developers)
- ✅ **Email alerts** if apps go down
- ✅ **No code changes needed**

## Current Status

- GitHub Actions: Running every 10 minutes
- UptimeRobot: Not set up (recommended to add)

