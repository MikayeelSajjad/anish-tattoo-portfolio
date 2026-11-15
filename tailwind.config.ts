import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        surface: "#121216",
        "surface-light": "#1c1c22",
        "neon-green": "#10b981", // emerald-500
      },
      fontFamily: {
        sans: [
          "var(--font-geist-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
        "float-subtle": "floatSubtle 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2.5s ease-in-out infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marqueeReverse 25s linear infinite",
        "grid-fade": "gridFade 8s ease-in-out infinite alternate",
        "scanline": "scanline 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(1.5deg)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(16px) rotate(-1.5deg)" },
        },
        floatSubtle: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseGlow: {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(16, 185, 129, 0.4), inset 0 0 15px rgba(16, 185, 129, 0.2)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(16, 185, 129, 0.8), inset 0 0 25px rgba(16, 185, 129, 0.4)",
          },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        gridFade: {
          "0%": { opacity: "0.2" },
          "100%": { opacity: "0.55" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      boxShadow: {
        "neon": "0 0 20px rgba(16, 185, 129, 0.45)",
        "neon-lg": "0 0 35px rgba(16, 185, 129, 0.6)",
        "neon-sm": "0 0 10px rgba(16, 185, 129, 0.35)",
        "subtle-card": "0 10px 30px -10px rgba(0,0,0,0.8)",
      },
    },
  },
  plugins: [],
};
export default config;
