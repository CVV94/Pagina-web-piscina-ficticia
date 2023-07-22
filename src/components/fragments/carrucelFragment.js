import React from "react";
import style from '../../styles.module.css'
const CarrucelFragment = ({imagen1,imagen2,imagen3,imagen4}) => {

    return(
        <>
            <div id="carouselExampleControls" className={`carousel slide ${style.carrucel}`} data-bs-ride="carousel">
                <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={imagen1} className="d-block w-100" alt="clase1"/>
                </div>
                <div className="carousel-item">
                <img src={imagen2} className="d-block w-100" alt="clase2"/>
                </div>
                <div className="carousel-item">
                <img src={imagen3} className="d-block w-100" alt="clase3"/>
                </div>
                <div className="carousel-item">
                    <img src={imagen4} className="d-block w-100" alt="clase3"/>
                </div>
            </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        
        
        </>
    )
}
export default CarrucelFragment