import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Brochure from './pages/Brochure'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brochure" element={<Brochure />} />
    </Routes>
  )
}

export default App
