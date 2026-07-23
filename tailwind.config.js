/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0E1526",
          light: "#141D33",
          border: "#233049",
        },
        parchment: {
          DEFAULT: "#F6F3EC",
          dim: "#EDE8DB",
        },
        brass: {
          DEFAULT: "#C9A227",
          light: "#E0BE4E",
          dark: "#96771A",
        },
        seal: {
          DEFAULT: "#1F6F5C",
          light: "#2C8F76",
          dark: "#154C3F",
        },
        ash: "#9AA5B8",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        seal: "0 0 0 1px rgba(201,162,39,0.35), 0 8px 30px -12px rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [],
};
