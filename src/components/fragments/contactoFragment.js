import React from "react";
import style from '../../styles.module.css'

const ContactoFragment = ({ titulo, descripcion }) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 mx-auto">
          <h1 className="font-weight-bold mt-3">{titulo}</h1>
          <h5 className="mt-3">{descripcion}</h5>
          <div className="input-group mt-3 mb-5 ">
            <form className="mx-auto mt-5">
              <label htmlFor="nombre">
                <span>Nombre : </span>
                <input type="text" id="nombre" name="nombre" required placeholder="Ingresa tu Nombre" />
              </label><br /><br />

              <label htmlFor="Celular">
                <span>Celular :</span>
                <input type="text" id="Celular" name="Celular" required placeholder="N° de Celular" />
              </label><br /><br />

              <label htmlFor="Correo">
                <span> Correo :</span>
                <input type="email" id="Correo" name="Correo" placeholder="email" required />
              </label> <br /><br />
              <button className={style.botonEnviar} type="submit">Enviar</button>
            </form>

          </div>
        </div>
      </div>
    </>
  );
};

export default ContactoFragment;
