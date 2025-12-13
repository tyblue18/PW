# Adding Images to PSO Project

## Required Images

Place these three images in this directory (`public/projects/pso/`):

### 1. Comparison Image
**Filename:** `comparison-input-otsu-pso.png`
- Shows three panels: Input MRI, Otsu segmentation, and PSO mask
- Demonstrates superior PSO precision compared to Otsu method

### 2. Segmentation Overlay
**Filename:** `pso-segmentation-overlay.png`
- Shows PSO Tumor Segmentation Overlay with red masks
- Displays precise tumor identification on axial brain slice

### 3. Pipeline Flowchart
**Filename:** `pso-pipeline-flowchart.png`
- Complete flowchart showing all 6 pipeline steps
- Visual representation of the segmentation workflow

## Image Specifications

- **Format:** PNG (recommended) or JPG
- **Optimization:** Compress images for web (max 2000px width recommended)
- **Naming:** Use exact filenames as listed above

## After Adding Images

1. Images will automatically appear on the project detail page
2. The comparison image will be in the Image Gallery section
3. The overlay image will also be in the Image Gallery
4. The pipeline flowchart will appear in the Graphs & Visualizations section
5. The pipeline steps are already configured in the project data

## Testing

1. Run `npm run dev`
2. Navigate to `/projects/pso-mri-segmentation`
3. Verify all images display correctly
4. Click images to view in lightbox modal




