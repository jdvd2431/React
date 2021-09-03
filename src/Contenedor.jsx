import React  from 'react';
import Estudiante from './Personaje';

const Personajes=[
    {
        "nombre": "Goku",
        "edad": 43,
        "genero": "M",
        "foto" :"https://inceptum-stor.icons8.com/cKcJMNfTbtW0/46624698b08187a2366625059a882fa6.png"
    },
    {
        "nombre": "Vegueta",
        "edad": 44,
        "genero": "M",
        "foto" :"https://i.pinimg.com/236x/15/06/a8/1506a8b291e5fe6329789e44316b4f89.jpg"
    },
    {
        "nombre": "Piccolo",
        "edad": 37,
        "genero": "M",
        "foto" :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7QIu-OLRQiBPNMUzSjEgNqcFSRftZY3ETPQ&usqp=CAU"
    },
    {
        "nombre": "Gohan",
        "edad": 23,
        "genero": "M",
        "foto" :"https://i.pinimg.com/736x/a9/62/37/a96237771a0f2e0880a3dacdfc34029e.jpg"
    }
    
]
const Componente = () =>(
    <>
        {
            Personajes.map(i=> <Estudiante nombrePromp={i.nombre} edadPromp={i.edad} generoPromp={i.genero} foto={i.foto}/>)
        }
    </>
);

export default Componente;