import React, { useState } from 'react';

//import Slideshow from '../../components/Slideshow';
import NavbarHome from '../../components/NavbarHome';

import './styles.css';
import logoImg from '../../imagens/logo.svg';
import pets from '../../imagens/pets2.svg';


function Home() {
  return (
    <div id="home-page">
      <NavbarHome />
      <div className="conteudo">

        <img src={pets} alt="Ha-bicho" style={{height: 'max-content', width: '100vw'}} />
        <img src={logoImg} alt="Ha-bicho" width={500} height={125} />

        <main>
          <h1>Mediamos doações com empatia, transparência e praticidade.</h1>
        </main>
      </div>
    </div>
  );
}

export default Home;
