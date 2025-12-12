# Troubleshooting 404 Errors

If you're getting a "Project Not Found" error, try these steps:

## 1. Restart the Dev Server

After making changes to project data, restart the dev server:

```bash
# Stop the server (Ctrl+C if running in terminal)
# Then restart:
npm run dev
```

## 2. Check the URL

Make sure you're using the correct URL format:
- ✅ Correct: `http://localhost:3000/projects/pso-mri-segmentation`
- ❌ Wrong: `http://localhost:3000/projects/pso_mri_segmentation` (underscores)
- ❌ Wrong: `http://localhost:3000/pso-mri-segmentation` (missing /projects/)

## 3. Clear Browser Cache

Hard refresh the page:
- **Mac**: `Cmd + Shift + R`
- **Windows/Linux**: `Ctrl + Shift + R`

## 4. Rebuild the Project

If the issue persists, rebuild:

```bash
npm run build
npm run dev
```

## 5. Verify Project Slug

Check that the project slug in `/data/projects.ts` matches the URL:
- Slug: `"pso-mri-segmentation"`
- URL: `/projects/pso-mri-segmentation`

## 6. Check for Syntax Errors

Make sure the project object in `/data/projects.ts` is properly closed with all commas and brackets.

## Common Issues

- **Paper field added**: After adding the `paper` field, restart the dev server
- **New images added**: Restart dev server after adding images
- **TypeScript errors**: Check terminal for compilation errors



