import React  from 'react';
import Estudiante from './Estudiante';
const Estudiantes=[
    {
        "nombre": "David",
        "edad": 18,
        "genero": "M"
    },
    {
        "nombre": "Sabastian",
        "edad": 18,
        "genero": "M"
    },
    {
        "nombre": "Yurny",
        "edad": 17,
        "genero": "F"
    },
    {
        "nombre": "Julian",
        "edad": 19,
        "genero": "M"
    }
]
const Componente = () =>(
    <>
        {
            Estudiantes.map(i=> <Estudiante nombrePromp={i.nombre} edadPromp={i.edad} generoPromp={i.genero}/>)
        }
    </>
);
export default Componente;