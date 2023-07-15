import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Container/home'
import AllRoutes from './Component/Navbar/AllRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllRoutes/>
    </>
  )
}

export default App
