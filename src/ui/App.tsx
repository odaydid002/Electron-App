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
      <h1 className='text-5xl font-bold dark:text-[#e6edf3] text-[#111827]'>Hello World</h1>
    </main>
  )
}

export default App
