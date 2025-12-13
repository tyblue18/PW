# How to Enable Streamlit App Embedding

To embed your Streamlit app in your portfolio, you need to configure it to allow iframe embedding.

## Step 1: Add Config File to Your Streamlit Project

In your Streamlit project repository (the one deployed on Streamlit Cloud):

1. **Create a `.streamlit` folder** at the root of your repository (if it doesn't exist)

2. **Create a `config.toml` file** inside `.streamlit/` with this content:

```toml
[server]
enableXsrfProtection = false
enableCORS = false
```

## Step 2: Commit and Push

```bash
git add .streamlit/config.toml
git commit -m "Enable iframe embedding for portfolio"
git push
```

## Step 3: Wait for Redeployment

Streamlit Cloud will automatically detect the changes and redeploy your app (usually takes 1-2 minutes).

## Step 4: Verify It Works

1. Visit your portfolio: `/projects/password-security-enhancement`
2. Click the "Interactive Demo" button
3. The embedded Streamlit app should load in the section below

## File Structure

Your Streamlit project should look like this:

```
your-streamlit-repo/
├── .streamlit/
│   └── config.toml          ← Create this file
├── app.py                   ← Your main Streamlit file
├── requirements.txt
└── ... other files
```

## Alternative: Check Streamlit Cloud Settings

Some Streamlit Cloud versions have a settings option:

1. Go to https://share.streamlit.io/
2. Click on your app
3. Click **Settings** (gear icon)
4. Look for **"Allow embedding"** or **"Public access"** option
5. Enable it if available

## Troubleshooting

### Still seeing white screen?

1. **Check browser console** (F12) for any errors
2. **Verify the config file** is in the correct location (`.streamlit/config.toml`)
3. **Make sure you pushed** the changes to GitHub
4. **Wait a few minutes** after pushing - Streamlit Cloud needs time to redeploy
5. **Try opening the app directly** - if it works in a new tab but not embedded, it's an embedding issue

### Common Issues

- **Config file not found**: Make sure `.streamlit/config.toml` is at the root of your repo
- **Still white after redeploy**: Try clearing your browser cache or opening in incognito mode
- **CORS errors**: The config file should fix this, but double-check the settings

## Test Your Config

After adding the config, you can test if embedding works by trying to embed your app in a simple HTML file:

```html
<iframe 
  src="https://password-security-enhancements-okygcudyad9pxk3tpbryb6.streamlit.app/" 
  width="100%" 
  height="600px">
</iframe>
```

If this works, embedding should work in your portfolio too!


