import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Features/>
    </>
  )
}

export default App
