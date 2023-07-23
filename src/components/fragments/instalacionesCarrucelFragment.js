import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from '../../instalaciones.module.css'
const InstalacionesCarrucelFragment = ({imagen1,titulo1,descripcion1,
                                         imagen2,titulo2,descripcion2,
                                         imagen3,titulo3,descripcion3,
                                         imagen4,titulo4,descripcion4,
                                         imagen5,titulo5,descripcion5,
                                         imagen6,titulo6,descripcion6,
                                         imagen7,titulo7,descripcion7,
                                         imagen8,titulo8,descripcion8}) =>{
    return (
        <>
            <Carousel>
              <Carousel.Item>
                <img
                  className={`d-block w-100 ${style.carrucelInstalaciones}`}
                  src={imagen1}
                  alt="First slide"
                />
                    <Carousel.Caption>
                      <h3>{titulo1}</h3>
                      <p>{descripcion1}</p>
                    </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className={`d-block w-100 ${style.carrucelInstalaciones}`}
                  src={imagen2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>{titulo2}</h3>
                  <p>{descripcion2}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className={`d-block w-100 ${style.carrucelInstalaciones}`}
                  src={imagen3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>{titulo3}</h3>
                  <p>
                      {descripcion3}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

                <Carousel.Item>
                <img
                  className={`d-block w-100 ${style.carrucelInstalaciones}`}
                  src={imagen4}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>{titulo4}</h3>
                  <p>
                      {descripcion4}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

                                <Carousel.Item>
                <img
                  className={`d-block w-100 ${style.carrucelInstalaciones}`}
                  src={imagen5}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>{titulo5}</h3>
                  <p>
                      {descripcion5}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

                                <Carousel.Item>
                <img
                  className={`d-block w-100 ${style.carrucelInstalaciones}`}
                  src={imagen6}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>{titulo6}</h3>
                  <p>
                      {descripcion6}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

                                <Carousel.Item>
                <img
                  className={`d-block w-100 ${style.carrucelInstalaciones}`}
                  src={imagen7}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>{titulo7}</h3>
                  <p>
                      {descripcion7}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

                                <Carousel.Item>
                <img
                  className={`d-block w-100 ${style.carrucelInstalaciones}`}
                  src={imagen8}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>{titulo8}</h3>
                  <p>
                      {descripcion8}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
        </>
    )
}
export default InstalacionesCarrucelFragment