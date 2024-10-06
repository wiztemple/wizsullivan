import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "linear-gradient": "linear-gradient(180deg, #FDFCF9 20%, #CBF6DF 50%, #FFF 90%);"
      },
      colors: {
        ptext: '#5C5673',
        subtitle: '#3B4359',
        spantext: '#827F8D',
        textcolor: '#423B44',
        linkcolor: '#229EE3'
      },
      boxShadow: {
        cardShadow: '0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)'
      }
    },
  },
  plugins: [],
};
export default config;
