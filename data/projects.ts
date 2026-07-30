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
        alt: "Que's social tab showing the profile header with streak and coin balance, an eight-slot gym badge showcase, the full 25-badge collection, and the start of the vs-last-week pace tracker",
        caption: "The social tab in the deployed app. The profile header surfaces the badge count, day streak, weekly weight change, and calorie-coin balance alongside a win–loss–tie battle record. Below it sits the drag-and-drop badge showcase — eight user-chosen slots above the full earned collection — where every badge image has had its background removed client-side, cached in an LRU, and deferred behind an IntersectionObserver so the grid doesn't block the main thread. At the bottom, \"vs. Last Week\" compares this week's miles, lift volume, and protein against the same point in the previous week."
      }
    ],
  },
  {
    slug: "dxmap-clinical-coding",
    title: "DxMap — Clinical Note → ICD-10-CM & CPT Codes",
    description: "A clinical NLP pipeline that turns a free-text doctor's note into standardized billing codes with calibrated confidence scores, span-level rationales, and a human-review flag. Top-1 accuracy improved from 53.4% to 86.2% through evaluation-first iteration.",
    longDescription: "Medical coding means translating a doctor's notes into the standardized codes insurers bill against — work done by human coders who read notes all day, search a ~74,000-entry codebook, and try not to make mistakes that get claims rejected. DxMap automates the first pass. Paste a clinical note and it returns ICD-10-CM diagnoses and CPT procedures, each with a confidence score, the exact substring of the note that justifies it, and a flag on anything the model isn't sure about. The interesting part is that the hard problem isn't the LLM — it's retrieval. A note runs through four stages: NegEx negation detection strips ruled-out findings before they can pollute the query; spaCy decomposes the note into one retrieval query per condition so a dominant diagnosis can't crowd out secondary ones; BM25 and dense retrieval run in parallel and fuse via Reciprocal Rank Fusion; and a provider-swappable LLM reranks the top candidates, attributes each to a span, and drops negated findings as a second line of defense. Confidences then pass through isotonic regression so the percentages mean what they say. Every accuracy gain came from building the evaluation harness first and fixing measured failure modes — the harness also caught two errors in my own hand-labeled gold set. Known limits are documented rather than hidden: multi-hop combination codes (linking a complication to its cause), Z-code preventive visits, and notes with three or more active conditions still fail more than I'd like, and at 58 eval examples some of the tuning is effectively overfitting.",
    thumbnail: "🩺",
    logo: "/projects/dxmap/dxmap-logo.png",
    github: "https://github.com/tyblue18/DxMap",
    demo: "https://dx-map.vercel.app/",
    embeddedDemo: {
      type: "iframe",
      src: "https://dx-map.vercel.app/",
      height: "850px"
    },
    tags: ["Python", "FastAPI", "NLP", "RAG", "LLM", "Healthcare"],
    featured: true,
    technologies: [
      "Python 3.12",
      "FastAPI",
      "spaCy",
      "negspacy (NegEx)",
      "rank-bm25",
      "Chroma",
      "BAAI/bge-small-en-v1.5",
      "sentence-transformers",
      "OpenAI (GPT-4o-mini)",
      "Anthropic",
      "Google Gemini",
      "scikit-learn",
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "pytest"
    ],
    challenges: [
      "Secondary diagnoses were being crowded out — in a note about type 2 diabetes with hypertension, the diabetes embedding dominated the space and pushed I10 out of the top 20. Decomposing the note into one retrieval query per noun chunk and named entity fixed it",
      "Negation was messier than expected: NegEx operates on named entities, but spaCy's general English model doesn't recognise most clinical terms as entities, so 'no chest pain' and 'no ST-segment elevation' became live queries. Fixed with two layers — a prefix filter plus a 70-character context-window check that catches negated sub-chunks the prefix filter misses",
      "J44.89 (other COPD) has a description that is a token superset of both J44.1 and J44.9, so it always outscored the more specific codes. Solved with context-specific synonyms that issue an extra query for the exact target description",
      "Bridging clinical shorthand to ICD-preferred phrasing with a synonym table — BM25 will never connect 'vasovagal syncope' to the actual ICD description 'syncope and collapse'",
      "Making BM25 and dense retrieval genuinely complementary: BM25 anchors rare terms like Tietze syndrome that the embedding model has barely seen, dense retrieval catches paraphrases and abbreviations, and Reciprocal Rank Fusion merges them with no tuning",
      "Calibrating raw LLM confidence with isotonic regression so a reported 90% actually behaves like 90%",
      "Designing reranker safety guards and testing them: a hallucinated code outside the candidate list is dropped, and an LLM outage falls back to retrieval order with the human-review flag set"
    ],
    results: [
      "Top-1 accuracy improved from 53.4% to 86.2%, and top-5 from 63.8% to 91.4%, entirely through evaluation-first iteration on measured failure modes",
      "Every suggested code carries a calibrated confidence score and the exact span of the note that justifies it, so a human coder can audit the reasoning instead of trusting a black box",
      "Retrieval runs over the full ~74,000-code ICD-10-CM set using hybrid BM25 + dense search fused with RRF",
      "Provider-agnostic reranking — OpenAI, Anthropic, or Gemini, swapped by environment variable",
      "The eval harness caught two errors in my own hand-labeled gold set (a retired M75.12 code and an incorrect bilateral carpal-tunnel label), which is the strongest argument for writing it first",
      "Structured limitations documented rather than hidden: multi-hop combination codes, Z-code preventive visits, and three-condition notes remain open problems",
      "pytest suite with the LLM call mocked, covering the negation detector and all three reranker safety guards"
    ],
    date: "2026",
    metrics: [
      {
        label: "Top-1 Accuracy",
        value: "86.2%",
        description: "Up from a 53.4% naive baseline"
      },
      {
        label: "Top-5 Accuracy",
        value: "91.4%",
        description: "Up from a 63.8% naive baseline"
      },
      {
        label: "ICD-10-CM Corpus",
        value: "~74k",
        description: "Codes indexed for hybrid BM25 + dense retrieval"
      },
      {
        label: "Retrieval",
        value: "Hybrid",
        description: "BM25 + dense embeddings fused with Reciprocal Rank Fusion"
      }
    ],
    images: [
      {
        src: "/projects/dxmap/dxmap-screenshot.png",
        alt: "The DxMap demo: a clinical note about type 2 diabetes and hypertension on the left, with suggested ICD-10-CM and CPT codes, confidence scores, and rationales on the right",
        caption: "The DxMap interface on a diabetes-plus-hypertension note. Each suggestion carries a calibrated confidence and a plain-language rationale: E11.65 is preferred over E11.9 because the documented HbA1c of 8.2 indicates active poor control, and I10 is supported by the in-office BP of 152/94. This note is exactly the multi-condition case that motivated query decomposition — without it, the diabetes embedding crowds I10 out of the candidate set entirely."
      }
    ],
  },
  {
    slug: "uv-rust-contribution",
    title: "astral-sh/uv — Open-Source Fix in Rust",
    description: "A bug that crashed every uv command with a raw OS error, fixed upstream in Astral's Python package manager — in Rust, a language I taught myself for the contribution. PR #19762, closing issue #14584.",
    longDescription: "If any directory between your working directory and the filesystem root happened to be named `pyproject.toml` or `uv.toml`, every single uv command died with a raw, unexplained OS error: `failed to read from file /pyproject.toml: Is a directory (os error 21)`. The reason it hit everything is that the failure lived in settings discovery — `FilesystemOptions::find` walks up the directory tree during CLI config resolution, before any command logic runs at all, and `from_directory` only tolerated `NotFound` when reading a config file. So `uv venv`, `uv pip`, `uv lock` — all of them, regardless of whether they did any project discovery. My first attempt put a guard in `uv-workspace`, which was the intuitive place to look but the wrong one: it only covered commands that actually perform project discovery, so it fixed the symptom in some paths and missed it in others. After reviewer feedback I reverted that entirely and moved the fix into `uv-settings`, where the walk actually happens. `from_directory` now returns a typed `Error::Directory`, and `FilesystemOptions::find` propagates it only when the offending directory is at the top level of the search — for parent directories it emits a `warn!` and keeps walking, so a stray directory three levels up no longer takes down your build. I documented the one edge case I knew I wasn't covering rather than leaving it to be discovered later.",
    thumbnail: "🦀",
    github: "https://github.com/astral-sh/uv/pull/19762",
    demo: null,
    tags: ["Rust", "Open Source", "CLI Tooling", "Debugging", "Systems"],
    featured: true,
    technologies: [
      "Rust",
      "Cargo",
      "Clippy",
      "rustfmt",
      "Snapshot Testing",
      "Integration Testing",
      "Git & GitHub"
    ],
    challenges: [
      "Tracing the real root cause across crate boundaries — my first fix went into `uv-workspace`, which only covers commands that perform project discovery, so it missed `uv venv` and `uv pip` entirely. The bug was one layer down in `uv-settings`, where config resolution walks the tree before any command logic runs",
      "Learning enough Rust to work inside a large, unfamiliar production codebase — reading the crate graph, following the error types, and matching the project's existing conventions rather than importing my own",
      "Getting the error boundary right: failing loudly when the bad directory is the one you're standing in, but only warning and continuing when it's a parent, so an unrelated directory far up the tree can't break an otherwise valid project",
      "Introducing a typed `Error::Directory` instead of letting a raw `os error 21` reach the user, so the message explains what's actually wrong",
      "Verifying the fix didn't break adjacent behaviour — symlinks named `pyproject.toml` that point at real files still resolve (since `is_dir()` follows symlinks), and `uv venv --no-config` still succeeds",
      "Taking review feedback that invalidated my original approach and reverting it cleanly rather than defending it"
    ],
    results: [
      "Every uv command now either works or fails with a clear message — `error: pyproject.toml is a directory, expected a file` instead of a raw `os error 21`",
      "A stray directory named `pyproject.toml` in a parent no longer breaks anything; it downgrades to a `-v` warning and the command resolves normally",
      "Five integration tests on the project's standard snapshot harness, covering both `pyproject.toml` and `uv.toml`, in both the working directory and a parent, plus a non-project command (`uv venv`) to prove the fix reaches commands that skip project discovery",
      "Manually verified against a built binary: the verbose warning path, symlink handling, and `--no-config`",
      "`cargo fmt --all --check` and `cargo clippy --all-targets -- -D warnings` clean",
      "One known edge case documented in the PR rather than left to be found later: a `pyproject.toml` directory in the CWD is still skipped when a valid project exists in a parent, because the settings search starts at the workspace root",
      "Open and under review upstream (+178 / −1 across 3 files); submitted as a CodePath Advanced AI (AI301) capstone"
    ],
    date: "2026",
    metrics: [
      {
        label: "Blast Radius",
        value: "Every command",
        description: "The crash fired during config resolution, before any command logic ran"
      },
      {
        label: "Integration Tests",
        value: "5",
        description: "Snapshot-harness tests across uv lock and uv venv"
      },
      {
        label: "Diff Size",
        value: "+178 / −1",
        description: "Across 3 files, all within the uv-settings crate"
      },
      {
        label: "Language",
        value: "Rust",
        description: "Self-taught for this contribution"
      }
    ],
  },
  {
    slug: "ironman-training-tracker",
    title: "Ironman Training Tracker — Garmin Data, Corrected",
    description: "Syncs Garmin Connect into a local SQLite database and rebuilds the training metrics that matter for Ironman — fitness/fatigue/form, intensity distribution, HRV, and sleep — with sensor-error correction and an evidence base cited at the point of definition.",
    longDescription: "I built this because the metrics my watch reports are quietly wrong in ways that compound over a training block. The headline problem is optical heart rate: wrist sensors fail during running by locking onto the motion artefact from foot strike and reporting cadence as heart rate. It doesn't look like an error — it looks like a plausible 170 bpm — so every downstream metric absorbs it silently and an easy run gets filed as a hard one. The tracker runs two checks on every run: whether HR is sitting on top of cadence, and whether HR and running power disagree about how hard the session was. The second is the one that convicts, because power is derived from pace and motion rather than from the optical sensor. Runs that fail get scored from power zones instead and are dropped from run-efficiency trends entirely, because metres per heartbeat means nothing if the heartbeat is cadence. Above both sensors sits a manual override: the talk test, a validated field surrogate for the first ventilatory threshold. Tagging a session easy/moderate/hard overrides both sensors — it's the one intensity signal no hardware can corrupt, and it needs no chest strap. Everything else follows the same principle of not overclaiming. Fitness and fatigue are carried forward through rest days and computed as of today, so a layoff shows as the decline it actually is instead of freezing at the last workout, and the first 42 days are labelled model warm-up rather than passed off as fitness gains. Sleep duration is judged against a personal rolling baseline (which cancels the roughly constant ~40 min/night overestimate wrist wearables carry against polysomnography), while deep/REM splits are charted but never scored, because stage detection is the least accurate output a wrist device produces. Every metric that implements something specific from the literature says so at its point of definition, and the ones that are coaching convention rather than a finding are labelled as such in the code.",
    thumbnail: "🏊",
    github: "https://github.com/tyblue18/DataTracker",
    demo: "https://data-tracker-beta.vercel.app/",
    embeddedDemo: {
      type: "iframe",
      src: "https://data-tracker-beta.vercel.app/",
      height: "900px"
    },
    tags: ["Python", "Data Engineering", "SQLite", "Streamlit", "Sports Science", "Pandas"],
    featured: true,
    technologies: [
      "Python 3.12",
      "garminconnect",
      "SQLite",
      "pandas",
      "Streamlit",
      "FastAPI",
      "uvicorn",
      "Vercel Cron",
      "pytest",
      "ruff",
      "Hand-built SVG charts"
    ],
    challenges: [
      "Detecting optical-HR cadence lock, where the wrist sensor reports foot-strike cadence as heart rate — it produces a plausible-looking number rather than an obvious error, so it has to be caught by cross-checking HR against running power, which is derived from motion rather than from the optical sensor",
      "Deciding what a corrupted session should do downstream: rescore from power zones, but drop it from run-efficiency trends entirely, since metres per heartbeat is meaningless when the heartbeat is cadence",
      "Building a manual override that outranks both sensors — the talk test as a validated surrogate for the first ventilatory threshold, where a tag changes only the session's placement in the zones and preserves its measured duration",
      "Carrying fitness and fatigue forward through rest days and computing them as of today, so a training layoff registers as decline instead of freezing at the last recorded workout",
      "Designing a composite Progression Score that can't be gamed: pillars score trends against your own baseline, an uncomputable pillar renders as an em-dash rather than a guess, and no pillar collapses onto a single input — so 'recovery is strong' can't be produced by simply not training",
      "Parsing an unofficial, shape-shifting Garmin API defensively while retaining the full raw JSON, so a later `backfill` can replay history into new columns without ever re-hitting the network",
      "Working around Streamlit's need for a long-lived websocket server, which Vercel can't host — the deployed page is server-rendered and read-only, while the local Streamlit app remains the tool for tagging sessions"
    ],
    results: [
      "A local-first pipeline: Garmin Connect to SQLite with idempotent upserts, cached OAuth tokens with MFA, and safe re-syncing of overlapping date ranges",
      "Training load modelled as CTL/ATL/TSB (Banister impulse-response) with an explicitly labelled 42-day model warm-up period",
      "Intensity distribution measured from per-activity time-in-zone and compared against the polarised (~80/5/15) and pyramidal (~78/19/3) models, with an inverted split flagged",
      "HRV evaluated as a 7-day rolling mean of ln(HRV) against a 60-day baseline at ±0.5 SD — the smallest worthwhile change — rather than as a noisy daily number",
      "Deliberately excluded the acute:chronic workload ratio, the most common load metric in training apps, because it is mathematically coupled to its own numerator (Impellizzeri 2020) — with the reasoning documented beside `ramp_rate()` so it doesn't get re-added later",
      "An evidence table that grades its own confidence, separating established models from coaching convention instead of presenting both as findings",
      "Deployed as a private server-rendered dashboard on Vercel with a twice-daily sync cron; all data stays local otherwise, and nothing leaves the machine except the Garmin login",
      "pytest suite over the metrics layer, with CI"
    ],
    date: "2026",
    metrics: [
      {
        label: "HR Integrity Checks",
        value: "2",
        description: "Cadence-lock detection plus an HR-versus-power disagreement test"
      },
      {
        label: "Progression Score",
        value: "5 pillars",
        description: "Fitness, Efficiency, Recovery, Consistency, and Intensity"
      },
      {
        label: "Load Model",
        value: "CTL/ATL/TSB",
        description: "Banister impulse-response, carried through rest days"
      },
      {
        label: "Data Residency",
        value: "100% local",
        description: "Nothing leaves the machine except the Garmin login"
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

