module.exports = {
  // Use class-based dark mode so Tailwind's `dark:` variants
  // respond to the `dark` class on the root element.
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        fg: 'var(--text)',
        'fg-strong': 'var(--text-h)',
        border: 'var(--border)',
        code: 'var(--code-bg)',
        accent: 'var(--accent)'
      }
    },
  },
  plugins: [],
}
