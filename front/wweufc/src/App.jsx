import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Lutadores from './pages/Lutadores'
import AdicionarLutadores from './pages/AdicionarLutadores'
import LutadorIndividual from './pages/LutadorIndividual'
import Eventos from './pages/Eventos'
import AdicionarEvento from './pages/AdicionarEvento'
import AdicionarMateria from './pages/AdicionarMateria'
import MateriaIndividual from './pages/MateriaIndividual'
import WWEpage from './pages/WWEpage'
import AdicionarCinturao from './pages/AdicionarCinturao'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lutadores" element={<Lutadores />} />
        <Route path="/adicionarlutador" element={<AdicionarLutadores />} />
        <Route path="/lutador/:id" element={<LutadorIndividual />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/adicionareventos" element={<AdicionarEvento />} />
        <Route path="/adicionarmaterias" element={<AdicionarMateria />} />
        <Route path="/materia/:id" element={<MateriaIndividual />} />
        <Route path="/adicionarcinturao" element={<AdicionarCinturao />} />
        <Route path="/wwe" element={<WWEpage />} />
      </Routes>
    </div>
  )
}

export default App