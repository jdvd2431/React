import React from 'react';
import PropTypes from 'prop-types';

    const Prueba =({nombrePromp,edadPromp,generoPromp}) =>(
        <>
       <div className="card d-flex justify-Content-center mt-5 m-auto" style={{ width: '250px'}}>
                <div className="card-body">
                    <h5 className="card-title">{nombrePromp}</h5>
                    <p className="card-text">{edadPromp}</p>
                    <p className="card-text">{generoPromp}</p>
                </div>
    </div>
    </>
);
Prueba.propTypes ={
    nombrePromp: PropTypes.string,
    edadPromp: PropTypes.number,
    generoPromp: PropTypes.string
}
Prueba.defaultProps= {
    nombrePromp: "Nombre no asignado",
    edadPromp: 0,
    generoPromp: "Genero no asignado"
}
export default Prueba;