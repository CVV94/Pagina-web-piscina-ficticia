import React from "react";
import NavegacionFragment from "./fragments/navegacionFragment";
import Logo from "../assets/images/logo.png";
import style from "../instructores.module.css";
import Imagen1 from "../../src/assets/images/instructores/1.jpg"
import Imagen2 from "../../src/assets/images/instructores/2.jpg"
import Imagen3 from "../../src/assets/images/instructores/3.jpg"
import Imagen4 from "../../src/assets/images/instructores/4.jpg"
import Imagen5 from "../../src/assets/images/instructores/5.jpg"
import Imagen6 from "../../src/assets/images/instructores/6.jpg"
import Imagen7 from "../../src/assets/images/instructores/7.jpg"
import Imagen8 from "../../src/assets/images/instructores/8.jpg"
import Imagen9 from "../../src/assets/images/instructores/9.jpg"
import Imagen10 from "../../src/assets/images/instructores/10.jpg"
import Imagen11 from "../../src/assets/images/instructores/11.jpg"
import Imagen12 from "../../src/assets/images/instructores/12.jpg"

import InstructoresFragment from "./fragments/instructoresFragment";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Instructores = () =>{
    return (
        <>
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
                subEnlace1="Factorial"
                subEnlace2="Nuestros Intructores"
                Link1="/Factorial"
                Link2="/Instructores"

              />

            </div><br/><br/>

            <div className="container">

                <h1 className={style.tituloInstructores}>Nuestros Intructores</h1><br/><br/>


                <Row xs={1} md={3} >
                    <Col >
                        <InstructoresFragment
                            imagen={Imagen1}
                            titulo="Nombre: Alejandro Torres"
                            descripcion="Especialidad: Técnica de nado de espalda y braza"

                        />
                    </Col>
                    <Col>
                        <InstructoresFragment
                            imagen={Imagen2}
                            titulo="Nombre: Eduardo López"
                            descripcion="Especialidad: Natación en aguas abiertas"
                        />
                    </Col>
                    <Col>
                        <InstructoresFragment
                            imagen={Imagen3}
                            titulo="Nombre: Diego Mendoza"
                            descripcion="Especialidad: Entrenamiento de resistencia y fuerza"
                        />
                    </Col>
                </Row><br/><br/>
                <Row xs={1} md={3} >
                    <Col >
                        <InstructoresFragment
                            imagen={Imagen4}
                            titulo="Nombre: Valentina Rodríguez"
                            descripcion="Especialidad: Natación sincronizada"

                        />
                    </Col>
                    <Col>
                        <InstructoresFragment
                            imagen={Imagen5}
                            titulo="Nombre: Gabriela Martínez"
                            descripcion="Especialidad: Técnica de nado libre y mariposa"
                        />
                    </Col>
                    <Col>
                        <InstructoresFragment
                            imagen={Imagen6}
                            titulo="Nombre: Javier Ramírez"
                            descripcion="Especialidad: Clases de natación para personas con discapacidades"
                        />
                    </Col>
                </Row><br/><br/>
                <Row xs={1} md={3} >
                    <Col >
                        <InstructoresFragment
                            imagen={Imagen7}
                            titulo="Nombre: Carlos Silva"
                            descripcion="Especialidad: Natación para embarazadas"

                        />
                    </Col>
                    <Col>
                        <InstructoresFragment
                            imagen={Imagen8}
                            titulo="Nombre: Andrés Morales"
                            descripcion="Especialidad: Natación de alto rendimiento"
                        />
                    </Col>
                    <Col>
                        <InstructoresFragment
                            imagen={Imagen9}
                            titulo="Nombre: Martín González"
                            descripcion="Especialidad: Natación de resistencia y entrenamiento de triatlón"
                        />
                    </Col>
                </Row>  <br/><br/>
                <Row xs={1} md={3} >
                    <Col >
                        <InstructoresFragment
                            imagen={Imagen10}
                            titulo="Nombre: Laura Gómez"
                            descripcion="Especialidad: Clases de natación para niños"

                        />
                    </Col>
                    <Col>
                        <InstructoresFragment
                            imagen={Imagen11}
                            titulo="Nombre: Carolina Vargas"
                            descripcion="Especialidad: Entrenamiento de competición"
                        />
                    </Col>
                    <Col>
                        <InstructoresFragment
                            imagen={Imagen12}
                            titulo="Nombre: Isabella Fernández"
                            descripcion="Especialidad: Natación para adultos principiantes"
                        />
                    </Col>
                </Row>

            </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000b76" fillOpacity="1" d="M0,32L0,64L160,64L160,288L320,288L320,256L480,256L480,288L640,288L640,64L800,64L800,256L960,256L960,96L1120,96L1120,288L1280,288L1280,96L1440,96L1440,320L1280,320L1280,320L1120,320L1120,320L960,320L960,320L800,320L800,320L640,320L640,320L480,320L480,320L320,320L320,320L160,320L160,320L0,320L0,320Z"></path></svg>
        </>
    )
}
export default Instructores