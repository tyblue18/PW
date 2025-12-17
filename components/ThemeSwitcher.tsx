"use client";

import { useState } from "react";

type Theme = "space" | "minimal" | "retro" | "terminal" | "colorful" | "brutalist" | "hand-drawn" | "grunge" | "notebook" | "sketch";

const themes: { value: Theme; label: string; description: string }[] = [
  { value: "space", label: "🌌 Space", description: "Current - stars & planet" },
  { value: "minimal", label: "⚪ Minimal", description: "Clean & simple" },
  { value: "retro", label: "🕹️ Retro", description: "80s computer style" },
  { value: "terminal", label: "💻 Terminal", description: "Green terminal" },
  { value: "colorful", label: "🌈 Colorful", description: "Bright gradients" },
  { value: "brutalist", label: "⬛ Brutalist", description: "Bold yellow/black" },
  { value: "hand-drawn", label: "✏️ Hand-drawn", description: "Sketchy paper" },
  { value: "grunge", label: "🎸 Grunge", description: "Distressed raw" },
  { value: "notebook", label: "📓 Notebook", description: "Journal style" },
  { value: "sketch", label: "🎨 Sketch", description: "Doodle style" },
];

export default function ThemeSwitcher({ onThemeChange }: { onThemeChange: (theme: Theme) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>("space");

  const handleThemeSelect = (theme: Theme) => {
    setCurrentTheme(theme);
    onThemeChange(theme);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white font-mono text-sm hover:bg-white/20 transition-all"
        aria-label="Theme switcher"
      >
        🎨 Themes
      </button>
      
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-64 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg p-4 shadow-xl">
          <div className="text-white text-xs font-mono mb-3 opacity-70">Select Theme:</div>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {themes.map((theme) => (
              <button
                key={theme.value}
                onClick={() => handleThemeSelect(theme.value)}
                className={`w-full text-left px-3 py-2 rounded text-sm transition-all ${
                  currentTheme === theme.value
                    ? "bg-teal-500/30 border border-teal-500/50 text-teal-300"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10"
                }`}
              >
                <div className="font-semibold">{theme.label}</div>
                <div className="text-xs opacity-70 mt-1">{theme.description}</div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}



