import React, { useState } from "react";

// Componente base de calculadora de factoriales
function Factorial({ inputType, label }) {    //useState= Estado Local
  const [numero, setNumero] = useState(''); //numero= almacena un numero, setNumero=funcion que permite actualizar el numero
  const [factorial, setFactorial] = useState('');

  const calcularFactorial = () => {
    const num = parseInt(numero);

    if (isNaN(num)) {
      setFactorial('Ingrese un numero valido.');
      return;
    }

    if (num < 0) {
      setFactorial('No se Permiten números negativos.');
      return;
    }

    let resultado = 1;
    for (let i = 2; i <= num; i++) {
      resultado *= i;
    }

    setFactorial(`Factorial de ${num} es: ${resultado}`);
  };

  
  //Funcion creada, la funcion se ejecuta cada vez que el usuario cambia el valor de campo de texto actualiza el estado numero con el valor seleccionado
  const selectNumero = (e) => { 
    setNumero(e.target.value);
  };

  const optionNumero = (e) => {
    setNumero(e.target.value);
  };

  const numbers = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <div>
      <h1>{label}</h1>
      {inputType === 'text' ? (
        <input
          type="number"
          value={numero}
          onChange={selectNumero}
          placeholder="Ingrese un número"
        />
      ) : (
        <select value={numero} onChange={optionNumero}>
          <option value="">Seleccione un Número</option>
          {numbers.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      )}
      <button onClick={calcularFactorial}>Calcular el Factorial</button>
      <p>{factorial}</p>
    </div>
  );
}

// Componente específico para entrada de texto
function FactorialInput() {
  return (
    <Factorial inputType="text" label="Calculadora de Factoriales" />
  );
}

// Componente específico para menú desplegable
function FactorialSelect() {
  return (
    <Factorial inputType="select" label="Factorial Option" />
  );
}

function App() {
  return (
    <div>
      <FactorialInput />
      <FactorialSelect />
    </div>
  );
}

export default App;