import { useEffect } from 'react'
import { useDirection } from "../hooks/useDirection";
import { useTranslation } from "../hooks/useTranslation";
import { useTheme } from '../hooks/useTheme';
import { locales } from '../constants/locales';

function App() {

  useDirection();

  const { t, language, setLanguage } = useTranslation();

  useEffect(()=>{
    const unsub = window.electron.subscribeTest(msg => console.log(msg))
    return unsub;
  }, [])

  console.log(async () => await window.electron.getStatic())
  const { theme, setTheme} = useTheme();
  return (
    <main className='dark:bg-[#0b1220] bg-[#ffffff] w-dvw h-dvh flex flex-col items-center justify-center'>
      <header className="flex items-center justify-end absolute top-0 left-0 w-full p-2 box-border dark:bg-[#181818] bg-[#d0d0d0]">
        <div className="flex items-center justify-center">
          <button onClick={() => window.electron.sendFrameAction('MINIMIZE')} className="rounded-full w-4 h-4 m-1 bg-lime-500"></button>
          <button onClick={() => window.electron.sendFrameAction('MAXIMIZE')} className="rounded-full w-4 h-4 m-1 bg-yellow-500"></button>
          <button onClick={() => window.electron.sendFrameAction('CLOSE')} className="rounded-full w-4 h-4 m-1 bg-red-500"></button>
        </div>
      </header>
      <h1 className='text-5xl font-bold dark:text-[#e6edf3] text-[#111827]'>{t('welcome')}</h1>
      <div className='flex items-center gap-4 mt-5'>
        <p className='text-black dark:text-white'>{t('theme')}</p>
        <button onClick={async () => {
          setTheme(theme ==='system'? 'light':theme==='dark'?'light':"dark")
        }}>
          <p className='text-black dark:text-white'>{theme==='dark'?t('dark'):t('light')}</p>
        </button>
      </div>
      <div className='flex items-center gap-4 mt-5'>
        <p className='text-black dark:text-white'>{t('language')}</p>
        <button onClick={async () => {
          setLanguage(language ==='en'? 'ar':language==='ar'?'fr':"en")
        }}>
          <p className='text-black dark:text-white'>{locales.name[language]}</p>
        </button>
      </div>
    </main>
  )
}

export default App
