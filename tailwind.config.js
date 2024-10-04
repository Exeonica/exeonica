/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        footer: "#102E3C",
        copywrite: "#A6AAC3",
        background: "#f0f0f0",
        headerbg: "#EEFBFD",
        foreground: "#333333",
        title: "#1E1E1E",
        description: "#5D6B7F",
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
        border: "#F7FAFC",
        input: "#ffffff",
        ring: "#3b82f6",
        chart: {
          1: "#ff6384",
          2: "#36a2eb",
          3: "#ffce56",
          4: "#4bc0c0",
          5: "#9966ff",
        },
        text: {
          DEFAULT: "#1E1E1E",
        },
        color: {
          1: "#5D6B7F",
          2: "#B0E7F11A",
        },
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
      fontFamily: {
        pangeaAfrikanTrial: ["var(--font-pangeaAfrikanTrial)"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
