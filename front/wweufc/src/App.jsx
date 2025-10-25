import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Lutadores from './components/Lutadores'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lutadores" element={<Lutadores />} />
      </Routes>
    </div>
  )
}

export default App