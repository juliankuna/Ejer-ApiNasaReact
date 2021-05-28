import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import '../styles.css';


const FotosRandoms = () => {
    const [fotos, setFotos] = useState();
    const [cantidad, setCantidad] = useState();

    const getFotosRandoms = () => {
        if (cantidad == "" || cantidad == 0 || cantidad<0 || cantidad>10) {
            alert("No sea nabo, debe ingresar un numero entre 1 y 10 inclusive para obtener fotos")
        } else {
            const url = `https://api.nasa.gov/planetary/apod?api_key=FgbnvgHO0A6bFXY0ww73VrFLIU8VzglJU1G4BusU&count=${cantidad}`;
            axios(url)
                .then(respuesta => {
                    console.log("respuesta: " + respuesta.data)
                    setFotos(respuesta.data);
                })

                .catch(error => console.log(error))
        }
    };

/* YA NO SE OCUPA PORQUE SE HACEEL setCantidad directamente desde el onChange del TextField
    const cambiosEnElTexto = (texto) => {
        console.log("Se cambio el texto a: "+texto)
        setCantidad(texto)

    }
*/
    const estilos = {
        maxWidth: "500px",
        maxHeight: "500px"
    }

    return (
        <div className="galeria">
            <TextField type="number" id="outlined-basic" label="Cantidad de fotos a buscar" size="small" variant="outlined" onChange={(e) => setCantidad(e.target.value)} />
            <br />


            <Button onClick={() => getFotosRandoms()} variant="contained" color="primary">Ver Fotos</Button>

            {fotos &&
                <div >
                    {
                        fotos.map((foto, index) => {
                            console.log("foto actual: " + foto)
                            return (
                                <div>
                                    <h3>N°: {index + 1}</h3>
                                    <h2>Titulo: {foto.title} </h2>

                                    <h3>Fecha: {foto.date} </h3>
                                    <br />

                                    <img style={estilos} src={foto.hdurl} ></img>
                                    <h6>Copyright: {foto.copyright}</h6>

                                    <p>{foto.explanation} </p>
                                </div>

                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default FotosRandoms