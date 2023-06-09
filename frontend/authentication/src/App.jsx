import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Routes>
          <Route path='/' exact Component={HomePage}/>
          <Route path='/login' Component={LoginPage}/>
      </Routes>
    </>
  )
}

export default App
