import Navbar from './Navbar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones.jsx";
import Pokemon from "./views/Pokemon.jsx";
import './app.css'

function App() {
  return (<BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/pokemones" element={<Pokemones />} />
         <Route path="/pokemones/:id" element={<Pokemon />} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
