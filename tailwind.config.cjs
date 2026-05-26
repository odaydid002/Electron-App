module.exports = {
  // Use class-based dark mode so Tailwind's `dark:` variants
  // respond to the `dark` class on the root element.
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
