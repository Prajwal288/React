import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-amber-300 rounded-md'>Hello this is using tailwind</h1>
      <button className=''>Click me</button>
      <Card/>
    </>
  )
}

export default App
