/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#1370a5",
          "secondary": "#e5d35b",
          "accent": "#ea4f92",
          "neutral": "#1a1b23",
          "base-100": "#e9ebf2",
          "info": "#3356f0",
          "success": "#199f77",
          "warning": "#fcb045",
          "error": "#f46286",
        },
      }
    ]
  },
  plugins: [require("daisyui")],
}