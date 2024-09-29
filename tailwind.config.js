/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Schibsted Grotesk', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: "#155EEF",              // Cor principal da marca
          darker: "#162555",               // Versão mais escura da cor
        },
      },
    },
  },
  plugins: [],
};
