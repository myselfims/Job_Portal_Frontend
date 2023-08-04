import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/home/home'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-screen px-10 mt-10 flex flex-col items-center justify-center container'>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
