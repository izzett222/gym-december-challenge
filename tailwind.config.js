/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)']
      },
      colors: {
        primary: "#072140",
        "dark-blue": "#072140",
        "dark-blue-100": "#3070b3",
        "light-gray": "#e8ecef",
        "light-gray-100": "#cdd4db",
        yellow: "#fed702",
      },
      screens: {
        // 'xl': '75rem' // 1200px
      },
      maxWidth: {
        limit: "101rem", // 1616px
        main: "87.5rem", // 1400px
      },
      maxHeight: {
        "hero-max": "43.75rem", // 700px
      },
      minHeight: {
        "hero-min": "38.75rem" // 620px
      },
      spacing: {
        13.5: "3.375rem", // 54px
      },
      backgroundImage: {
        "hero-bg": "linear-gradient(292deg, rgba(0, 0, 0, 0) 28%, rgba(0, 0, 0, 0.85) 100%)",
        "hero-container-bg": "linear-gradient(to left, rgb(37, 85, 141) 0%, #072140 70%)",
        "offer-bg": "url('/images/offers1.jpeg')",
      },
      fontSize: {
        "2.5xl": "2rem", // 32px 
        "4.5xl": "2.265rem", // 36px
      }
    },
  },
  plugins: [],
}
