import { useEffect } from 'react'
import { useTheme } from '../hooks/useTheme';

function App() {

  useEffect(()=>{
    const unsub = window.electron.subscribeTest(msg => console.log(msg))
    return unsub;
  }, [])

  console.log(async () => await window.electron.getStatic())
  const { theme, setTheme} = useTheme();
  return (
    <main className='dark:bg-[#0b1220] bg-[#ffffff] w-dvw h-dvh flex flex-col items-center justify-center'>
      <header className="absolute text-right top-0 left-0 w-full p-2 box-border dark:bg-[#181818] bg-[#d0d0d0]">
        <button onClick={() => window.electron.sendFrameAction('MINIMIZE')} className="rounded-full w-4 h-4 m-1 bg-lime-500"></button>
        <button onClick={() => window.electron.sendFrameAction('MAXIMIZE')} className="rounded-full w-4 h-4 m-1 bg-yellow-500"></button>
        <button onClick={() => window.electron.sendFrameAction('CLOSE')} className="rounded-full w-4 h-4 m-1 bg-red-500"></button>
      </header>
      <h1 className='text-5xl font-bold dark:text-[#e6edf3] text-[#111827]'>Welcome</h1>
      <div className='flex items-center gap-4 mt-5'>
        <p className='text-black dark:text-white'>Theme</p>
        <button onClick={async () => {
          setTheme(theme ==='system'? 'light':theme==='dark'?'light':"dark")
        }}>
          <p className='text-black dark:text-white'>{theme}</p>
        </button>
      </div>
    </main>
  )
}

export default App
