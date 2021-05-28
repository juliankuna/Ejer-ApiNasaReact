import axios from 'axios';
export const getAPOD = async () => {
    
        const url = `https://api.nasa.gov/planetary/apod?api_key=FgbnvgHO0A6bFXY0ww73VrFLIU8VzglJU1G4BusU`;
        axios(url)
        .then(respuesta => {
            console.log("respuesta: "+respuesta.data)
            console.log("titulo: "+ respuesta.data.title)
            
        })
        .catch (error => console.log(error)) 

       
};