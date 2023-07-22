import React from "react";
import style from '../../styles.module.css'

const AcordionFragment = ({imagen,titulo,descripcion}) => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-4">
                        <img src={imagen} alt="nosotros" className={style.imgNosotros}/>

                    </div>
                    <div className="col-sm-12 col-md-8">
                        <div className= {`accordion accordion-flush ${style.accordion}`} id="accordionFlushExample">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <h1>{titulo}</h1>
                                </button>
                              </h2>
                              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">{descripcion}
                                </div>
                              </div>
                            </div>
                          </div>
                    </div>


                </div>

            </div>

        
        </>
    )
}
export default AcordionFragment