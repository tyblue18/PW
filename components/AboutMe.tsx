"use client";


import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function AboutMe() {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section ref={ref} id="about" className="py-24 px-4 relative">
      {/* Space background — kept translucent so the starfield reads through */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-purple-950/20 to-black/75"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
      {/* Animated Nebula effect */}
      <div 
        className="absolute top-1/3 right-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"
        style={{
          animation: "nebulaFloat 10s ease-in-out infinite",
        }}
      ></div>
      
      <div className="max-w-5xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section header with code styling */}
        <div className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <span className="text-teal-400 font-mono text-xs sm:text-sm">04.</span>
            <h2 
              className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1000 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              About Me
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-teal-500/50 to-transparent"></div>
          </div>
        </div>
        
        <div 
          className={`bg-white/5 border border-white/10 rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 transition-opacity duration-1000 delay-200 ${
            inView ? "opacity-100" : "opacity-0"
          }`}
          style={{ 
            contain: 'layout style paint',
            willChange: inView ? 'opacity' : 'auto'
          }}
        >
          {/* Running Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-2xl rounded-lg overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/run.jpg"
                alt="Tanishq Somani running"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            {/* Introduction */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-6 font-medium">
              I&apos;m <strong className="text-teal-400">Tanishq</strong>, a <strong className="text-teal-400">full-stack engineer</strong> who ships real products end to end — M.S. Computer Science (2026), B.S. Microbiology. I don&apos;t stop at a demo: I design the schema, write the API, deploy it, and then operate it while real people use it.
            </p>

            {/* Key Achievements - Bullet Points */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-400">→</span> What I&apos;ve Built
              </h3>
              <ul className="space-y-3 text-base sm:text-lg text-gray-300 list-none">
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>Designed, built, shipped, and operate <strong className="text-white">Que</strong> solo — a <strong className="text-teal-400">live consumer app with real users</strong>. REST APIs, a PostgreSQL schema, a Redis-locked background job engine, transaction-safe settlement that can&apos;t double-pay, and a multi-device sync engine that never silently drops an edit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>Built <strong className="text-white">DxMap</strong>, a clinical NLP pipeline turning free-text doctor&apos;s notes into standardized ICD-10 codes — improved top-1 accuracy from <strong className="text-teal-400">53% to 86%</strong> by building the evaluation harness <em>first</em> and fixing measured failure modes across a ~74,000-entity corpus</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>Contributed an open-source fix to <strong className="text-white">astral-sh/uv</strong>, a widely used Python tool — in <strong className="text-teal-400">Rust</strong>, a language I taught myself for the job, tracing the real root cause across crate boundaries after my first assumption turned out wrong</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>Built <strong className="text-white">Lumen</strong>, a 3-D deep learning pipeline (<strong className="text-teal-400">MONAI U-Net</strong>) for BraTS 2020 brain-tumour segmentation, predicting whole-tumour, tumour-core, and enhancing-tumour regions from multi-modal MRI</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">•</span>
                  <span>At <strong className="text-white">UT&apos;s Office of Innovative Technologies</strong>, built pipelines and integrations that route <strong className="text-teal-400">450+ requests annually</strong>, and reverse-engineered an undocumented legacy system into production workflows the next team still runs on</span>
                </li>
              </ul>
            </div>

            {/* Unique Perspective */}
            <div className="mb-6 p-4 bg-teal-500/5 border-l-4 border-teal-500/50 rounded-r-lg">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Before CS, I <strong className="text-teal-400">ran my own business for three years</strong> — sourcing inventory, working vendor booths, handling everything myself. That&apos;s why I default to <strong className="text-white">ownership</strong>: I&apos;d rather carry something all the way to production and keep it running than hand off a prototype.
              </p>
            </div>

            {/* Long-term Goals */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-400">→</span> What I&apos;m Looking For
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Somewhere I can own problems end to end and see them reach real users. My background pulls me toward <strong className="text-white">health and clinical software</strong> — Lumen and DxMap both landed there — but the thread across everything I build is the same: measure it, ship it, then keep it honest in production. I build with <strong className="text-teal-400">AI tooling (Claude Code)</strong> daily.
              </p>
            </div>

            {/* Personal Interests */}
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-teal-400">→</span> Outside Engineering
              </h3>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-3">
                I&apos;m an endurance athlete — my body is the ongoing experiment where discipline meets curiosity:
              </p>
              <ul className="space-y-2 text-base sm:text-lg text-gray-300 list-none ml-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🏃</span>
                  <span><strong className="text-white">3x marathon</strong> and <strong className="text-white">2x half-marathon</strong> finisher, with a PR of <strong className="text-purple-400">3:53</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🔱</span>
                  <span>Currently training for a <strong className="text-white">full Ironman</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">🏋️</span>
                  <span>Years of <strong className="text-white">strength training</strong> — the reason Que exists in the first place</span>
                </li>
              </ul>
            </div>

            {/* Closing */}
            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
              The same thing that gets me through a marathon gets me through a hard bug: keep going after the interesting part is over. I&apos;m always looking for opportunities to build systems that matter and grow as an engineer, problem-solver, and athlete.
            </p>
          </div>

          {/* Visual indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-3xl mb-2">🏃</div>
              <div className="text-sm text-gray-400">Marathon Runner</div>
              <div className="text-xs text-gray-500 mt-1">3x finisher · PR 3:53</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-3xl mb-2">🏅</div>
              <div className="text-sm text-gray-400">Half Marathon</div>
              <div className="text-xs text-gray-500 mt-1">2x finisher</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="text-3xl mb-2">🔱</div>
              <div className="text-sm text-gray-400">Ironman</div>
              <div className="text-xs text-gray-500 mt-1">In training</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

