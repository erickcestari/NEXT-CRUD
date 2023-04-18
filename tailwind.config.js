/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {pattern: /from-(green|blue|gray)-(400|500|700)/,},
    {pattern: /to-(green|blue|gray)-(400|500|700)/,},
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

