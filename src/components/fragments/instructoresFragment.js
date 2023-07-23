import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import style from "../../instructores.module.css";

const InstructoresFragment = ({imagen,titulo,descripcion}) =>{
    return(
        <>

                  <Card className={style.imagenes}>
                    <Card.Img variant="top" src={imagen}  />
                    <Card.Body>
                      <Card.Title className={style.titulo}>{titulo}</Card.Title>
                      <Card.Text className={style.descripcion}>
                          {descripcion}
                      </Card.Text>
                    </Card.Body>
                  </Card>

        </>

        )
}
export default InstructoresFragment