/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pan: {
          "0%": { transform: "translateX(0) rotate(270deg)" },
          "100%": { transform: "translateX(100px) rotate(270deg)" },
        },
      },
      animation: {
        "pan-loop": "pan 5s linear infinite",
      },
    },
  },
  plugins: [],
};
