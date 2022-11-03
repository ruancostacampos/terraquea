//dependências
import {Route, Routes, BrowserRouter} from 'react-router-dom'

//importando estilos
import './App.css'

//importando componentes
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Contato from './pages/contato/Contato'
import Footer from './components/Footer/Footer'
import Detalhes from './pages/detalhes/Detalhes'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre" element={<Sobre/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/detalhes" element={<Detalhes/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>

  );
}

export default App;
