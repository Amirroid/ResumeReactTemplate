export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "vertical": "1.5rem",
        "horizontal": "2rem",
        "horizontal-md": "8rem",
      },
      colors: {
        primary: "#d5f60f",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-51.5%))" },
        },
      },
      fontFamily: {
        "Istok Web": ["Istok Web", "sans-serif"],
        "Vazirmatn": ["Vazirmatn", "sans-serif"],
      },
    },
  },
  plugins: [],
};