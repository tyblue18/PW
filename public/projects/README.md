# Project Images Directory

Place your project images, graphs, and visualizations in subdirectories here.

## Structure

```
public/
└── projects/
    ├── pso-mri-segmentation/     # Images for PSO project
    │   ├── brain-slice-1.png
    │   ├── brain-slice-2.png
    │   ├── dice-score-graph.png
    │   └── ...
    ├── ai-volunteer-scheduler/    # Images for scheduler project
    └── ...
```

## Image Guidelines

1. **Format**: Use PNG or JPG for images
2. **Size**: Optimize images for web (recommended: max 2000px width)
3. **Naming**: Use descriptive, lowercase names with hyphens (e.g., `brain-slice-1.png`)

## Adding Images to Projects

1. Place images in the appropriate project folder under `public/projects/[project-slug]/`
2. Update your project in `/data/projects.ts`:

```typescript
images: [
  {
    src: "/projects/pso-mri-segmentation/brain-slice-1.png",
    alt: "Description of image",
    caption: "Optional caption text"
  }
]
```

## Graph Images

For graphs and data visualizations, use the `graphs` field:

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




