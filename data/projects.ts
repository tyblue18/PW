export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectGraph {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
}

export interface PipelineStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  thumbnail: string;
  /** Optional logo image (path in /public). Rendered on a light tile so dark marks stay readable. */
  logo?: string;
  github: string;
  demo: string | null;
  demoVideo?: string | null; // Link to demo video (YouTube, Vimeo, or Google Drive)
  paper?: string | null; // Link to research paper (PDF or URL)
  embeddedDemo?: {
    type: "iframe" | "component" | "html";
    src?: string; // For iframe: URL to embed
    component?: string; // For component: component name to render
    htmlFile?: string; // For html: path to HTML file in public folder
    height?: string; // Custom height (default: "600px")
  };
  tags: string[];
  featured: boolean;
  // Additional fields for detail page
  images?: ProjectImage[];
  graphs?: ProjectGraph[];
  pipeline?: PipelineStep[];
  metrics?: Metric[];
  technologies?: string[];
  challenges?: string[];
  results?: string[];
  date?: string;
}

export const projects: Project[] = [
  {
    slug: "que-fitness-tracker",
    title: "Que — Offline-First Training OS",
    description: "A mobile-first, offline-first PWA for personal training, nutrition tracking, and friend-vs-friend fitness competition. Deployed on Vercel and in active use by real users.",
    longDescription: "Que is a training OS built to consolidate workout logging, calorie tracking, and weight-management projections into one offline-first app that works at the gym, in the kitchen, and on the trail without depending on a network. localStorage is the authoritative source for the active session, so the app is fully functional with no connectivity; every edit stamps its day with an `_editedAt` timestamp and queues a debounced 4-second push to the server, where a per-day newer-wins merge makes multi-device usage safe and surfaces every conflict to the user instead of silently dropping an edit. Beyond logging, Que grew into a multi-device social platform: 1v1 and team/free-for-all battles wagering in-app coins settled idempotently inside Prisma transactions, friend groups with a Strava-style activity feed, a server-authoritative badge and coin economy evaluated post-response behind Redis locks, cardio-aware cut/bulk plan projections, and a Jack Daniels VDOT running-plan generator. Food search merges USDA FoodData Central with Open Food Facts, and a ZXing scanner with a native BarcodeDetector fallback handles packaged foods. The app ships full observability — Sentry tunnelled through a same-origin route, PostHog and Vercel Analytics behind one typed `trackEvent()` wrapper — plus web push and four scheduled cron jobs. The goal is a working personal trainer in your pocket without the noise of mainstream fitness apps: no ads, no upsells, no engagement-bait.",
    thumbnail: "🏋️",
    logo: "/projects/que/que-logo.png",
    github: "https://github.com/tyblue18/Que",
    demo: "https://que-tanishqs.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "PWA", "Offline-First"],
    featured: true,
    technologies: [
      "Next.js 15 (App Router)",
      "React 19",
      "TypeScript 5.7",
      "Tailwind CSS v4",
      "shadcn/ui + Radix",
      "Prisma 5",
      "PostgreSQL (Neon)",
      "NextAuth 4",
      "Upstash Redis",
      "Vercel Blob",
      "Service Workers / PWA",
      "Web Push (VAPID)",
      "Framer Motion",
      "Recharts",
      "Sentry",
      "PostHog",
      "Vitest"
    ],
    challenges: [
      "Replacing naive last-device-wins sync with per-day `_editedAt` newer-wins resolution, applied identically on the server POST and the client pull-merge, so a slower-syncing device can no longer clobber fresher edits",
      "Keeping the badge and calorie-coin engine server-authoritative: full-history evaluation runs post-response in Next.js `after()` behind a 30s per-user Redis lock, with awards queued in Redis and hidden behind optimistic client popups",
      "Making competitive settlement idempotent — pot transfers run in a Prisma `$transaction` using `updateMany` with a `status: 'active'` compare-and-set guard, so a cron retry or manual replay cannot double-pay",
      "Designing a typed battle engine spanning 1v1 classic, 1v1 typed, team, and free-for-all modes, where every category is a pure `score(rows)` function over a day/3-day/week window",
      "Merging and ranking a dual-source food search (USDA + Open Food Facts) with relevance scoring, de-duplication, macro plausibility checks, and a 24h Redis cache",
      "Fixing the common PWA failure where a tab silently picks up new JS mid-session: the service worker never self-calls `skipWaiting()` and instead prompts the user to update",
      "Deferring badge-image background removal with IntersectionObserver and an LRU cache so a 50-badge grid doesn't block the main thread on open"
    ],
    results: [
      "Deployed on Vercel and in active use by a real user base, with usage tracked through an owner-only `/api/admin/stats` endpoint",
      "Fully functional offline, with silent debounced background sync and every merge conflict surfaced to the user as a toast rather than dropped",
      "60+ achievement badges plus a calorie-coin economy with append-only, fully auditable transactions",
      "Competitive social layer: 1v1 typed battles, team/FFA group battles with live standings, friend groups, and an activity feed with likes and comments",
      "Passive competition alongside opt-in battles — a \"vs. Last Week\" pace tracker and a global weekly leaderboard across steps, run distance, and lift volume",
      "Zero-token invite loop — the invite code is the inviter's username, and redemption is idempotent, two-way, and coin-rewarded for both sides",
      "Step tracking survived Google Fit's deprecation via a per-user bearer-token endpoint driven by an iOS Shortcut or Tasker, keeping Google sign-in on default scopes only",
      "Full observability: Sentry tunnelled through a same-origin route so ad blockers can't drop events, per-tab error boundaries, and a typed event catalog dual-sent to PostHog and Vercel Analytics"
    ],
    date: "2025 – Present",
    metrics: [
      {
        label: "Prisma Models",
        value: "17",
        description: "Schema powering sync, badges, coins, battles, groups, and push"
      },
      {
        label: "Achievement Badges",
        value: "60+",
        description: "Lift, cardio, and nutrition badges — added without a migration"
      },
      {
        label: "Sync Debounce",
        value: "4s",
        description: "Dirty days batched and pushed with newer-wins conflict resolution"
      },
      {
        label: "Architecture",
        value: "Offline-first",
        description: "localStorage is the source of truth; Postgres syncs behind it"
      }
    ],
    images: [
      {
        src: "/projects/que/que-social-tab.png",
        alt: "Que's social tab showing the profile header, a vs-last-week pace tracker, the global weekly leaderboard, and a friend group with an activity feed",
        caption: "The social tab in the deployed app. The profile header surfaces the badge count, day streak, and calorie-coin balance alongside a battle record. Below it, \"vs. Last Week\" compares this week's miles, lift volume, and protein against the same point in the previous week; the global weekly board ranks users by steps, run distance, or lift volume and resets on a fixed cadence; and Groups lists friend rosters with a Strava-style activity feed."
      }
    ],
  },
  {
    slug: "lumen-brain-tumor-segmentation",
    title: "Lumen — BraTS 2020 Brain Tumour Segmentation",
    description: "3-D patch-based deep learning segmentation of glioma sub-regions using a MONAI U-Net trained on BraTS 2020 multi-modal MRI, producing whole-tumour, tumour-core, and enhancing-tumour masks.",
    longDescription: "Lumen is an end-to-end deep learning pipeline for automated brain tumour segmentation on the BraTS 2020 dataset. It ingests the four standard MRI modalities for a patient — T1, T1ce, T2, and FLAIR — and runs a 3-D patch-based MONAI U-Net with sliding-window inference to produce three overlapping binary masks: whole tumour (WT), tumour core (TC), and enhancing tumour (ET). The project ships a complete training, evaluation, and prediction toolchain configured through reproducible YAML files, a single-case inference module, and a Streamlit demo deployed on Hugging Face Spaces. The demo lets you upload a patient's four modalities (plus an optional ground-truth segmentation for side-by-side comparison), scrub through axial slices, view colour-coded overlays, inspect per-region tumour volumes computed from the NIfTI voxel spacing, and download the predicted segmentation as a NIfTI file.",
    thumbnail: "🧠",
    github: "https://github.com/tyblue18/Lumen",
    demo: "https://huggingface.co/spaces/Tyblue18/Lumen",
    embeddedDemo: {
      type: "iframe",
      src: "https://tyblue18-lumen.hf.space",
      height: "800px"
    },
    tags: ["Python", "PyTorch", "MONAI", "Deep Learning", "Computer Vision", "Medical Imaging"],
    featured: true,
    technologies: [
      "Python",
      "PyTorch",
      "MONAI",
      "3D U-Net",
      "NiBabel",
      "NumPy",
      "Streamlit",
      "Hugging Face Spaces",
      "CUDA"
    ],
    challenges: [
      "Designing a 3-D patch-based pipeline with sliding-window inference to segment full multi-modal MRI volumes within GPU memory limits",
      "Co-registering and normalising four MRI modalities (T1, T1ce, T2, FLAIR) into a single model input",
      "Predicting three overlapping tumour sub-regions (WT, TC, ET) rather than mutually exclusive classes",
      "Hosting a ~154 MB model checkpoint off the main repo via the Hugging Face Hub to stay within file-size limits",
      "Building an interactive Streamlit demo with slice scrubbing, ground-truth comparison, and voxel-accurate volume reporting"
    ],
    results: [
      "Full training, evaluation, and single-case prediction CLI driven by reproducible YAML configs",
      "Segments all three BraTS sub-regions (WT, TC, ET) from a patient's four MRI modalities",
      "Interactive Hugging Face Spaces demo with axial-slice scrubbing and colour-coded overlays (green = WT, blue = TC, red = ET)",
      "Per-region tumour volume table (voxel counts and mm³/cm³) computed from the NIfTI voxel spacing",
      "Downloadable NIfTI segmentation output; ~30–60 s inference on an RTX-class GPU"
    ],
    date: "2025",
    metrics: [
      {
        label: "Input Modalities",
        value: "4",
        description: "T1, T1ce, T2, and FLAIR MRI scans per patient"
      },
      {
        label: "Tumour Sub-regions",
        value: "3",
        description: "Whole tumour, tumour core, and enhancing tumour"
      },
      {
        label: "GPU Inference",
        value: "~30–60s",
        description: "Per-patient inference on an RTX-class GPU"
      },
      {
        label: "Architecture",
        value: "3D U-Net",
        description: "MONAI patch-based sliding-window model"
      }
    ],
    images: [
      {
        src: "/projects/lumen/Lumen_screenshot.png",
        alt: "Lumen segmentation: FLAIR input, ground truth, and model prediction on an axial brain MRI slice",
        caption: "Three-panel comparison from the Lumen demo on axial slice 73/154. Left: the FLAIR input showing a hyperintense glioma. Middle: the expert ground-truth segmentation. Right: Lumen's predicted segmentation, closely matching the reference. Colour coding: green = whole tumour (WT), blue = tumour core (TC), red = enhancing tumour (ET)."
      }
    ],
  },
  {
    slug: "amp-algorithmic-market-predictor",
    title: "AMP: Algorithmic Market Predictor",
    description: "End-to-end pipeline transforming financial text data into labeled training datasets for stock movement prediction using multi-source data collection, ensemble sentiment analysis, and LLM validation.",
    longDescription: "2-AMP (Automatic Media Processing - Algorithmic Market Predictor) is a production-grade pipeline that transforms raw financial text data into labeled training datasets for stock movement prediction. The system implements a multi-stage architecture: data ingestion from SEC EDGAR filings and GDELT news articles, text preprocessing, ensemble sentiment analysis (VADER + FinBERT), LLM validation via Google Gemini, and automated price-based labeling. Features include three-tier fallback data retrieval (Submissions API → Search-Index API → HTML scraping), temporal chunking for efficient API usage, real-time RSS monitoring, and return calculation with multiple horizons (3-day, 5-day). The ensemble voting mechanism combines traditional ML (TF-IDF+Logistic Regression), lexicon-based (VADER), and transformer-based (FinBERT) models, with LLM contextual review for edge cases.",
    thumbnail: "📈",
    github: "https://github.com/tyblue18/Automated-Trading",
    demo: null,
    embeddedDemo: {
      type: "iframe",
      src: "https://tyblue18-automated-trading-app-9dse9i.streamlit.app/?embed=true",
      height: "800px"
    },
    tags: ["Python", "NLP", "Financial Data", "Sentiment Analysis", "LLM", "Machine Learning"],
    featured: true,
    technologies: [
      "Python",
      "pandas",
      "NumPy",
      "PyTorch",
      "Transformers",
      "FinBERT",
      "VADER",
      "Google Gemini API",
      "SEC EDGAR API",
      "GDELT API",
      "BeautifulSoup",
      "yfinance",
      "REST APIs"
    ],
    challenges: [
      "Implementing three-tier fallback strategy for reliable data retrieval (Submissions API → Search-Index API → HTML scraping)",
      "Designing temporal chunking strategy (daily for ≤2014, monthly for >2014) to balance API efficiency with data completeness",
      "Building ensemble voting mechanism combining VADER, FinBERT, and TF-IDF+Logistic Regression with intelligent tie-breaking",
      "Integrating LLM validation layer (Google Gemini) for contextual reasoning and edge case handling",
      "Implementing robust return calculation algorithm handling non-trading days and multiple prediction horizons",
      "Building real-time RSS monitoring system with deduplication and continuous sentiment analysis"
    ],
    results: [
      "Production-grade pipeline processing financial text from multiple heterogeneous sources (SEC EDGAR, GDELT, RSS feeds)",
      "Ensemble sentiment analysis achieving high accuracy through multi-model voting and LLM validation",
      "Automated labeling system linking text sentiment to actual market movements (3-day and 5-day returns)",
      "Robust error handling with exponential backoff retry logic and graceful degradation",
      "Real-time monitoring capabilities for live market analysis with 10-minute polling intervals",
      "Labeled datasets ready for algorithmic trading model development"
    ],
    date: "2024",
    images: [
      {
        src: "/projects/programflow.jpeg",
        alt: "AMP Program Flow Diagram",
        caption: "Complete system architecture and data flow diagram showing the end-to-end pipeline from data collection (SEC EDGAR, GDELT, RSS feeds) through text preprocessing, ensemble sentiment analysis (VADER + FinBERT), LLM validation (Google Gemini), return calculation, and automated labeling for stock movement prediction."
      }
    ],
  },
  {
    slug: "hpc-dashboard",
    title: "Perfvis: HPC Performance Visualization Dashboard",
    description: "End-to-end HPC performance analysis pipeline: C++ instrumentation with Caliper, CSV conversion via Thicket, and interactive web dashboard with 12 visualization types.",
    longDescription: "Perfvis is a comprehensive HPC performance analysis tool that instruments C++ applications with Caliper, converts performance data to CSV using LLNL Thicket, and visualizes metrics in an interactive Dash web dashboard. The system includes automatic data detection, anomaly detection, and 12 visualization types (bar graphs, line graphs, scatter plots, histograms, box plots, heatmaps, stacked area charts, roofline models, call graphs, parallel coordinates, time series, and violin plots). Features drag-and-drop CSV uploads, paginated data tables with filtering/sorting, and data export capabilities. Built with a complete automation pipeline including build scripts for Caliper, test compilation, execution, and dashboard deployment.",
    thumbnail: "📊",
    github: "https://github.com/tyblue18/HPC",
    demo: "https://hpc-nadj.onrender.com/",
    tags: ["Python", "Dash", "Plotly", "HPC", "C++", "Caliper", "Data Visualization"],
    featured: true,
    technologies: [
      "Python",
      "Dash",
      "Plotly",
      "Pandas",
      "NumPy",
      "LLNL Thicket",
      "Caliper",
      "C++",
      "CMake",
      "Bash"
    ],
    challenges: [
      "Building end-to-end pipeline from C++ instrumentation to web visualization",
      "Implementing automatic column type detection and semantic analysis (time metrics, regions, threads, nodes)",
      "Creating 12 distinct visualization types with interactive Plotly charts",
      "Handling Caliper binary format conversion to CSV via Thicket",
      "Implementing anomaly detection for performance metrics (high variance, missing values, invalid times)",
      "Managing state across 15+ Dash callbacks for real-time data updates"
    ],
    results: [
      "Complete automation pipeline: build scripts for Caliper, test compilation, execution, and dashboard deployment",
      "12 visualization types enabling comprehensive performance analysis (bar, line, scatter, histogram, box, heatmap, stacked area, roofline, call graph, parallel coordinates, time series, violin)",
      "Automatic data detection and semantic analysis for time metrics, regions, threads, and nodes",
      "Interactive web dashboard with drag-and-drop CSV uploads, filtering, sorting, and data export",
      "Production-ready system handling real Caliper performance data from HPC applications"
    ],
    date: "2024",
  },
  {
    slug: "password-security-enhancement",
    title: "Password Security Enhancement System",
    description: "AI-powered password security analysis platform combining rule-based checking with RAG-enhanced LLM explanations for comprehensive security assessments.",
    longDescription: "An AI-powered password security analysis platform that combines rule-based password checking with RAG-enhanced LLM explanations to provide comprehensive password security assessments and recommendations. Features comprehensive analysis including common password detection (1.1M+ database), pattern detection, entropy calculation, and AI-powered explanations using RAG system with NIST, PCI-DSS, and ISO 27001 standards. All processing runs locally for privacy.",
    thumbnail: "🔐",
    github: "https://github.com/tyblue18/Password-Security-Enhancements",
    demo: null,
    demoVideo: "https://drive.google.com/file/d/1YBEiPO4fZKozyXb6ubaCQqtJr1wh7UlP/view?usp=sharing",
    embeddedDemo: {
      type: "iframe",
      src: "https://password-security-enhancements-okygcudyad9pxk3tpbryb6.streamlit.app/?embed=true",
      height: "800px"
    },
    paper: null,
    tags: ["Python", "LLM", "RAG", "Streamlit", "Security", "AI"],
    featured: true,
    technologies: [
      "Python",
      "LangChain",
      "ChromaDB",
      "Streamlit",
      "OpenRouter API",
      "Llama 3.2",
      "HuggingFace Embeddings",
      "Vector Databases",
      "RAG"
    ],
    challenges: [
      "Integrating multiple vector stores (common passwords, security rules, weak patterns)",
      "Implementing intelligent variant detection (leet speak, suffixes, years)",
      "Achieving real-time processing with average response time of 0.77 seconds",
      "Ensuring 100% accuracy on common password detection",
      "Combining rule-based and AI-based analysis for comprehensive assessments"
    ],
    results: [
      "100% accuracy on common password detection across test set",
      "53-57% accuracy on pattern detection",
      "Average response time of 0.77 seconds for real-time analysis",
      "Processes 1.1M+ password database entries efficiently",
      "Privacy-first: all processing runs locally, no external API calls"
    ],
    date: "2024",
    metrics: [
      {
        label: "Password Database",
        value: "1.1M+",
        description: "Entries in common password database"
      },
      {
        label: "Detection Accuracy",
        value: "100%",
        description: "Common password detection accuracy"
      },
      {
        label: "Response Time",
        value: "0.77s",
        description: "Average analysis response time"
      },
      {
        label: "Vector Stores",
        value: "3",
        description: "Specialized knowledge bases"
      }
    ],
  },
  {
    slug: "car-soccer-game",
    title: "Interactive Car Soccer Game",
    description: "In-browser playable physics-based car soccer game built with Unity. Features realistic car physics, ball dynamics, and smooth gameplay.",
    longDescription: "A fully interactive physics-based car soccer game built with Unity. Features realistic car physics, ball dynamics, and smooth two-player gameplay. Built as a WebGL application for browser compatibility, demonstrating proficiency in game development, Unity engine, and real-time 3D rendering.",
    thumbnail: "⚽",
    github: "https://github.com/yourusername/car-soccer",
    demo: null,
    embeddedDemo: {
      type: "html",
      htmlFile: "/projects/car-soccer/index.html",
      height: "700px"
    },
    tags: ["Unity", "C#", "WebGL", "Game Development", "3D"],
    featured: true,
    technologies: ["Unity", "C#", "WebGL", "3D Physics", "Unity Engine"],
    challenges: [
      "Implementing realistic physics simulation",
      "Optimizing performance for smooth 60fps gameplay"
    ],
    results: [
      "Smooth 60fps gameplay",
      "Responsive controls and physics",
      "Fully playable in-browser demo"
    ],
    date: "2024",
  },
  {
    slug: "ai-volunteer-scheduler",
    title: "AI Volunteer Scheduler",
    description: "Automatic weekly scheduling using LLM reasoning and user constraints via OpenRouter API.",
    longDescription: "An intelligent scheduling system that uses Large Language Models (LLMs) through the OpenRouter API to automatically generate optimal volunteer schedules. The system considers multiple constraints including availability, skills, preferences, and organizational needs to create conflict-free schedules.",
    thumbnail: "📅",
    github: "https://github.com/yourusername/ai-volunteer-scheduler",
    demo: null,
    tags: ["Python", "LLM", "OpenRouter", "Optimization"],
    featured: false,
    technologies: ["Python", "OpenRouter API", "FastAPI", "PostgreSQL"],
    challenges: [
      "Integrating LLM reasoning with constraint satisfaction",
      "Handling complex scheduling constraints",
      "Ensuring fair distribution of volunteer assignments"
    ],
    results: [
      "Automated weekly scheduling for 50+ volunteers",
      "95% satisfaction rate from users",
      "Reduced scheduling time from hours to minutes"
    ],
    date: "2024",
  },
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

