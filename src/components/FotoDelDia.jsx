import React, {useState} from 'react';
import {Button } from '@material-ui/core';
import axios from 'axios';
import '../styles.css';

const FotoDelDia = (props) => {
  const [foto, setFoto] = useState();

  const getAPOD = () => {
    
    const url = `https://api.nasa.gov/planetary/apod?api_key=FgbnvgHO0A6bFXY0ww73VrFLIU8VzglJU1G4BusU`;
    axios(url)
    .then(respuesta => {
        console.log("respuesta: "+respuesta.data)
        console.log("titulo: "+ respuesta.data.title)
        setFoto(respuesta.data)
    })
    .catch (error => console.log(error)) 
   
};
const estilos = {
  maxWidth: "1000px",
  maxHeight: "1000px"
}
    return (
      <div className="galeria">
          <br />

         <Button onClick={() => getAPOD() } variant="contained" color="primary"> Ver foto </Button>
          {foto &&
          
          <div >
         
          <h2>Titulo: {foto.title} </h2>
         
          <h3>Fecha: {foto.date} </h3>
          <br />
         
          <img style={estilos} src={foto.hdurl} alt="Imagen del dia"></img>
          <h6>Copyright: {foto.copyright}</h6>
          
          <p>{foto.explanation} </p>
        </div>
          
          }
      
        
        </div>
    )
  
}

export default FotoDelDia