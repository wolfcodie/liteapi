import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lota: ['Lota Grotesque Alt 3', 'serif'],
      },
      colors: {
        white: '#FFFFFF',
        primary: '#7B6DFF',
        secondary: '#FF6347',
        black: '#19172C',
        text: '#585665',
        success: '#067647',
        successLight: '#DFF4EA',
      },
      backgroundImage: (theme) => ({
        'gradient-to-r': 'linear-gradient(to right, #6EE7B7, #3B82F6)',
      }),
      boxShadow: {
        custom: '0 4px 10px rgba(214, 210, 255, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
