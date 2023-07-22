import React,{useEffect,useState} from 'react';
import {Routes,Route} from 'react-router-dom';
import Factorial from './components/Factorial1';
import EscuelaDeNatacion from './components/base';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<EscuelaDeNatacion />}/>
      <Route path='/Factorial' element={<Factorial/>}/>
    </Routes>
  )
}

export default App;
