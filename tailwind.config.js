/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        lora: ['var(--font-lora)'],
        mono: ['var(--font-roboto-mono)'],
      },
      backgroundImage: {
      },
      spacing: {
        '3r': '3.5rem',
        '4r': '4.5rem',
        '5r': '5.5rem',
        '9r': '9.5rem',
      },
    },
  },
  plugins: [],
}
