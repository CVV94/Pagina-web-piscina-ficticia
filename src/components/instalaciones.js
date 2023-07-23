import React from "react";
import Logo from "../assets/images/logo.png";
import NavegacionFragment from "./fragments/navegacionFragment";
import InstalacionesCarrucelFragment from "./fragments/instalacionesCarrucelFragment";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import style from '../instalaciones.module.css'
import Imagen1 from "../assets/images/instalaciones/1.jpg"
import Imagen2 from "../assets/images/instalaciones/2.jpg"
import Imagen3 from "../assets/images/instalaciones/3.jpg"
import Imagen4 from "../assets/images/instalaciones/4.jpg"
import Imagen5 from "../assets/images/instalaciones/5.jpg"
import Imagen6 from "../assets/images/instalaciones/6.jpg"
import Imagen7 from "../assets/images/instalaciones/7.jpg"
import Imagen8 from "../assets/images/instalaciones/8.jpg"
import {Container} from "react-bootstrap";
import FooterFragment from "./fragments/footerFragment";
const Instalaciones = () =>{
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

                <h1 className={style.titulo}>Nuestras Instalaciones</h1>


                <Card className={style.tarjetas}>
                  <Card.Body>¡Bienvenidos a nuestra Escuela de Natación, donde encontrarás el
                    lugar perfecto para aprender a nadar y disfrutar del agua en
                    todas sus formas! Nuestras instalaciones están diseñadas para
                    brindar la mejor experiencia posible a nuestros clientes, con una
                    amplia gama de servicios y comodidades que se adaptan a todas las
                    edades y niveles de habilidad.
                  </Card.Body>
                </Card>

            </div>
            <br/>

            <InstalacionesCarrucelFragment
            imagen1={Imagen1}
            titulo1="Alberca 1"
            descripcion1="Alberca de Natacion"

            imagen2={Imagen2}
            titulo2="Alberca 2"
            descripcion2="Alberca de entrenamiento basico"

            imagen3={Imagen3}
            titulo3="Baños y Duchas"
            descripcion3="Vestidores Modernos de calidad y comodidad"

            imagen4={Imagen4}
            titulo4="Alberca 3"
            descripcion4="Alberca para uso privado"

            imagen5={Imagen5}
            titulo5="Alberca 4"
            descripcion5="Alberca para jovenes adultos"

            imagen6={Imagen6}
            titulo6="Casilleros"
            descripcion6="Casilleros con alto Sistema de seguridad"

            imagen7={Imagen7}
            titulo7="Lobi de Recepcion"
            descripcion7="Pasillos de espera comodos para el uso de nuestros clientes"

            imagen8={Imagen8}
            titulo8="Oficina de Recepcion"
            descripcion8="Nuestras oficinas"

            />
            <h5 className={style.titulo}>Aquí tienes algunas de las razones
                    por las que debes elegir nuestra escuela:</h5>
    <Container>
    <Row className={style.row} xs={1} md={2}>
        <Col>
          <Card>
            <Card.Body className={style.tarjetasDeSeleccion}>

              <Card.Text className={style.texto}>
                Variedad de albercas: Contamos con albercas de diferentes tipos, desde albercas privadas para sesiones individuales
                  o en grupos reducidos, hasta albercas más grandes y espaciosas para jóvenes y niños. Sea cual sea tu edad o nivel
                  de experiencia, tenemos el lugar perfecto para ti.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
                <Col>
          <Card>
            <Card.Body className={style.tarjetasDeSeleccion}>

              <Card.Text className={style.texto}>
                Enfoque en seguridad: Tu seguridad es nuestra prioridad. Nuestras albercas están equipadas con sistemas de monitoreo y
                  contamos con personal altamente capacitado en rescate acuático y primeros auxilios. Además, nuestros casilleros son
                  seguros y brindan un lugar para almacenar tus pertenencias mientras te sumerges en el agua.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

            </Row>
                <Row className={style.row} xs={1} md={2}>
                <Col>
                  <Card>
                    <Card.Body className={style.tarjetasDeSeleccion}>

                      <Card.Text className={style.texto}>
                        Comodidad y espacios acogedores: Sabemos lo importante que es sentirse cómodo mientras esperas tu turno o mientras los más
                          pequeños toman sus clases. Por eso, nuestras áreas de recepción y salas de espera están diseñadas para ser acogedoras y
                          relajantes. Puedes disfrutar de una atmósfera amigable mientras ves a tus seres queridos aprender y divertirse en el agua.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                 <Col>
                  <Card className={style.tarjetasDeSeleccion}>
                    <Card.Body>

                      <Card.Text className={style.texto}>
                        Ambientes limpios y sanitizados: Mantenemos nuestras instalaciones impecablemente limpias y desinfectadas. Nuestra
                          atención rigurosa en la limpieza asegura un ambiente saludable para todos los visitantes.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
            <Row className={style.row} xs={1} md={2}>

                <Col>
                  <Card>
                    <Card.Body className={style.tarjetasDeSeleccion}>

                      <Card.Text className={style.texto}>
                        Instructores altamente calificados: Nuestro equipo de instructores está compuesto por profesionales altamente calificados
                          y apasionados por la enseñanza de la natación. Ya sea que estés aprendiendo a nadar o buscando mejorar tus habilidades,
                          nuestros instructores te brindarán una atención personalizada y te ayudarán a alcanzar tus objetivos.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                        <Col>
                  <Card>
                    <Card.Body className={style.tarjetasDeSeleccion}>

                      <Card.Text className={style.texto}>
                        Clases para todas las edades y niveles: Ofrecemos programas de natación para bebés, niños, jóvenes y adultos de todos los niveles.
                          Desde principiantes hasta nadadores avanzados, cada clase se adapta a las necesidades individuales para que todos puedan aprender
                          y progresar a su propio ritmo.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
            </Row>
    </Container>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#f3f4f5" fillOpacity="1" d="M0,0L30,5.3C60,11,120,21,180,42.7C240,64,300,96,360,138.7C420,181,480,235,540,261.3C600,288,660,288,720,277.3C780,267,840,245,900,245.3C960,245,1020,267,1080,277.3C1140,288,1200,288,1260,261.3C1320,235,1380,181,1410,154.7L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
            </svg>

        </>
    )
}
export default Instalaciones