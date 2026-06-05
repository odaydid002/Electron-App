import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(()=>{
    const unsub = window.electron.subscribeTest(msg => console.log(msg))
    return unsub;
  }, [])

  console.log(async () => await window.electron.getStatic())

  return (
    <main className='dark:bg-[#0b1220] bg-[#ffffff] w-dvw h-dvh flex items-center justify-center'>
      <header className="absolute top-0 left-0 w-full p-2 box-border dark:bg-[#181818] bg-[#d0d0d0]">
        <button onClick={() => window.electron.sendFrameAction('MINIMIZE')} className="rounded-full w-4 h-4 m-1 bg-lime-500"></button>
        <button onClick={() => window.electron.sendFrameAction('MAXIMIZE')} className="rounded-full w-4 h-4 m-1 bg-yellow-500"></button>
        <button onClick={() => window.electron.sendFrameAction('CLOSE')} className="rounded-full w-4 h-4 m-1 bg-red-500"></button>
      </header>
      <h1 className='text-5xl font-bold dark:text-[#e6edf3] text-[#111827]'>Hello World</h1>
    </main>
  )
}

export default App
