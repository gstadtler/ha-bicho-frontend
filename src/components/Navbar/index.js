import React from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';

import './styles.css';

function Navbar(props) {
 return (
	 <>
		 <div id="menu-navbar">
        <header>
          <Link to="" className="link-navbar">Quem Somos</Link>
          <Link to="/abrigos" className="link-navbar">Lista de Abrigos</Link>
          <Link to="" className="link-navbar">Contato</Link>
        </header>
        <footer>
          <Link to="" className="link-navbar">FAQ</Link>
          <Link to="" className="link-navbar">Log in</Link>
          <Modal />
          <Link to="" className="link-navbar register">Faça parte</Link>
        </footer>
      </div>
	 </>
 );   

}

export default Navbar;