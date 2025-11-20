import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Lutadores from './pages/Lutadores'
import AdicionarLutadores from './pages/AdicionarLutadores'
import LutadorIndividual from './pages/LutadorIndividual'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lutadores" element={<Lutadores />} />
        <Route path="/adicionarlutador" element={<AdicionarLutadores />} />
        <Route path="/lutador/:id" element={<LutadorIndividual />} />
      </Routes>
    </div>
  )
}

export default App