import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
import Noticia  from './components/Noticia';


function App() {

  //Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState(''); 
  const [noticias, guardarNoticias] = useState([]); 

  useEffect(() => {
    const consultarAPI = async() => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=8af1318a5a8f46f1855fb02cebc80cc7`;

      const respuesta = await fetch(url);
      const noticia = await respuesta.json();
      guardarNoticias(noticia.articles);
    }

    consultarAPI();

  }, [categoria])
  return (
    <Fragment>
    
      <Header titulo='Buscador de Noticias'/>

      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias 
          noticias={noticias}
        />

      </div>
    </Fragment>
  );
}

export default App;
