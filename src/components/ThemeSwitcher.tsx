"use client";

import { useState, useEffect } from "react";
import { Palette, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    name: "Pastel Teal",
    colors: {
      "--theme-dark": "#5d7782",
      "--theme-navy": "#4f6872",
      "--theme-accent": "#3bd6c6",
      "--theme-bg": "#fafcfc",
      "--theme-gray": "#f1f6f5",
      "--theme-muted": "#8093a0",
    }
  },
  {
    name: "Ocean Blue",
    colors: {
      "--theme-dark": "#3f5a7a",
      "--theme-navy": "#2d4563",
      "--theme-accent": "#5ea3db",
      "--theme-bg": "#f8fafc",
      "--theme-gray": "#f1f5f9",
      "--theme-muted": "#7f9bb5",
    }
  },
  {
    name: "Lavender",
    colors: {
      "--theme-dark": "#645d7a",
      "--theme-navy": "#544d6b",
      "--theme-accent": "#b39de8",
      "--theme-bg": "#fcfbfe",
      "--theme-gray": "#f5f4f7",
      "--theme-muted": "#938ba6",
    }
  },
  {
    name: "Sage Green",
    colors: {
      "--theme-dark": "#536853",
      "--theme-navy": "#435543",
      "--theme-accent": "#8abf8a",
      "--theme-bg": "#f9fbf9",
      "--theme-gray": "#f0f5f0",
      "--theme-muted": "#809480",
    }
  },
  {
    name: "Rose",
    colors: {
      "--theme-dark": "#7a5a5e",
      "--theme-navy": "#664b4e",
      "--theme-accent": "#e89da4",
      "--theme-bg": "#fcf9f9",
      "--theme-gray": "#f7f2f2",
      "--theme-muted": "#a6898d",
    }
  },
  {
    name: "Champagne Gold",
    colors: {
      "--theme-dark": "#635845",
      "--theme-navy": "#524838",
      "--theme-accent": "#d4af37",
      "--theme-bg": "#fdfdfa",
      "--theme-gray": "#f7f5ef",
      "--theme-muted": "#a39887",
    }
  },
  {
    name: "Sandstone",
    colors: {
      "--theme-dark": "#7a6256",
      "--theme-navy": "#665045",
      "--theme-accent": "#d98c63",
      "--theme-bg": "#fcfaf9",
      "--theme-gray": "#f7f2ef",
      "--theme-muted": "#a68f85",
    }
  },
  {
    name: "Peach Sunrise",
    colors: {
      "--theme-dark": "#785854",
      "--theme-navy": "#634743",
      "--theme-accent": "#ff9a76",
      "--theme-bg": "#fffaf8",
      "--theme-gray": "#fff1ed",
      "--theme-muted": "#a3827d",
    }
  },
  {
    name: "Monochrome",
    colors: {
      "--theme-dark": "#4a4a4a",
      "--theme-navy": "#333333",
      "--theme-accent": "#8c8c8c",
      "--theme-bg": "#fafafa",
      "--theme-gray": "#f2f2f2",
      "--theme-muted": "#808080",
    }
  }
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[0].name);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("qc-theme");
    if (savedTheme) {
      const theme = themes.find((t) => t.name === savedTheme);
      if (theme) {
        applyTheme(theme);
      }
    }
  }, []);

  const applyTheme = (theme: typeof themes[0]) => {
    setActiveTheme(theme.name);
    localStorage.setItem("qc-theme", theme.name);
    
    const root = document.documentElement;
    Object.entries(theme.colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  };

  return (
    <div className="fixed top-24 right-6 z-[110]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 20 }}
            className="absolute right-0 top-14 bg-white shadow-2xl rounded-2xl p-4 w-56 border border-gray-100"
          >
            <h4 className="text-sm font-bold font-serif mb-4 text-gray-800 border-b border-gray-100 pb-2">Select Theme</h4>
            <div className="flex flex-col gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => applyTheme(theme)}
                  className={`flex items-center gap-3 w-full text-left p-2 rounded-lg transition-all ${
                    activeTheme === theme.name 
                      ? "bg-gray-50 font-semibold" 
                      : "hover:bg-gray-50 text-gray-600"
                  }`}
                >
                  <div className="flex -space-x-1">
                    <span 
                      className="w-4 h-4 rounded-full border border-white shadow-sm z-20" 
                      style={{ backgroundColor: theme.colors["--theme-dark"] }} 
                    />
                    <span 
                      className="w-4 h-4 rounded-full border border-white shadow-sm z-10" 
                      style={{ backgroundColor: theme.colors["--theme-accent"] }} 
                    />
                  </div>
                  <span className="text-sm">{theme.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white text-gray-800 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all border border-gray-100"
        aria-label="Toggle Theme Customizer"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Palette className="w-5 h-5" />}
      </button>
    </div>
  );
}
