import React from "react";
import style from "../../styles.module.css"
import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const FooterFragment = ()=>{
    return(
        <>
            <div className={style.footer}>
                <Container>
                    <Row xs={1} md={2}>
                        <Col>
                            <h4>Horario de Atencion</h4>
                            <div className="mb-2">
                                <p>Lunes a viernes: 10:00 a 19:00 <br/>
                                    Atención presencial y telefónica <br/>
                                    Sábado: 10:00 a 13:00 <br/>
                                    Domingo y festivos: cerrado</p>
                            </div>
                        </Col>


                        <Col>
                            <div className="mb-2">
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
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
export default FooterFragment