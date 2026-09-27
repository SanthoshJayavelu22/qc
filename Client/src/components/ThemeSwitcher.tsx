"use client";

import { useState, useEffect } from "react";
import { Palette, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const themes = [
  {
    name: 'Vibrant Sage',
    colors: {
      '--theme-dark': '#2e4a3d',
      '--theme-navy': '#3b5c4d',
      '--theme-accent': '#A0D684',
      '--theme-bg': '#f5fbf5',
      '--theme-gray': '#eaf5eb',
      '--theme-muted': '#8abf8a',
      '--theme-sage1': '#A0D684',
      '--theme-sage2': '#AAF001',
    }
  },
  {
    name: 'Electric Cyan',
    colors: {
      '--theme-dark': '#004d40',
      '--theme-navy': '#006064',
      '--theme-accent': '#00e5ff',
      '--theme-bg': '#e0f7fa',
      '--theme-gray': '#b2ebf2',
      '--theme-muted': '#4dd0e1',
      '--theme-sage1': '#A0D684',
      '--theme-sage2': '#AAF001',
    }
  },
  {
    name: 'Hot Pink',
    colors: {
      '--theme-dark': '#880e4f',
      '--theme-navy': '#c2185b',
      '--theme-accent': '#ff007f',
      '--theme-bg': '#fce4ec',
      '--theme-gray': '#f8bbd0',
      '--theme-muted': '#f06292',
      '--theme-sage1': '#A0D684',
      '--theme-sage2': '#AAF001',
    }
  },
  {
    name: 'Vivid Orange',
    colors: {
      '--theme-dark': '#e65100',
      '--theme-navy': '#ef6c00',
      '--theme-accent': '#ff6600',
      '--theme-bg': '#fff3e0',
      '--theme-gray': '#ffe0b2',
      '--theme-muted': '#ffb74d',
      '--theme-sage1': '#A0D684',
      '--theme-sage2': '#AAF001',
    }
  },
  {
    name: 'Neon Purple',
    colors: {
      '--theme-dark': '#4a148c',
      '--theme-navy': '#6a1b9a',
      '--theme-accent': '#d500f9',
      '--theme-bg': '#f3e5f5',
      '--theme-gray': '#e1bee7',
      '--theme-muted': '#ba68c8',
      '--theme-sage1': '#A0D684',
      '--theme-sage2': '#AAF001',
    }
  },
  {
    name: 'Lime Zap',
    colors: {
      '--theme-dark': '#33691e',
      '--theme-navy': '#558b2f',
      '--theme-accent': '#76ff03',
      '--theme-bg': '#f1f8e9',
      '--theme-gray': '#dcedc8',
      '--theme-muted': '#aed581',
      '--theme-sage1': '#A0D684',
      '--theme-sage2': '#AAF001',
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
