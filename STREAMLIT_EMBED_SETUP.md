# Making Streamlit App Embeddable

Your Streamlit app needs to be configured to allow iframe embedding.

## Option 1: Streamlit Cloud Settings (Easiest)

1. Go to your Streamlit Cloud dashboard: https://share.streamlit.io/
2. Click on your app: `password-security-enhancements`
3. Click **"Settings"** (gear icon)
4. Scroll to **"App settings"**
5. Enable **"Allow embedding"** or **"Public access"**
6. Save changes

## Option 2: Add Config to Your Streamlit App

Add this to your Streamlit app code (in `app.py` or create `.streamlit/config.toml`):

### Method A: In your app.py (at the top)

```python
import streamlit as st

st.set_page_config(
    page_title="Password Security Enhancement",
    page_icon="🔐",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Add this to allow iframe embedding
st.markdown("""
<style>
    iframe {
        border: none;
    }
</style>
""", unsafe_allow_html=True)
```

### Method B: Create config file

Create `.streamlit/config.toml` in your Streamlit project:

```toml
[server]
headless = true
enableXsrfProtection = false
enableCORS = false

[browser]
gatherUsageStats = false
```

Then push this to GitHub and redeploy on Streamlit Cloud.

## Option 3: Update Portfolio Iframe Settings

If Streamlit still blocks embedding, we can add additional iframe attributes. Let me know if you need this.

## Test It

1. After enabling embedding in Streamlit Cloud settings
2. Visit your portfolio: `/projects/password-security-enhancement`
3. The "Try It Live" section should show your interactive Streamlit app

## Common Issues

- **Blank iframe**: Check Streamlit Cloud settings for "Allow embedding"
- **CORS errors**: Make sure CORS is disabled in Streamlit config
- **Loading forever**: Check browser console for errors

## Quick Fix

The easiest way is **Option 1** - just enable embedding in Streamlit Cloud dashboard settings!




