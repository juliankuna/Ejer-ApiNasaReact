import starman from '../soundtrack/starman-davidbowie.mp3';
import images from '../images/images';
import {Grid, Divider}  from '@material-ui/core';
import '../styles.css';
//import soundtrack from '../soundtrack/soundtrack'
const Home = () => {
    
    const estilos = {
        maxWidth: "200px",
        maxHeight: "200px"
    }

    return (


        <div className="Home">
            <Grid container alignItems="center" className="grilla">
                <div className="izquierda">
                    <img src={images.img2} className="nasalogo" style={estilos} />
                </div>
                
                <Divider orientation="vertical" flexItem />
                <div className="central">
                    <h2>Bienvenido a la Home!</h2>
                    <h4>Usa la botonera de la parte superior para interactuar con la API</h4>
                    <br />
                    <img src={images.img1}

                        alt="jesusbailando-gif"
                        className="jesusbailando"
                        width="546" height="378.85714285714283"

                    />
                    <br />
                    <br />


                    <audio controls autoplay>
                        <source src={starman} type="audio/mp3" />
                    </audio>
                </div>
               
                <Divider orientation="vertical" flexItem />
                    <div className="derecha">
                        <img src={images.img2} className="nasalogo" style={estilos} />
                    </div>
            </Grid>






        </div>
    )

}

export default Home
