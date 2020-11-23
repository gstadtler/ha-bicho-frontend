import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import './styles.css';

import { removeCurrentUser, removeUserRole, logout } from '../../services/auth';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	Button
} from 'reactstrap';

function UserNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  function handleLogout() {
    removeCurrentUser();
    removeUserRole();
    logout();
  }

  return (
    <>
      <Navbar light expand="md" className="user-navbar">
        <NavbarBrand>
          <Link to="/">
            <FaHome />
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>

            <NavItem className="mr-3 ml-3">
              <Link to="/sobre-nos" className="link-navbar">Sobre nós</Link>
            </NavItem>

            <NavItem className="mr-3 ml-3">
              <Link to="/abrigos" className="link-navbar">Lista de Abrigos</Link>
            </NavItem>

            <NavItem className="mr-3 ml-3">
              <Link to="/contato" className="link-navbar">Contato</Link>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar>
            <NavItem className="mr-2 ml-2">
              <Link to="/faq" className="link-navbar">FAQ</Link>
            </NavItem>

            <NavItem className="mr-2 ml-2">
              <Link to="/meu-perfil" className="link-navbar">Meu Perfil</Link>
            </NavItem>

            <NavItem className="mr-2 ml-2">
              <Button onClick={handleLogout} className="logout-btn">Log out</Button>
            </NavItem>

          </Nav>

        </Collapse>
      </Navbar>
    </>
  );
}

export default UserNavbar;
