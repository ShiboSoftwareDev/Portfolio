/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "[--index:1]",
    "[--index:2]",
    "[--index:3]",
    "[--index:4]",
    "[--index:5]",
    "[--index:6]",
    "[--index:7]",
    "[--index:8]",
    "[--index:9]",
    "[--index:10]",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary) / <alpha-value>)",
        secondary: "rgba(var(--secondary) / <alpha-value>)",
        greenNebula: "rgba(var(--green-nebula) / <alpha-value>)",
        purpleNebula: "rgba(var(--purple-nebula) / <alpha-value>)",
      },
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
        slide1: {
          "0%": {
            left: "-100%",
          },
          "50%": {
            left: "100%",
          },
          "100%": {
            left: "100%",
          },
        },
        slide2: {
          "0%": {
            top: "-100%",
          },
          "50%": {
            top: "100%",
          },
          "100%": {
            top: "100%",
          },
        },
        slide3: {
          "0%": {
            right: "-100%",
          },
          "50%": {
            right: "100%",
          },
          "100%": {
            right: "100%",
          },
        },
        slide4: {
          "0%": {
            bottom: "-100%",
          },
          "50%": {
            bottom: "100%",
          },
          "100%": {
            bottom: "100%",
          },
        },
      },
      animation: {
        customPulse: "customPulse 3s ease-out",
        customAction: "customAction 3.5s ease-out",
        spinSlow: "spin 10s linear infinite, starPulse 10s ease-out infinite",
        slider1: "slide1 1s linear infinite",
        slider2: "slide2 1s 0.25s linear infinite",
        slider3: "slide3 1s 0.5s linear infinite",
        slider4: "slide4 1s 0.75s linear infinite",
      },
      backgroundImage: {
        blueGradient:
          "linear-gradient(360deg, transparent, var(--primary-shadow))",
      },
    },
  },
  plugins: [],
};
