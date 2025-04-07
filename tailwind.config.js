/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'beige-sable': '#E6D5B8',
        'bleu-nuit': '#1E3A5F',
        'blanc-casse': '#FAF8F5',
        'noir-charbon': '#2B2B2B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
