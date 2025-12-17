export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tanishq Somani",
    jobTitle: "Software Engineer",
    description: "Software Engineer specializing in Backend & AI Systems, Performance Optimization, and HPC",
    url: "https://t-tanishqs.vercel.app",
    sameAs: [
      "https://www.linkedin.com/in/tanishq-somani-5081742b9/",
      "https://github.com/tyblue18",
    ],
    email: "Tanishqsomania21@gmail.com",
    knowsAbout: [
      "Backend Development",
      "AI Systems",
      "Machine Learning",
      "Performance Optimization",
      "High Performance Computing",
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



