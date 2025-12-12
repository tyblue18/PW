"use client";

import { useEffect, useState } from "react";

interface EmbeddedProjectProps {
  embeddedDemo: {
    type: "iframe" | "component" | "html";
    src?: string;
    component?: string;
    htmlFile?: string;
    height?: string;
  };
}

export default function EmbeddedProject({ embeddedDemo }: EmbeddedProjectProps) {
  const [mounted, setMounted] = useState(false);
  const [htmlContent, setHtmlContent] = useState<string>("");
  const [iframeError, setIframeError] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (embeddedDemo.type === "iframe" && embeddedDemo.src) {
      setIsLoading(true);
      setIframeError(false);
      
      // Set a timeout to detect if iframe fails to load or shows white screen
      const timeout = setTimeout(() => {
        if (!iframeLoaded) {
          setIframeError(true);
          setIsLoading(false);
        }
      }, 8000); // 8 second timeout

      return () => clearTimeout(timeout);
    }
  }, [embeddedDemo, iframeLoaded]);

  useEffect(() => {
    if (embeddedDemo.type === "html" && embeddedDemo.htmlFile) {
      // Load HTML file content
      fetch(embeddedDemo.htmlFile)
        .then((res) => res.text())
        .then((html) => {
          setHtmlContent(html);
        })
        .catch((err) => {
          console.error("Failed to load HTML file:", err);
          setHtmlContent(`<p style="color: #999; padding: 2rem; text-align: center;">Failed to load project. Please check the file path.</p>`);
        });
    }
  }, [embeddedDemo]);

  if (!mounted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 min-h-[600px] flex items-center justify-center">
        <div className="text-gray-400">Loading project...</div>
      </div>
    );
  }

  const height = embeddedDemo.height || "600px";

  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 overflow-hidden">
      {embeddedDemo.type === "iframe" && embeddedDemo.src && (
        <div className="relative">
          {isLoading && !iframeLoaded && (
            <div className="w-full rounded-lg bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center" style={{ height, minHeight: "400px" }}>
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-400 mb-4"></div>
              <div className="text-gray-400">Loading Streamlit app...</div>
            </div>
          )}
          {iframeError ? (
            <div className="w-full rounded-lg bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center" style={{ height, minHeight: "400px" }}>
              <div className="text-red-400 mb-4 text-xl">⚠️ Unable to Embed</div>
              <p className="text-gray-400 mb-4">
                The Streamlit app cannot be embedded. This usually means embedding is not enabled.
              </p>
              <div className="space-y-2 text-sm text-gray-500 mb-4 max-w-2xl">
                <p><strong>Solution 1:</strong> Make sure your Streamlit URL includes <code className="bg-white/10 px-2 py-1 rounded">?embed=true</code></p>
                <p className="mt-2"><strong>Solution 2:</strong> Add a <code className="bg-white/10 px-2 py-1 rounded">.streamlit/config.toml</code> file to your Streamlit project:</p>
                <pre className="bg-black/50 p-4 rounded text-left text-xs overflow-x-auto">
{`[server]
enableXsrfProtection = false
enableCORS = false`}
                </pre>
                <p className="mt-2">Then commit, push to GitHub, and Streamlit Cloud will automatically redeploy.</p>
                <p className="mt-4 text-gray-400">The app URL should be: <code className="bg-white/10 px-2 py-1 rounded text-xs">{embeddedDemo.src}</code></p>
                <p className="mt-2 text-xs text-gray-500">Note: Some browsers block third-party cookies. Try opening in incognito mode or allowing cookies for this site.</p>
              </div>
              <a
                href={embeddedDemo.src}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300"
              >
                Open App in New Tab
              </a>
            </div>
          ) : (
            <div className="relative">
              <iframe
                src={embeddedDemo.src}
                className="w-full rounded-lg border-0 bg-white"
                style={{ height, minHeight: "400px" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; camera; microphone"
                allowFullScreen
                title="Embedded Project"
                loading="eager"
                onLoad={() => {
                  setIframeLoaded(true);
                  setIsLoading(false);
                }}
                onError={() => {
                  setIframeError(true);
                  setIsLoading(false);
                }}
              />
            </div>
          )}
        </div>
      )}

      {embeddedDemo.type === "html" && embeddedDemo.htmlFile && (
        <div
          className="w-full rounded-lg bg-black"
          style={{ height, minHeight: "400px", overflow: "hidden" }}
        >
          {htmlContent ? (
            <iframe
              src={embeddedDemo.htmlFile}
              className="w-full h-full border-0 rounded-lg"
              style={{ height: "100%" }}
              allow="autoplay; fullscreen; xr-spatial-tracking"
              allowFullScreen
              title="Embedded Unity Project"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <div className="text-center">
                <div className="mb-4">Loading Unity project...</div>
                <div className="text-sm">Make sure the Unity WebGL build files are in the correct location</div>
              </div>
            </div>
          )}
        </div>
      )}

      {embeddedDemo.type === "component" && (
        <div className="w-full rounded-lg bg-white/10 p-8 flex items-center justify-center" style={{ height, minHeight: "400px" }}>
          <div className="text-center text-gray-400">
            <p className="mb-4">Custom component: {embeddedDemo.component}</p>
            <p className="text-sm">Create a component in /components/projects/ and import it here</p>
          </div>
        </div>
      )}
    </div>
  );
}

