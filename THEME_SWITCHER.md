# UI Theme Switcher Guide

I've created 5 different UI themes you can try:

## Available Themes:

### 1. **Space Theme** (Current)
- File: `components/Hero.tsx` (current)
- Dark space background, stars, planet
- Teal/cyan colors
- Modern engineer aesthetic

### 2. **Minimal Theme**
- File: `components/themes/MinimalHero.tsx`
- Clean white background
- Simple, elegant design
- Lots of white space
- Black/gray colors

### 3. **Retro Theme**
- File: `components/themes/RetroHero.tsx`
- 80s/90s computer aesthetic
- Purple/pink/cyan colors
- Pixelated elements
- CRT scanlines effect

### 4. **Terminal Theme**
- File: `components/themes/TerminalHero.tsx`
- Terminal/console aesthetic
- Green/amber on black
- Typing animation
- Monospace fonts

### 5. **Colorful Theme**
- File: `components/themes/ColorfulHero.tsx`
- Bright gradients
- Vibrant colors
- Playful design
- Animated shapes

### 6. **Brutalist Theme**
- File: `components/themes/BrutalistHero.tsx`
- Bold, raw design
- Yellow/black high contrast
- Geometric shapes
- No-nonsense aesthetic

## How to Switch:

In `app/page.tsx`, change the import:

**Current (Space):**
```tsx
import Hero from "@/components/Hero";
```

**To try Minimal:**
```tsx
import Hero from "@/components/themes/MinimalHero";
```

**To try Retro:**
```tsx
import Hero from "@/components/themes/RetroHero";
```

**To try Terminal:**
```tsx
import Hero from "@/components/themes/TerminalHero";
```

**To try Colorful:**
```tsx
import Hero from "@/components/themes/ColorfulHero";
```

**To try Brutalist:**
```tsx
import Hero from "@/components/themes/BrutalistHero";
```

## Which one do you want to try?

Tell me which theme you like and I can:
1. Switch it for you
2. Create matching versions of other components (Skills, Projects, etc.)
3. Create a theme switcher button so you can toggle between them
