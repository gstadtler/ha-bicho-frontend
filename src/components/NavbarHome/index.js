import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import Modal from '../Modal';

import './styles.css';

function NavbarHome(props) {
  return (
    <>
      <div id="menu-navbar">
        <header>
          <Link to="/" className="link-navbar"><FaHome /></Link>
          <Link to="/quem-somos" className="link-navbar">Quem Somos</Link>
          <Link to="/abrigos" className="link-navbar">Lista de Abrigos</Link>
          <Link to="/contato" className="link-navbar">Contato</Link>
        </header>
        <footer>
          <Link to="/faq" className="link-navbar">FAQ</Link>
          <Link to="/session" className="link-navbar">Log in</Link>
          <Modal />
          <Link to="/register" className="link-navbar register">Faça parte</Link>
        </footer>
      </div>
    </>
  );

}

export default NavbarHome;