
function applyTheme(theme: Theme):null | void {

  if (theme === 'system') return null;

  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

export function initTheme():void {
  try {
    const stored = null
    if (stored){
      applyTheme(stored)
    }else{
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const system = prefersDark ? 'dark' : 'light'
      applyTheme(system)
    }
  } catch (e) {
    console.error(e)
  }
}

export async function setTheme(theme: Theme) {
  applyTheme(theme)
}

export default {
  initTheme,
  setTheme,
}
