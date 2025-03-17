export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "vertical": "2rem",
        "horizontal": "8rem",
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
    },
  },
  plugins: [],
};