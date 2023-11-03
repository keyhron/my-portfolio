/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ff4747",
        "primary-light": "#ff7272",
        secondary: "#ffb647",
        "secondary-light": "#ffd772",
        tertiary: "#476cff",
        "tertiary-light": "#72a3ff",
      },
      fontFamily: {
        nokio: ["var(--font-nokio)"],
        foundation: ["var(--font-foundation)"],
        urbanist: ["var(--font-urbanist)"],
      },
      backgroundImage: {
        cardPink:
          "radial-gradient(circle, #ff5af1 0%, rgba(255, 255, 255, 0) 67%)",
        cardYellow:
          "radial-gradient(circle, #ffb647 0%, rgba(255, 255, 255, 0) 67%)",
        cardBlue:
          "radial-gradient(circle, #476cff 0%, rgba(255, 255, 255, 0) 67%)",
        cardRed:
          "radial-gradient(circle, #ff4747 0%, rgba(255, 255, 255, 0) 67%)",
        hire: "url('/images/hero-projects.jpg')",
        laptop: "url('/images/hero.jpg')",
        certificates: "url('/images/hero-certificates.jpg')",
        footer: "url('/images/img-2.jpg')",
      },
    },
  },
};

