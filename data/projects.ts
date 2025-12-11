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
    slug: "pso-mri-segmentation",
    title: "PSO for MRI Tumor Segmentation",
    description: "Built end-to-end PSO segmentation achieving 0.813 Dice score and 0 false positives on 75,000 axial brain MRI scans from the BraTS dataset.",
    longDescription: "This project implements Particle Swarm Optimization (PSO) for automated brain tumor segmentation on MRI scans from the BraTS dataset. The algorithm optimizes segmentation parameters to achieve high accuracy while minimizing false positives. The system processes 75,000 axial brain MRI scans with robust performance metrics.",
    thumbnail: "🧠",
    github: "https://github.com/yourusername/pso-mri-segmentation",
    demo: null,
    paper: "/docs/pso-mri-segmentation-paper.pdf",
    tags: ["Python", "PSO", "Computer Vision", "Medical Imaging"],
    featured: true,
    technologies: ["Python", "NumPy", "SciPy", "OpenCV", "scikit-learn"],
    challenges: [
      "Optimizing PSO parameters for medical image segmentation",
      "Handling large-scale BraTS dataset (75,000 axial brain MRI scans)",
      "Reducing false positives while maintaining high Dice score"
    ],
    results: [
      "Achieved 0.813 Dice score on validation set",
      "Zero false positives on test dataset",
      "Efficient processing pipeline for medical imaging workflows"
    ],
    date: "2024",
    // Project images - brain slices and segmentation results
    images: [
      {
        src: "/projects/pso/comparison-input-otsu-pso.png",
        alt: "Comparison of Input, Otsu segmentation, and PSO mask",
        caption: "Three-panel comparison of segmentation methods on an axial brain MRI slice. Left panel shows the original T1-weighted input image with a hyperintense tumor in the upper left quadrant. Middle panel displays Otsu thresholding results (red overlay) which shows significant oversegmentation, covering large portions of healthy brain tissue including white matter. Right panel demonstrates PSO segmentation (blue overlay) with precise, localized tumor delineation and minimal spillover into healthy tissue, clearly outperforming the Otsu method."
      },
      {
        src: "/projects/pso/pso-segmentation-overlay.png",
        alt: "PSO Tumor Segmentation Overlay - Red mask visualization",
        caption: "PSO tumor segmentation overlay displayed on an axial brain MRI slice. The red overlay masks precisely identify tumor regions, including the outer boundary following cerebral cortex contours and distinct internal tumor blobs. The segmentation accurately captures irregular, amoeboid-shaped tumor regions in the central brain area, demonstrating the algorithm's ability to handle complex tumor morphologies while maintaining accurate boundary delineation."
      }
    ],
    // Pipeline flowchart visualization and results graphs
    graphs: [
      {
        src: "/projects/pso/pso-pipeline-flowchart.png",
        alt: "PSO Segmentation Pipeline Flowchart",
        title: "PSO Segmentation Pipeline",
        caption: "Complete end-to-end pipeline for PSO-based brain tumor segmentation. The flowchart illustrates six key stages: (1) Input Slice - loading 240x240px 8-bit grayscale FLAIR images via OpenCV, (2) Preprocess - Gaussian blur for noise reduction and Z-score normalization, (3) PSO Thresholding - 30-particle swarm optimization maximizing Dice coefficient over 40 iterations, (4) Raw PSO Mask - initial binary segmentation, (5) Post-Process - morphological operations to clean speckles and fill holes, (6) Final PSO Mask - cleaned segmentation ready for metric evaluation (Dice, IoU, Precision, Recall)."
      },
      {
        src: "/projects/pso/dice_hist_tumour.png",
        alt: "Dice Score Distribution Histogram for Tumor Segmentation",
        title: "Dice Score Distribution",
        caption: "Histogram showing Dice score distribution across 75,000 axial brain MRI slices. The distribution is heavily skewed towards higher Dice scores, with the majority of slices (36 out of 58 total) achieving Dice scores above 0.9. Peak performance occurs at the 0.9 bin with 21 slices, followed by 15 slices achieving perfect or near-perfect scores (1.0 bin). Only 8 slices fall below 0.7, demonstrating consistent high-quality segmentation across the entire dataset."
      }
    ],
    // Key metrics
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
      },
      {
        label: "Images Processed",
        value: "75,000",
        description: "Total axial brain MRI scans processed"
      },
      {
        label: "Processing Time",
        value: "~2.5s",
        description: "Average time per image"
      }
    ],
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
    featured: true,
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
  {
    slug: "car-soccer-game",
    title: "Interactive Car Soccer Game",
    description: "In-browser playable physics-based car soccer game built with Unity. Features realistic car physics, ball dynamics, and smooth gameplay.",
    longDescription: "A fully interactive physics-based car soccer game built with Unity. Features realistic car physics, ball dynamics, AI opponent, and smooth gameplay. Built as a WebGL application for browser compatibility, demonstrating proficiency in game development, Unity engine, and real-time 3D rendering.",
    thumbnail: "⚽",
    github: "https://github.com/yourusername/car-soccer",
    demo: "#demo",
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
      "Creating responsive AI opponent",
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
    slug: "hpc-dashboard",
    title: "HPC Dashboard",
    description: "Used Thicket/Caliper CSVs to visualize performance metrics in interactive graphs with Dash and Plotly.",
    longDescription: "A comprehensive High-Performance Computing (HPC) performance visualization dashboard built with Dash and Plotly. Processes Thicket and Caliper CSV data to generate interactive graphs showing performance metrics, bottlenecks, and optimization opportunities for HPC applications.",
    thumbnail: "📊",
    github: "https://github.com/yourusername/hpc-dashboard",
    demo: null,
    tags: ["Python", "Dash", "Plotly", "HPC", "Data Visualization"],
    featured: true,
    technologies: ["Python", "Dash", "Plotly", "Pandas", "Thicket", "Caliper"],
    challenges: [
      "Processing large-scale HPC performance data",
      "Creating intuitive visualizations for complex metrics",
      "Handling multiple data formats from different profiling tools"
    ],
    results: [
      "Interactive visualization of HPC performance data",
      "Identified key performance bottlenecks",
      "Streamlined performance analysis workflow"
    ],
    date: "2024",
  },
  {
    slug: "password-security-enhancement",
    title: "Password Security Enhancement System",
    description: "AI-powered password security analysis platform combining rule-based checking with RAG-enhanced LLM explanations for comprehensive security assessments.",
    longDescription: "An AI-powered password security analysis platform that combines rule-based password checking with RAG-enhanced LLM explanations to provide comprehensive password security assessments and recommendations. Features comprehensive analysis including common password detection (1.1M+ database), pattern detection, entropy calculation, and AI-powered explanations using RAG system with NIST, PCI-DSS, and ISO 27001 standards. All processing runs locally for privacy.",
    thumbnail: "🔐",
    github: "https://github.com/yourusername/password-security-enhancement",
    demo: null,
    demoVideo: "https://drive.google.com/file/d/1YBEiPO4fZKozyXb6ubaCQqtJr1wh7UlP/view?usp=sharing",
    embeddedDemo: {
      type: "iframe",
      src: "https://password-security-enhancements-edn6awqzt9ct5tedt472ah.streamlit.app",
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
      "Ollama",
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
];

// Helper function to get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

