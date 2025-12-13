"use client";

import { useEffect, useState } from "react";

const socialLinks = [
  {
    name: "Email",
    url: "mailto:Tanishqsomania21@gmail.com",
    icon: "✉️",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tanishq-somani-5081742b9/",
    icon: "💼",
  },
  {
    name: "GitHub",
    url: "https://github.com/tyblue18",
    icon: "💻",
  },
];

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-black via-purple-950/10 to-black relative">
      {/* Space background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      {/* Animated Nebula effect */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        style={{
          animation: "nebulaFloat 8s ease-in-out infinite",
        }}
      ></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section header with code styling */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4 justify-center">
            <span className="text-teal-400 font-mono text-sm">05.</span>
            <h2 
              className={`text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Get In Touch
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent max-w-xs"></div>
          </div>
          <p className="text-gray-400 text-lg">
            Let&apos;s connect and discuss opportunities in AI, optimization, or performance engineering.
          </p>
        </div>

        <div 
          className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-white font-semibold text-sm font-mono">{link.name}</span>
              <span className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-xs font-mono">
            © {new Date().getFullYear()} Tanishq Somani | Built with Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </section>
  );
}

