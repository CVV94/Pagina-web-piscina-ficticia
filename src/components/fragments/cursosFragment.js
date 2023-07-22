import React, {useEffect,useState}from "react";
import style from '../../styles.module.css';
const CursoFragment = ({ imagen, titulo, textoDescripcion }) => {

    return(
        <>
            <div className={`card ${style.card}`}>
                <img src={imagen} className="card-img-top" alt="basico" />
                <div className="card-body">
                    <h5 className={style['card-title']}>{titulo}</h5>
                    <p className={style['card-text']}>{textoDescripcion}</p>
                </div>
            </div>
        
        </>
    )
}
export default CursoFragment