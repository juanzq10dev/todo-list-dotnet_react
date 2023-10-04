import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1370a5",
          secondary: "#e5d35b",
          accent: "#ea4f92",
          neutral: "#1a1b23",
          "base-100": "#e9ebf2",
          info: "#3356f0",
          success: "#199f77",
          warning: "#fcb045",
          error: "#f46286",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config
