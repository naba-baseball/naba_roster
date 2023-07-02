import { defineConfig, presetUno, presetWebFonts } from "unocss";
export default defineConfig({
  content: {
    pipeline: {
      include: ["**/*.vue", "**/*.ts"],
    },
  },
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "bunny",
      fonts: {
        sans: "DM Sans, sans-serif",
      },
    }),
  ],
  shortcuts: [
    {
      "theme.background": "bg-blue-100",
      "theme.surface": "bg-blue-50",
      "theme.border": "border-color-gray-800 border-width-1 border-solid",
      "theme.text-primary": "text-gray-900",
      "theme.primary": "bg-gray-900",
      "theme.button":
        "theme.primary text-white px-3 py-2 uppercase tracking-wide text-sm font-medium",
    },
  ],
  theme: {
    colors: {
      gray: {
        //tailwind slate colors
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617",
      },
    },
  },
  rules: [
    [
      /^text-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c]) return { color: theme.colors[c] };
      },
    ],
    [
      /^border-color-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c]) return { "border-color": theme.colors[c] };
      },
    ],
    [
      /^bg-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c]) return { 'background-color': theme.colors[c] };
      },
    ],
  ],
});