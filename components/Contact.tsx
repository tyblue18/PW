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
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className={`text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Get In Touch
        </h2>
        <p className="text-gray-400 mb-12">
          Let&apos;s connect and discuss opportunities in AI, optimization, or performance engineering.
        </p>

        <div 
          className={`flex flex-wrap justify-center gap-6 transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-3 px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-teal-500/50 transition-all duration-300 hover:scale-105"
            >
              <span className="text-2xl">{link.icon}</span>
              <span className="text-white font-semibold">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tanishq Somani. Built with Next.js and TailwindCSS.
          </p>
        </div>
      </div>
    </section>
  );
}

