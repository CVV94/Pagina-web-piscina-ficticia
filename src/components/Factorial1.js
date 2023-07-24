import React, { useState } from "react";
import style from '../factorial.module.css'
import NavegacionFragment from "./fragments/navegacionFragment";
import Logo from "../assets/images/logo.png";
import {Container} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import FooterFragment from "./fragments/footerFragment";
function Factorial({ inputType, label }) {
  const [numero, setNumero] = useState('');
  const [factorial, setFactorial] = useState('');

  const calcularFactorial = () => {
    const num = parseInt(numero);

    if (isNaN(num)) {
      setFactorial('Ingrese un número válido.');
      return;
    }

    if (num < 0) {
      setFactorial('No se permiten números negativos.');
      return;
    }

    let resultado = 1;
    for (let i = 2; i <= num; i++) {
      resultado *= i;
    }

    setFactorial(`Factorial de ${num} es: ${resultado}`);
  };

  const selectNumero = (e) => {
    setNumero(e.target.value);
  };

  const optionNumero = (e) => {
    setNumero(e.target.value);
  };

  const numbers = Array.from({ length: 30 }, (_, index) => index + 1);

  return (

      <>
      <Container>
        <div className={style.Factoriales}>
          <h1>{label}</h1>
          {inputType === 'text' ? (
            <input
              type="number"
              value={numero}
              onChange={selectNumero}
              placeholder="Ingrese un número"
            />

          ) : (
              <div>
                <select value={numero} onChange={optionNumero}>
                  <option value="">Seleccione un Número</option>
                  {numbers.map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
          )}
              <Button variant="primary" size="md" active className={style.btn} onClick={calcularFactorial}> Calcular Factorial</Button>

          <p>{factorial}</p>
        </div>
      </Container>

      </>

      );
}

function App() {
  return (
    <div>
      <NavegacionFragment
        imagen={Logo}
        enlace1=""
        enlace2=""
        enlace3=""
        enlace4=""
        enlace5="Actividades"
        subEnlace3="Principal"
        Link3="/"
        subEnlace1="Nuestras Instalaciones"
        subEnlace2="Nuestros Intructores"
        Link1="/Instalaciones"
        Link2="/Instructores"

      />
      <Factorial inputType="text" label="Calculadora de Factoriales" />
      <Factorial inputType="select" label="Factorial Option" />


    </div>


  );
}

export default App;
