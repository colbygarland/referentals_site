/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f8f6',
          100: '#dfe8e3',
          200: '#bfd0c7',
          300: '#719081',
          400: '#719081',
          500: '#445d52',
          600: '#445d52',
          700: '#394c44',
          800: '#2e3c36', // main
          900: '#2b3631',
          950: '#151e1a',
        },
        secondary: {
          50: '#fff3ed',
          100: '#ffece1', // main
          200: '#fec6aa',
          300: '#fd9e74',
          400: '#fb6b3c',
          500: '#f94516',
          600: '#ea2b0c',
          700: '#c21c0c',
          800: '#9a1812',
          900: '#7c1712',
          950: '#430807',
        },
        tertiary: {
          50: '#f5f7ee',
          100: '#e9ecdb',
          200: '#d4dcba',
          300: '#b7c591',
          400: '#9fb072', // main
          500: '#7f9250',
          600: '#63733d',
          700: '#4c5932',
          800: '#3f482c',
          900: '#363f28',
          950: '#1c2112',
        },
      },
    },
  },
  plugins: [],
}
