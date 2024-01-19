/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        customPulse: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        customAction: {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        starPulse: {
          "0%": { opacity: "0.1" },
          "20%": { opacity: "0" },
          "50%": { opacity: "1" },
          "80%": { opacity: "0" },
          "100%": { opacity: "0.1" },
        },
      },
      animation: {
        customPulse: "customPulse 3s ease-out",
        customAction: "customAction 3.5s ease-out",
        spinSlow: "spin 10s linear infinite, starPulse 10s ease-out infinite",
      },
    },
  },
  plugins: [],
};
