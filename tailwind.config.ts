import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
      colors: {
        bg: "var(--bg)",
        "bg-alt": "var(--bg-alt)",
        surface: "var(--surface)",
        card: "var(--card)",
        border: "var(--border)",
        "border-2": "var(--border-2)",
        text: "var(--text)",
        muted: "var(--muted)",
        "muted-2": "var(--muted-2)",
        "muted-3": "var(--muted-3)",
        "muted-4": "var(--muted-4)",
        accent: "var(--accent)",
        "accent-h": "var(--accent-h)",
        overlay: {
          "bg-60": "color-mix(in srgb, var(--bg) 60%, transparent)",
          "bg-90": "color-mix(in srgb, var(--bg) 90%, transparent)",
          "bg-alt-70": "color-mix(in srgb, var(--bg-alt) 70%, transparent)",
          "bg-alt-90": "color-mix(in srgb, var(--bg-alt) 90%, transparent)",
          "surface-80": "color-mix(in srgb, var(--surface) 80%, transparent)",
          "surface-90": "color-mix(in srgb, var(--surface) 90%, transparent)",
          "accent-12": "color-mix(in srgb, var(--accent) 12%, transparent)",
        },
      },
      transitionDuration: { DEFAULT: "200ms" },
    },
  },
  plugins: [],
};
export default config;
