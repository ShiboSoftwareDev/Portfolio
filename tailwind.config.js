/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        customPulse: {
          "0%": { opacity: "0" },
          "40%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        customAction: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        customPulse: "customPulse 3s ease-in-out infinite",
        customAction: "customAction 3s ease-out",
      },
    },
  },
  plugins: [],
};
