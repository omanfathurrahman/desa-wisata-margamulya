import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'darkGreen': '#3A5331',
      }
    },
  },
  plugins: [],
} satisfies Config

