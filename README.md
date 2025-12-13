# Personal Portfolio Website

A high-impact, one-page personal portfolio website showcasing technical skills, projects, and professional background.

## Features

- **Hero Section**: Professional introduction with CTA buttons
- **Technical Skills**: Highlighted expertise in AI, ML, optimization, and software development
- **Featured Projects**: Showcase of projects with individual detail pages
- **Project Detail Pages**: Dynamic routes for each project with full descriptions, technologies, challenges, and results
- **About Me**: Personal story highlighting discipline and long-term goals
- **Contact**: Social links for email, LinkedIn, and GitHub

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **React**

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Hero Section** (`components/Hero.tsx`):
   - Replace avatar placeholder with your photo
   - Update name and tagline

2. **Projects** (`data/projects.ts`):
   - Add/edit projects in the centralized projects data file
   - Each project has its own detail page at `/projects/[slug]`
   - See `PROJECTS_GUIDE.md` for detailed instructions on adding projects

3. **Contact** (`components/Contact.tsx`):
   - Update email, LinkedIn, and GitHub URLs

4. **About Me** (`components/AboutMe.tsx`):
   - Customize your personal story

### Add Resume

Place your resume PDF in the `public` folder as `resume.pdf` for the download button to work.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy automatically

### Custom Domain

Configure your domain (e.g., `tanishq.dev` or `tanishqs.com`) in Vercel's project settings.

## Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Main page
│   ├── globals.css          # Global styles
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx     # Dynamic project detail pages
│   └── not-found.tsx        # 404 page
├── components/
│   ├── Hero.tsx             # Hero section
│   ├── TechnicalSkills.tsx
│   ├── FeaturedProjects.tsx # Projects grid on main page
│   ├── ProjectDetail.tsx    # Project detail page component
│   ├── AboutMe.tsx
│   └── Contact.tsx
├── data/
│   └── projects.ts          # Centralized projects data
└── public/                  # Static assets
```

## Adding Projects

To add a new project:

1. Open `/data/projects.ts`
2. Add a new project object to the `projects` array
3. Include required fields: `slug`, `title`, `description`, `thumbnail`, `github`, `tags`, `featured`
4. Optionally add: `longDescription`, `technologies`, `challenges`, `results`, `date`

**See `PROJECTS_GUIDE.md` for complete instructions and examples.**

## License

MIT



