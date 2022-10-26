import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./views/Home";
import NavBar from "./componentes/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import PokeSelect from "./views/PokeSelect";
import Pokedata from './views/Pokedata'

function App() { 
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/pokeselect' element={<PokeSelect/>}/>
          <Route path='/pokemon/:id' element={<Pokedata/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
