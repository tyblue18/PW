# Custom Domain Setup Guide

## Step 1: Purchase a .dev Domain

1. **Buy the domain**:
   - Go to [Google Domains](https://domains.google.com) or [Namecheap](https://www.namecheap.com)
   - Search for `tanishqsomani.dev` (or `TanishqSomani.dev` - domains are case-insensitive)
   - Purchase the domain (usually $12-20/year for .dev domains)

   **Note**: `.dev` domains require HTTPS (which Vercel provides automatically), so they're perfect for your portfolio!

2. **Alternative registrars**:
   - Google Domains (recommended for .dev)
   - Namecheap
   - Cloudflare Registrar
   - GoDaddy

## Step 2: Deploy to Vercel First

Before configuring the domain, make sure your site is deployed on Vercel:

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository (`tyblue18/PW`)
3. Deploy (you'll get a temporary URL like `pw-tyblue18.vercel.app`)

## Step 3: Add Custom Domain in Vercel

1. **In Vercel Dashboard**:
   - Go to your project
   - Click **Settings** → **Domains**
   - Enter your domain: `tanishqsomani.dev`
   - Click **Add**

2. **Vercel will show you DNS records** you need to add (see Step 4)

## Step 4: Configure DNS Records

You need to add DNS records at your domain registrar to point to Vercel.

### Option A: Using A Record (Recommended)

1. **In your domain registrar's DNS settings**, add:
   ```
   Type: A
   Name: @ (or leave blank, or "tanishq.dev")
   Value: 216.198.79.1
   TTL: Auto (or 3600)
   ```

2. **Add CNAME for www** (optional but recommended):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: Auto (or 3600)
   ```

**Important**: Vercel has updated their IP addresses. Use `216.198.79.1` (the new IP shown in your Vercel dashboard) instead of the old `76.76.21.21`. The old IPs still work, but the new ones are recommended.

### Option B: Using CNAME (Alternative)

1. **Add CNAME record**:
   ```
   Type: CNAME
   Name: @ (or leave blank)
   Value: cname.vercel-dns.com
   TTL: Auto
   ```

**Note**: Some registrars don't allow CNAME on root domain (@). If that's the case, use Option A.

## Step 5: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** for most cases
- Vercel will show "Valid Configuration" when DNS is correct

## Step 6: SSL Certificate (Automatic!)

- Vercel **automatically provisions SSL certificates** via Let's Encrypt
- Your site will be available at `https://tanishqsomani.dev`
- This happens automatically once DNS is configured correctly

## Step 7: Verify Everything Works

1. Visit `https://tanishqsomani.dev` (or `http://` - it will redirect)
2. Check that your portfolio loads correctly
3. Test all links and embedded demos

## Troubleshooting

### Domain Not Working?

1. **Check DNS propagation**: Use [whatsmydns.net](https://www.whatsmydns.net) to see if DNS has propagated
2. **Verify DNS records**: Make sure A record points to `216.198.79.1` (or the IP shown in your Vercel dashboard) or CNAME points to `cname.vercel-dns.com`
3. **Check Vercel dashboard**: Look for any error messages in Settings → Domains
4. **Wait longer**: Sometimes DNS takes up to 48 hours (rare, but possible)
5. **Click "Refresh" in Vercel**: After adding DNS records, click the "Refresh" button in Vercel dashboard to re-check configuration

### SSL Certificate Issues?

- Vercel handles SSL automatically
- If certificate isn't issued, check DNS configuration
- Make sure domain is properly added in Vercel dashboard

### Want Both www and non-www?

Vercel can handle both:
- Add both `tanishqsomani.dev` and `www.tanishqsomani.dev` in Vercel
- Configure redirect (Vercel will suggest this)
- Choose one as primary (usually non-www)

## Example DNS Configuration (Google Domains)

If using Google Domains:

1. Go to **DNS** section
2. Under **Custom resource records**, add:
   - **Name**: `@`
   - **Type**: `A`
   - **TTL**: `3600`
   - **Data**: `216.198.79.1`
3. Add another:
   - **Name**: `www`
   - **Type**: `CNAME`
   - **TTL**: `3600`
   - **Data**: `cname.vercel-dns.com`

**Note**: The IP address `216.198.79.1` is the current Vercel IP shown in your dashboard. Always use the IP address displayed in your Vercel project's domain settings.

## Cost Summary

- **Domain**: ~$12-20/year for `.dev`
- **Vercel Hosting**: **FREE** (Hobby plan is free)
- **SSL Certificate**: **FREE** (included with Vercel)
- **Total**: Just the domain cost!

## Quick Checklist

- [ ] Purchase `tanishqsomani.dev` domain
- [ ] Deploy site to Vercel
- [ ] Add domain in Vercel Settings → Domains
- [ ] Configure DNS records at registrar
- [ ] Wait for DNS propagation (15-30 min)
- [ ] Verify SSL certificate is active
- [ ] Test site at `https://tanishqsomani.dev`

## Need Help?

- Vercel Docs: https://vercel.com/docs/concepts/projects/domains
- Vercel Support: Very responsive, can help with DNS issues

