import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: { yellow: '#EFBE37', pink: '#D39384', green: '#9DA25A', gray: '#B7B6C1', 'dark-gray': '#5A5353' },
    },
  },
  safelist: [],
  plugins: [],
};
export default config;
