import { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Bookings from './pages/Bookings'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/contact" element={<Contact/>} />
          <Route path="/bookings" element={<Bookings/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
