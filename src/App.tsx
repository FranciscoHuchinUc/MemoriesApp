import { Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components'
import { AddMemorie, Home, Memories } from './pages'

function App () {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddMemorie />} />
        <Route path='/memories' element={<Memories />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  )
}

export default App
