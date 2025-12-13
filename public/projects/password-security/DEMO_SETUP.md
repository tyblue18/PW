# Password Security Enhancement System - Demo Setup

## Current Setup

Your project is configured with:
- **Demo Video Link**: Google Drive link (opens in new tab)
- **Embedded Demo**: Configured for Streamlit app (needs deployment)

## Option 1: Deploy Streamlit App (Recommended for Interactive Demo)

For the best user experience, deploy your Streamlit app:

### Streamlit Cloud (Free & Easy)

1. Push your code to GitHub
2. Go to https://streamlit.io/cloud
3. Sign in with GitHub
4. Click "New app"
5. Select your repository
6. Set main file path (e.g., `app.py`)
7. Deploy!

Your app will be available at: `https://your-app-name.streamlit.app`

Then update in `/data/projects.ts`:
```typescript
embeddedDemo: {
  type: "iframe",
  src: "https://your-app-name.streamlit.app",
  height: "800px"
}
```

### Alternative Hosting Options

- **Heroku**: Deploy Streamlit apps with buildpacks
- **Railway**: Simple deployment platform
- **Render**: Free tier available

## Option 2: Embed YouTube Video (If Demo Video)

If your Google Drive link is a demo video:

1. Upload to YouTube (public or unlisted)
2. Get the YouTube video ID
3. Use YouTube embed URL: `https://www.youtube.com/embed/VIDEO_ID`

Then update the `embeddedDemo` to:
```typescript
embeddedDemo: {
  type: "iframe",
  src: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  height: "600px"
}
```

## Option 3: Make Google Drive File Embeddable

1. Right-click the file in Google Drive
2. Select "Share" → "Change to anyone with the link"
3. Get the file ID from the URL
4. Use this embed URL format:
   ```
   https://drive.google.com/file/d/FILE_ID/preview
   ```

Then update:
```typescript
embeddedDemo: {
  type: "iframe",
  src: "https://drive.google.com/file/d/1YBEiPO4fZKozyXb6ubaCQqtJr1wh7UlP/preview",
  height: "800px"
}
```

## Current Configuration

- ✅ Demo video button links to Google Drive
- ⏳ Embedded demo waiting for Streamlit deployment URL
- 📝 Project details and metrics are complete

## Next Steps

1. **Deploy Streamlit app** (recommended for interactive demo)
2. **OR** convert Google Drive link to embeddable format
3. **OR** upload demo video to YouTube and embed

Once you have the URL, update the `embeddedDemo.src` field in `/data/projects.ts`.




