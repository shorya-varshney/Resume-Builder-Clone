import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Container from './Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Container/>
    </>
  )
}

export default App
