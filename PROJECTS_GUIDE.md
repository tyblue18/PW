# How to Add Your Projects

This guide explains how to add your own projects to the portfolio website.

## Quick Start

All projects are stored in `/data/projects.ts`. To add a new project:

1. Open `/data/projects.ts`
2. Add a new project object to the `projects` array
3. Make sure to include all required fields

## Project Structure

Each project follows this structure:

```typescript
{
  slug: "unique-project-slug",           // URL-friendly identifier (required)
  title: "Project Title",                // Display name (required)
  description: "Short description",      // Shown on main page (required)
  longDescription: "Detailed description", // Shown on detail page (optional)
  thumbnail: "🎨",                       // Emoji or icon (required)
  github: "https://github.com/...",      // GitHub URL (required)
  demo: "https://demo-url.com" | null,  // Demo URL or null (optional)
  tags: ["Tag1", "Tag2"],               // Array of tags (required)
  featured: true,                        // Show on main page? (required)
  
  // Optional fields for detail page:
  technologies: ["Tech1", "Tech2"],     // Technologies used
  challenges: ["Challenge 1", ...],     // Key challenges faced
  results: ["Result 1", ...],           // Results and impact
  date: "2024",                         // Project date
  
  // Visual content (optional):
  images: [                              // Project images with captions
    {
      src: "/projects/slug/image.png",
      alt: "Image description",
      caption: "Optional caption"
    }
  ],
  graphs: [                              // Data visualizations and graphs
    {
      src: "/projects/slug/graph.png",
      alt: "Graph description",
      title: "Graph Title",
      caption: "What the graph shows"
    }
  ],
  pipeline: [                            // Pipeline/workflow steps
    {
      step: 1,
      title: "Step Title",
      description: "What happens in this step",
      icon: "📥"  // Optional emoji icon
    }
  ],
  metrics: [                            // Key performance metrics
    {
      label: "Metric Name",
      value: "123",
      description: "What this metric means"
    }
  ]
}
```

## Example: Adding a New Project

```typescript
{
  slug: "my-awesome-project",
  title: "My Awesome Project",
  description: "A brief description that appears on the main projects page.",
  longDescription: "A detailed description explaining what the project does, how it works, and why it's significant. This appears on the project detail page.",
  thumbnail: "🚀",
  github: "https://github.com/yourusername/my-awesome-project",
  demo: "https://my-awesome-project.vercel.app",
  tags: ["React", "TypeScript", "Next.js"],
  featured: true,
  technologies: ["React", "TypeScript", "Next.js", "TailwindCSS"],
  challenges: [
    "Implementing real-time data synchronization",
    "Optimizing performance for large datasets",
    "Creating responsive design for mobile devices"
  ],
  results: [
    "Reduced load time by 60%",
    "Achieved 99.9% uptime",
    "Received positive feedback from 100+ users"
  ],
  date: "2024",
}
```

## Step-by-Step Instructions

### 1. Open the Projects File

Navigate to `/data/projects.ts` in your editor.

### 2. Add Your Project

Add a new object to the `projects` array. Make sure:
- The `slug` is unique and URL-friendly (lowercase, hyphens instead of spaces)
- Set `featured: true` if you want it on the main page
- Include at least: `slug`, `title`, `description`, `thumbnail`, `github`, `tags`, `featured`

### 3. Generate the Slug

The slug is used in the URL: `/projects/your-slug-here`

Examples:
- "My Awesome Project" → `"my-awesome-project"`
- "AI Chatbot" → `"ai-chatbot"`
- "E-Commerce Platform" → `"e-commerce-platform"`

### 4. Test Your Project

1. Run `npm run dev`
2. Navigate to `http://localhost:3000`
3. Click on your project to see the detail page
4. Visit `http://localhost:3000/projects/your-slug` directly

## Field Descriptions

### Required Fields

- **slug**: Unique identifier for the project URL
- **title**: Project name displayed everywhere
- **description**: Short description (1-2 sentences) for the main page
- **thumbnail**: Emoji or icon representing the project
- **github**: Link to your GitHub repository
- **tags**: Array of technology/topic tags
- **featured**: `true` to show on main page, `false` to hide

### Optional Fields (for Detail Page)

- **longDescription**: Detailed project description
- **technologies**: List of technologies/frameworks used
- **challenges**: Key challenges you overcame
- **results**: Results, metrics, or impact
- **date**: When the project was completed
- **demo**: External demo URL (or `null`)

#### Visual Content Fields

- **images**: Array of image objects with `src`, `alt`, and optional `caption`
- **graphs**: Array of graph/visualization objects with `src`, `alt`, `title`, and optional `caption`
- **pipeline**: Array of pipeline step objects showing your workflow
- **metrics**: Array of metric objects displaying key performance indicators

## Adding Images, Graphs, and Visualizations

### Step 1: Add Images to Public Folder

1. Create a folder for your project: `public/projects/[your-project-slug]/`
2. Place your images there (PNG or JPG format)
3. Optimize images for web (recommended: max 2000px width)

### Step 2: Add Images to Project Data

```typescript
images: [
  {
    src: "/projects/pso-mri-segmentation/brain-slice-1.png",
    alt: "Original MRI brain slice",
    caption: "T1-weighted MRI scan showing brain anatomy"
  },
  {
    src: "/projects/pso-mri-segmentation/brain-slice-2.png",
    alt: "Segmented tumor region",
    caption: "PSO segmentation result highlighting tumor"
  }
]
```

### Step 3: Add Graphs/Data Visualizations

```typescript
graphs: [
  {
    src: "/projects/pso-mri-segmentation/dice-score-graph.png",
    alt: "Dice score convergence",
    title: "Dice Score Convergence",
    caption: "PSO optimization showing improvement over iterations"
  }
]
```

### Step 4: Add Pipeline Visualization

```typescript
pipeline: [
  {
    step: 1,
    title: "Data Preprocessing",
    description: "Load and preprocess MRI scans, normalize intensity values",
    icon: "📥"  // Optional emoji
  },
  {
    step: 2,
    title: "PSO Initialization",
    description: "Initialize particle swarm with segmentation parameters",
    icon: "🔧"
  }
]
```

### Step 5: Add Key Metrics

```typescript
metrics: [
  {
    label: "Dice Score",
    value: "0.813",
    description: "Average Dice coefficient on validation set"
  },
  {
    label: "False Positives",
    value: "0",
    description: "Zero false positives across test dataset"
  }
]
```

## Tips

1. **Keep descriptions concise**: The main description should be 1-2 sentences
2. **Use meaningful tags**: Tags help with filtering and SEO
3. **Be specific with results**: Include numbers/metrics when possible
4. **Add visual content**: Images, graphs, and pipeline visualizations make projects stand out
5. **Optimize images**: Compress images before adding to keep site fast
6. **Update regularly**: Keep your projects up-to-date with latest work

## Removing Projects

To remove a project, simply delete its object from the `projects` array in `/data/projects.ts`.

## Hiding Projects from Main Page

Set `featured: false` to keep the project in the system but hide it from the main page. It will still be accessible via direct URL.

## Need Help?

- Check existing projects in `/data/projects.ts` for examples
- The project detail page automatically generates from your data
- All projects are statically generated for optimal performance

