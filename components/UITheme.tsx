"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type UITheme = "space" | "minimal" | "retro" | "dark-terminal" | "colorful" | "brutalist";

interface ThemeContextType {
  theme: UITheme;
  setTheme: (theme: UITheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<UITheme>("space");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
