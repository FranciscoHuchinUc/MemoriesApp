import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { AddMemorie, Home, Memories } from './pages'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMemorie />} />
        <Route path='/memories' element={<Memories />} />
      </Routes>
    </>
  )
}

export default App
