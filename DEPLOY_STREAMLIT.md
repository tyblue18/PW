# Deploy Your Streamlit App for Interactive Demo

Your Password Security Enhancement System needs to be deployed to work as an interactive embedded demo.

## Quick Deploy to Streamlit Cloud (5 minutes)

### Step 1: Push Code to GitHub

1. Make sure your Streamlit app code is in a GitHub repository
2. The main file should be `app.py` (or whatever your Streamlit entry point is)

### Step 2: Deploy to Streamlit Cloud

1. Go to https://streamlit.io/cloud
2. Sign in with your GitHub account
3. Click **"New app"**
4. Select your repository
5. Set the **Main file path** (e.g., `app.py`)
6. Click **"Deploy"**

### Step 3: Get Your App URL

Your app will be available at:
```
https://your-app-name.streamlit.app
```

### Step 4: Update Portfolio

In `/data/projects.ts`, update the `embeddedDemo.src`:

```typescript
embeddedDemo: {
  type: "iframe",
  src: "https://your-app-name.streamlit.app", // ← Your Streamlit URL here
  height: "800px"
}
```

## Alternative: Deploy to Other Platforms

### Railway
- Sign up at https://railway.app
- Connect GitHub repo
- Add Python buildpack
- Set start command: `streamlit run app.py --server.port $PORT`

### Render
- Sign up at https://render.com
- Create new Web Service
- Connect GitHub repo
- Build command: `pip install -r requirements.txt`
- Start command: `streamlit run app.py --server.port $PORT`

### Heroku
- Install Heroku CLI
- Create `Procfile`: `web: streamlit run app.py --server.port=$PORT --server.address=0.0.0.0`
- Deploy: `git push heroku main`

## Requirements File

Make sure you have a `requirements.txt` with:
```
streamlit
langchain
chromadb
# ... all your dependencies
```

## After Deployment

Once deployed, your interactive demo will:
- ✅ Load directly in the portfolio page
- ✅ Be fully interactive
- ✅ Work without opening new tabs
- ✅ Show in the "Try It Live" section

## Current Status

- ❌ Google Drive link (won't embed - blocked by Google)
- ⏳ Waiting for Streamlit deployment URL
- ✅ Demo video button works (opens Google Drive in new tab)



