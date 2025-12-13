# Unity WebGL Build Setup

To embed your Unity Car Soccer game in the portfolio:

## Step 1: Build for WebGL

1. Open your Unity project
2. Go to **File → Build Settings**
3. Select **WebGL** platform
4. Click **Switch Platform** (if needed)
5. Click **Build** and choose a folder (e.g., `Builds/WebGL`)

## Step 2: Copy Build Files

Copy the entire WebGL build folder contents to:
```
public/projects/car-soccer/
```

Your structure should look like:
```
public/
└── projects/
    └── car-soccer/
        ├── index.html          (Unity's generated HTML)
        ├── Build/              (Unity build files)
        │   ├── YourGame.loader.js
        │   ├── YourGame.framework.js
        │   ├── YourGame.data
        │   └── ...
        ├── TemplateData/       (Unity template files)
        │   ├── style.css
        │   └── ...
        └── UNITY_SETUP.md
```

## Step 3: Update Project Data

The project is already configured to use the Unity build. Make sure `index.html` is in the car-soccer folder.

## Step 4: Customize Unity Template (Optional)

You can customize the Unity WebGL template:
- Edit `TemplateData/style.css` for styling
- Modify `index.html` to match your site's theme
- Remove Unity branding if desired

## Important Notes

1. **File Size**: WebGL builds can be large. Consider:
   - Compressing textures
   - Using compression in build settings
   - Enabling compression on your hosting (gzip/brotli)

2. **Loading Screen**: Unity shows a default loading screen. You can customize it in the template.

3. **Browser Compatibility**: WebGL requires modern browsers with WebGL support.

4. **Performance**: Large Unity projects may take time to load. Consider:
   - Showing a loading indicator
   - Optimizing the build size
   - Using CDN for faster delivery

## Alternative: Host Separately

If the build is too large, you can:
1. Deploy the WebGL build to Vercel/Netlify separately
2. Use iframe embed with the deployed URL
3. Update project data to use `type: "iframe"` instead

## Current Configuration

The project is set to load from:
- HTML file: `/projects/car-soccer/index.html`
- Type: `html` (embeds the Unity build directly)




