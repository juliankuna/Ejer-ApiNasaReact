import React, { useState, useEffect } from 'react';
import './styles.css';
import { Container, Button, ButtonGroup } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FotoDelDia from './components/FotoDelDia';
import FotosRandoms from './components/FotosRandoms';
import Home from './components/Home';
import axios from 'axios';
function App() {



  return (
    <div>
      <Container className="container">

        <Router>
          <div className="botonera">
            <ButtonGroup  variant="contained" color="primary" aria-label="contained primary button group">
              <Button component={Link} to="/" >Home</Button>
              <Button component={Link} to="/FotoDelDia"  >Foto del dia</Button>
              <Button component={Link} to="/FotosRandoms" >Fotos Randoms</Button>
            </ButtonGroup>
          </div>
        

          {/* Creo botones de material-ui que redireccionan a las partes de la web que deseo ir*/}



          <Switch>
            <Route path="/" exact>
              <hr></hr>
              <h3>Componente /Home</h3>
              <Home/>

            </Route>
            <Route path="/FotoDelDia" >
              <hr></hr>
              <h3>Componente /FotoDelDia</h3>

              {/*title={foto.title} date={foto.date} hdurl={foto.hdurl} copyright={foto.copyright} explanation={foto.explanation}*/}
              <FotoDelDia />
            </Route>
            <Route path="/FotosRandoms" >
              <hr></hr>
              <h3>Componente /FotosRandoms</h3>
              <FotosRandoms />
            </Route>
          
          </Switch>
        </Router>
        <br />
        <br />
        <hr></hr>
      </Container>
    </div>

  );

}

export default App;
