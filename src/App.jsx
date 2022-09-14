import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CryptoHome from './pages/CryptoHome'
import CryptoDetail from './pages/CryptoDetail'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<CryptoHome/>}></Route>
        <Route path="/coin/:id" element={<CryptoDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
