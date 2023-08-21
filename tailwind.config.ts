import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   extend: {
      
      animation:{
      marquee: 'marquee 25s linear infinite',
      },
      keyframes:{
        marquee:{
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-75%)' },
       }
    },
    },
  },
  plugins: [],
}
export default config
