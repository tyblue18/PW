# Planet Style Options

I've created different planet styles that look less AI-generated. You can switch between them by changing the `style` prop in `Hero.tsx`.

## Available Styles:

### 1. `hand-drawn` (Current)
- Organic, irregular shapes
- Slightly blurred edges
- Less perfect, more artistic
- Natural-looking continents

### 2. `pixel`
- Pixelated, retro game style
- 8-bit aesthetic
- Sharp, blocky appearance
- Nostalgic feel

### 3. `minimal`
- Very simple, clean design
- Just outlines and gradients
- Modern, minimalist aesthetic
- Less detail, more abstract

### 4. `watercolor`
- Soft, blurred edges
- Paint-like appearance
- Artistic, hand-painted look
- Softer colors

### 5. `neon`
- Glowing, neon aesthetic
- Bright green/teal colors
- Cyberpunk/futuristic feel
- High contrast

## How to Change:

In `components/Hero.tsx`, change:
```tsx
<StyledPlanet size={600} style="hand-drawn" />
```

To any of:
- `style="hand-drawn"`
- `style="pixel"`
- `style="minimal"`
- `style="watercolor"`
- `style="neon"`

## Which style do you prefer?

Let me know which one you like, or if you want me to create a different style!
