/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f0f0f0",
        foreground: "#333333",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#000000",
        },
        popover: {
          DEFAULT: "#f9f9f9",
          foreground: "#111111",
        },
        primary: {
          DEFAULT: "#219EBC",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#ff9800",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#e0e0e0",
          foreground: "#666666",
        },
        accent: {
          DEFAULT: "#e91e63",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "#f44336",
          foreground: "#ffffff",
        },
        border: "#cccccc",
        input: "#ffffff",
        ring: "#3b82f6",
        chart: {
          1: "#ff6384",
          2: "#36a2eb",
          3: "#ffce56",
          4: "#4bc0c0",
          5: "#9966ff",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
