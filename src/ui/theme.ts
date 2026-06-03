function applyTheme(theme: 'dark' | 'light') {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function initTheme() {
  try {
    const stored = localStorage.getItem('theme') as 'dark' | 'light' | null
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = stored ?? (prefersDark ? 'dark' : 'light')
    applyTheme(theme)
  } catch (e) {
    // ignore
  }
}

export function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark')
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  } catch (e) {
    // ignore
  }
  return isDark
}

// Initialize immediately when the module is imported so the class
// is present before React renders to reduce flash of wrong theme.
initTheme()

export default {
  initTheme,
  toggleTheme,
}
