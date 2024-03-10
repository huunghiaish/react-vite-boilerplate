import { useState } from 'react'
import reactLogo from './assets/react.svg'
import tailwindLogo from './assets/tailwindcss.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center space-x-10'>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
        <a href='https://tailwindcss.com/' target='_blank'>
          <img src={tailwindLogo} className='logo tailwind' alt='Tailwind logo' />
        </a>
      </div>
      <h1 className='text-5xl font-bold mt-10'>Vite + React + Tailwindcss</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
