import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'var(--font-poppins)',
      },
    },

    colors: {
      white: '#fff',
      black: '#000',
      gray: {
        50: '#f9f9fb',
        100: '#ebeaec',
        200: '#bfbfc4',
        300: '#ABB0B4 ',
        400: '#5C5E64',
        500: '#322f41',
        600: '#2e2b3b',
        700: '#24212e',
        800: '#191820',
        900: '#121212 ',
      },
      violet: {
        50: '#E5E5FC',
        100: '#D6CBF5',
        200: '#C2B2F0',
        300: '#A78FEA ',
        400: '#9579E5',
        500: '#7B58DF',
        600: '#7050CB',
        700: '#573E9E',
        800: '#44307B',
        900: '#34255E ',
      },
      red: {
        50: '#fcecef',
        100: '#f6c4cd',
        200: '#f2a7b4',
        300: '#ec7f92',
        400: '#e9667d',
        500: '#e3405d',
        600: '#cf3a55',
        700: '#a12d42',
        800: '#7d2333',
        900: '#5f1b27',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
