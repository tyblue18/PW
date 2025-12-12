# Embedding Projects in Your Portfolio

This guide explains how to embed and run projects directly inside your portfolio website.

## Supported Embed Types

### 1. Iframe Embed (Deployed Projects)

For projects deployed on Vercel, Netlify, GitHub Pages, or any other hosting:

```typescript
{
  slug: "my-project",
  // ... other fields
  embeddedDemo: {
    type: "iframe",
    src: "https://my-project.vercel.app",
    height: "800px" // Optional, default is 600px
  }
}
```

**Example:**
```typescript
embeddedDemo: {
  type: "iframe",
  src: "https://ai-scheduler-demo.vercel.app",
  height: "700px"
}
```

### 2. HTML File Embed (Static Projects)

For projects that are standalone HTML/JS files:

1. Place your HTML file in `public/projects/[project-slug]/`
2. Reference it in your project:

```typescript
{
  slug: "my-project",
  // ... other fields
  embeddedDemo: {
    type: "html",
    htmlFile: "/projects/my-project/index.html",
    height: "600px"
  }
}
```

**File Structure:**
```
public/
└── projects/
    └── my-project/
        ├── index.html
        ├── style.css
        └── script.js
```

**Note:** Make sure all assets (CSS, JS, images) use relative paths.

### 3. React Component Embed (Advanced)

For projects built as React components:

1. Create a component in `components/projects/`
2. Import and use it:

```typescript
// In ProjectDetail.tsx, add:
import MyProjectDemo from "@/components/projects/MyProjectDemo";

// Then render conditionally:
{project.embeddedDemo?.component === "MyProjectDemo" && <MyProjectDemo />}
```

## Examples

### Example 1: Deployed Web App

```typescript
{
  slug: "ai-volunteer-scheduler",
  title: "AI Volunteer Scheduler",
  // ... other fields
  embeddedDemo: {
    type: "iframe",
    src: "https://volunteer-scheduler.vercel.app",
    height: "700px"
  }
}
```

### Example 2: Static HTML Game

```typescript
{
  slug: "car-soccer-game",
  title: "Car Soccer Game",
  // ... other fields
  embeddedDemo: {
    type: "html",
    htmlFile: "/projects/car-soccer/index.html",
    height: "600px"
  }
}
```

### Example 3: Dashboard/Visualization

```typescript
{
  slug: "hpc-dashboard",
  title: "HPC Dashboard",
  // ... other fields
  embeddedDemo: {
    type: "iframe",
    src: "https://hpc-dashboard.vercel.app",
    height: "800px"
  }
}
```

## Best Practices

1. **Height**: Adjust height based on your project's needs
   - Dashboards: `800px` or `1000px`
   - Games: `600px`
   - Forms/Tools: `500px` - `700px`

2. **Responsive Design**: Make sure your embedded project is responsive

3. **Performance**: 
   - Keep iframe sources lightweight
   - Optimize HTML files before embedding
   - Consider lazy loading for heavy projects

4. **Security**: 
   - Only embed projects you trust
   - Use HTTPS for iframe sources
   - Be cautious with user input in embedded projects

## Troubleshooting

### Iframe Not Loading
- Check CORS settings on the deployed site
- Verify the URL is correct and accessible
- Check browser console for errors

### HTML File Not Loading
- Verify file path is correct (starts with `/projects/`)
- Check that all assets use relative paths
- Ensure file is in the `public` folder

### Component Not Rendering
- Verify component is imported correctly
- Check for TypeScript/React errors
- Ensure component is exported as default

## Current Setup

The Car Soccer game is currently embedded as a React component in the main page. You can move it to use the embedded demo system by:

1. Creating an HTML version or deploying it separately
2. Adding `embeddedDemo` to the car-soccer project in `/data/projects.ts`



