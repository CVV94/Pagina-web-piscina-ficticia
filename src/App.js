import React,{useEffect,useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import Factorial from './components/Factorial1';
import EscuelaDeNatacion from './components/base';
import Instalaciones from "./components/instalaciones";
import Instructores from "./components/instructores";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EscuelaDeNatacion />}/>
      <Route path='/Factorial' element={<Factorial/>}/>
      <Route path='/Instalaciones' element={<Instalaciones/>}/>
      <Route path='/Instructores' element={<Instructores/>}/>
    </Routes>
  )
}

export default App;
