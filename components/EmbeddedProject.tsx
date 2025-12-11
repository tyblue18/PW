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

  useEffect(() => {
    setMounted(true);
  }, []);

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
          {iframeError ? (
            <div className="w-full rounded-lg bg-white/5 border border-white/10 p-8 flex flex-col items-center justify-center text-center" style={{ height, minHeight: "400px" }}>
              <div className="text-red-400 mb-4 text-xl">⚠️ Unable to Embed</div>
              <p className="text-gray-400 mb-4">
                Google Drive files cannot be embedded directly. You need to deploy your Streamlit app.
              </p>
              <div className="space-y-2 text-sm text-gray-500">
                <p><strong>Option 1:</strong> Deploy to Streamlit Cloud (free)</p>
                <p><strong>Option 2:</strong> Use the &quot;View Demo Video&quot; button above to watch the demo</p>
                <p><strong>Option 3:</strong> Update the URL to your deployed Streamlit app</p>
              </div>
              <a
                href="https://streamlit.io/cloud"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Deploy to Streamlit Cloud
              </a>
            </div>
          ) : (
            <iframe
              src={embeddedDemo.src}
              className="w-full rounded-lg border-0"
              style={{ height, minHeight: "400px" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded Project"
              onError={() => setIframeError(true)}
              onLoad={(e) => {
                // Check if iframe loaded successfully
                try {
                  const iframe = e.target as HTMLIFrameElement;
                  // If we can't access content, it might be blocked
                  if (!iframe.contentWindow) {
                    setIframeError(true);
                  }
                } catch (err) {
                  // Cross-origin restrictions - this is expected for Google Drive
                  if (embeddedDemo.src?.includes('drive.google.com')) {
                    setIframeError(true);
                  }
                }
              }}
            />
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

