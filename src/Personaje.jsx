import React  from 'react';
import PropTypes from 'prop-types';
const Personaje = ({nombrePromp,edadPromp,generoPromp,foto}) =>(
    <>
       <div className="card d-flex justify-Content-center mt-5 m-auto text-primary" style={{ width: '250px'}}>
                <div className="card-body">
                    <h5 className="card-title text-center">{nombrePromp}</h5>
                    <p className="card-text text-center">{edadPromp}</p>
                    <p className="card-text text-center">{generoPromp}</p>
                    <img src={foto} alt={foto} style={{ width: '150px', marginLeft:'30px'}} />

                </div>
    </div>
    </>
);

Personaje.propTypes ={
    nombrePromp: PropTypes.string,
    edadPromp: PropTypes.number,
    generoPromp: PropTypes.string,
    foto: PropTypes.string
}
Personaje.defaultProps= {
    nombrePromp: "Nombre no asignado",
    edadPromp: 0,
    generoPromp: "Genero no asignado",
    foto: "Foto no encontrada"
}
export default Personaje;