export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tanishq Somani",
    jobTitle: "Full-Stack Engineer",
    description: "Full-stack engineer who ships real products end to end — live consumer apps, clinical AI pipelines, and open-source contributions",
    url: "https://t-tanishqs.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/tanishq-somani-5081742b9/",
      "https://github.com/tyblue18",
    ],
    email: "Tanishqsomania21@gmail.com",
    knowsAbout: [
      "Full-Stack Development",
      "Backend Development",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Python",
      "Rust",
      "AI Systems",
      "LLM Engineering",
      "Retrieval-Augmented Generation",
      "Machine Learning",
      "Computer Vision",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}



