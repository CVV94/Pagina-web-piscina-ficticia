import React from 'react';
import Logo from '../assets/images/logo.png';
import style from '../styles.module.css'
import basico from '../assets/images/basico.png'
import curso1 from '../assets/images/curso 1.png'
import clase1 from '../assets/images/clase1.png'
import clase2 from '../assets/images/clase2.png'
import clase3 from '../assets/images/clase3.png'
import clase4 from '../assets/images/clase4.png'
import Nosotros from '../assets/images/nostros.png'
import CursoFragment from './fragments/cursosFragment';
import CarrucelFragment from './fragments/carrucelFragment';
import AcordionFragment from './fragments/acordionFragment';
import ContactoFragment from './fragments/contactoFragment';
import NavegacionFragment from './fragments/navegacionFragment';

const EscuelaDeNatacion = () => {
  return (
    <>
        <header>
          <NavegacionFragment
              imagen={Logo}
              enlace1="Principal"
              enlace2="Nuestros Cursos"
              enlace3="Nosotros"
              enlace4="Contacto"
              enlace5="Actividades"
              subEnlace3="Calculando el Factorial"
              Link3="/Factorial"
          />


          <div className="container">
            <div className={`${style.title} font-weight-bold`}><br/><br/><br/>
              Clases Abiertas <br/>
              Registrate Ahora!
              <br />
              <button type="button" className="btn btn-danger">Registrar Ahora</button>
            </div>
          </div>
        </header>

      <main>

            <div className= {`${style.cursos} row my-3`} id="row-cursos">
              <div className="container text-center">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <h1 className={style.h1}>Nuestros Cursos</h1>
                    <h5 className={style.h5}>Ofrecemos una amplia variedad de cursos de natación para todas las edades y niveles de habilidad.
                      Nuestros instructores altamente capacitados y experimentados están dedicados a ayudarte a mejorar
                      tus habilidades acuáticas y alcanzar tus objetivos personales. Además, nuestras instalaciones modernas
                      y de alta calidad proporcionan un ambiente seguro y cómodo para que puedas aprender y practicar sin preocupaciones.
                      ¡Regístrate hoy y comienza tu camino hacia la maestría acuática!</h5>
                  </div>
                </div>
                <div className="container">
                    <div className={`row ${style.row}`}>
                      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <CursoFragment
                          titulo="Curso Basico y Avanzado"
                          imagen={basico}
                          textoDescripcion="Se considera como clases particulares a grupos reducidos de personas por profesor.
                          Los grupos pueden ser conformados por un máximo de hasta tres personas, y pueden integrarlos niños y adultos, o combinados (ej. padres con hijos).
                          Mínimo de cuatro (4) clases por grupo."
                        />
                      </div>
                    
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <CursoFragment
                            titulo="Clases Particulares"
                            imagen={curso1}
                            textoDescripcion="Se considera como clases particulares a grupos reducidos de personas por profesor.
                            Los grupos pueden ser conformados por un máximo de hasta tres personas, y pueden integrarlos niños y adultos, o combinados (ej. padres con hijos).
                            Mínimo de cuatro (4) clases por grupo."
                          />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            <div className="row my-3">
            <div className="container">
                <div className="row">

                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                      <CarrucelFragment
                          imagen1={clase1}
                          imagen2={clase2}
                          imagen3={clase3}
                          imagen4={clase4}
                      />
                    </div>
                </div>
            </div>
        </div>

        <div className={`${style.nosotros} row my-3 `} id="row-nosotros">
          <AcordionFragment
                imagen={Nosotros}
                titulo="Sobre Nosotros"
                descripcion="Somos una escuela de natación dedicada a enseñar y promover 
                la natación como un deporte saludable. Ofrecemos programas 
                personalizados para estudiantes de todas las edades y habilidades, 
                desde bebés y niños pequeños hasta adultos y competidores. Nuestros 
                instructores altamente capacitados brindan atención y apoyo individualizado, 
                y nuestras instalaciones modernas aseguran una experiencia de natación segura 
                y agradable. ¡Únete a nosotros y descubre el placer de nadar!"
          />     
        </div>
        <div className={`row my-3 ${style.contacto}`} id='row-contacto'>
            <div className="container text-center">
              <ContactoFragment
                      titulo="Contacto"
                      descripcion="¡No esperes más para sumergirte en la emoción de la natación! Regístrate con tu correo electrónico para mantenerte informado sobre nuestros próximos cursos,
                      promociones y eventos especiales. ¡No te pierdas la oportunidad de aprender un deporte saludable y divertido con nosotros! Además, al registrarte recibirás
                      información exclusiva y ofertas especiales. ¡Regístrate ahora y comienza tu aventura en la piscina!"
              />
            </div> 
          </div> 
        </main>

        <footer>
            <div className="container">
                <div className="row"> 
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 "> 
                        <h4>Horario de Atencion</h4>
                        <div className="mb-3"> 
                            <p>Lunes a viernes: 10:00 a 19:00 <br/>
                                Atención presencial y telefónica <br/>
                                Sábado: 10:00 a 13:00 <br/>
                                Domingo y festivos: cerrado</p>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                        <div className="mb-3">
                            <h4>Contactenos</h4>
                            <div className="d-flex "> 
                                <span className="material-symbols-rounded">
                                    call
                                </span>
                                <p>+569 75188822 </p> 
                            </div>
                            <div className="d-flex">
                                <span className="material-symbols-rounded">
                                        home
                                </span>
                                <p>Av. Balmaceda 1204,Calama</p>
                                
                            </div>
                            <div className="d-flex">
                                <span className="material-symbols-rounded">
                                    mail
                                </span>
                                <p>carlos.vasquez41@inacapmail.cl</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </footer>

    </>
  );
};

export default EscuelaDeNatacion;
