import React, { Fragment } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import Noticia  from './components/Noticia';


function App() {
  return (
    <Fragment>
    
      <Header titulo='Buscador de Noticias'/>

      <div className="container white">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
