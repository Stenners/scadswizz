/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#ee2c73",
      },
      keyframes: {
        pan: {
          "0%": { transform: "translateX(-100px)" },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        "pan-loop": "pan 5s linear infinite",
      },
    },
  },
  plugins: [],
};
