/** @type {import('tailwindcss').Config} */
const colorMix = require("tailwindcss-color-mix");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "radial-gradient(at -20% -50%, rgba(200,27,212,calc(1*1)), rgba(154,14,240,calc(1*1)), rgba(102,0,255,calc(1 - .15)), color-mix(in srgb, var(--theme-primary-base), var(--theme-surface-base) 95%) 60%);",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontSize: {
        'fs-sm-100': "clamp(0.80rem,calc(0.31rem + 1.97vw),0.9375rem)",
        'fs-sm-200': "clamp(0.60rem,calc(0.31rem + 1.97vw),0.875rem)",
        'fs-sm-300': "clamp(0.70rem,calc(0.32rem + 1.69vw),0.8125rem)",
        'fs-sm-400': "clamp(0.6875rem,calc(0.31rem + 1.97vw),0.75rem)",
        'fs-sm-500': "clamp(0.60rem,calc(0.31rem + 1.97vw),0.6875rem)",
        'fs-100': "clamp(1.875rem,calc(0.11rem + 4.66vw),2.5rem)",
        'fs-200': "clamp(1.5625rem,calc(0.16rem + 4.06vw),2rem)",
        'fs-300': "clamp(1.4063rem,calc(0.21rem + 3.52vw),1.75rem)",
        'fs-400': "clamp(1.25rem,calc(0.24rem + 3.06vw),1.5rem)",
        'fs-500': "clamp(1rem,calc(0.27rem + 2.64vw),1.25rem)",
        'fs-600': "clamp(0.875rem,calc(0.29rem + 2.28vw),1rem)",
        'fs-xl-100': "clamp(2rem,calc(0.11rem + 5vw),3.3rem)",
      },
      colors: {
        'light-primary-base': '#382bf0',
        'light-surface-base':'#fff',
        'dark-primary-base': '#d1c4ff',
        'dark-surface-base':'#121212',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    colorMix(),
    require('@tailwindcss/aspect-ratio'),
  ],
}