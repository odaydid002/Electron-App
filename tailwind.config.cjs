module.exports = {
  // Use class-based dark mode so Tailwind's `dark:` variants
  // respond to the `dark` class on the root element.
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        'poppins-light': ['Poppins', 'sans-serif'],
        'poppins-medium': ['Poppins', 'sans-serif'],
        'poppins-regular': ['Poppins', 'sans-serif'],
        'poppins-bold': ['Poppins', 'sans-serif'],
        'poppins-black': ['Poppins', 'sans-serif'],
        'tajawal-light': ['Tajawal', 'sans-serif'],
        'tajawal-regular': ['Tajawal', 'sans-serif'],
        'tajawal-bold': ['Tajawal', 'sans-serif'],
        'tajawal-black': ['Tajawal', 'sans-serif'],
      },
      colors: {
        background: {
          DEFAULT: "#F4F4F4",
          dark: "#181818",
        },
        foreground: {
          DEFAULT: "#333333",
          dark: "#ffffff",
        },
        "container": {
          DEFAULT: "#FFFFFF",
          dark: "#121212"
        },
        "input": {
          DEFAULT: "#ffffff",
          dark: "#303030"
        },
        "primary": {
          100: '#FF5555',
          200: '#FF937E',
          "trans": "rgba(255, 85, 85, 0.2)"
        },
        "secondary": {
          100: "#A3D78A",
          200: "#C1E59F",
          "trans": "rgba(163, 215, 138, 0.2)",
          "darker": "#7CB86B"
        },
        accent: "#F15758",
        black: {
          DEFAULT: "#000000",
          100: '#8C8E98',
          200: '#666876',
          300: "#191d31"
        },
        danger: "#F75555",
        inp: "rgba(80,80,80,0.15)"
      }
    },
  },
  plugins: [],
}
