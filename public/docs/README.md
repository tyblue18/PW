# Research Papers & Documentation

Place your research papers and project documentation PDFs in this directory.

## File Structure

```
public/
└── docs/
    ├── pso-mri-segmentation-paper.pdf
    └── [other-project]-paper.pdf
```

## Adding a Paper to a Project

1. Place your PDF in this `docs/` folder
2. Update the project in `/data/projects.ts`:

```typescript
{
  // ... other project fields
  paper: "/docs/your-paper-name.pdf",
}
```

## File Naming

Use descriptive, URL-friendly names:
- ✅ `pso-mri-segmentation-paper.pdf`
- ✅ `ai-volunteer-scheduler-paper.pdf`
- ❌ `paper.pdf` (too generic)
- ❌ `My Paper.pdf` (spaces and capitals)

## External Links

If your paper is hosted elsewhere (e.g., arXiv, ResearchGate), you can use a full URL:

```typescript
paper: "https://arxiv.org/abs/1234.5678",
```

## Notes

- PDFs in the `public/` folder are served statically by Next.js
- Files are accessible at `/docs/filename.pdf`
- Keep file sizes reasonable for web hosting (recommended: < 10MB)




