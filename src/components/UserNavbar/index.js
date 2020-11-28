import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import api from '../../services/api';
import { FaHome } from 'react-icons/fa'
import './styles.css';

import { logout } from '../../services/auth';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Button
} from 'reactstrap';

function UserNavbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  function toggle() {
    setIsOpen(!isOpen);
  }

  useEffect(()=> {
    async function getCurrentUserEmail() {
      try {
        const response = await api.get("/show")
        const { email } = response.data;
        setEmail(email);
      } catch (error) {
        console.log(error);
      }
    }
    getCurrentUserEmail()
  },[])

  function handleLogout() {
    logout();
    props.history.push("/");
  }

  return (
    <>
      <Navbar light expand="md" className="user-navbar">

        <Link to="/" className="navbar-brand">
          <FaHome style={{ color: "#333366" }} />
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>

          <Nav navbar>

            <NavItem className="mx-2">
              <NavLink
                to="/sobre-nos"
                activeStyle={{ background: "#669999", color: "#fff" }}
                className="link-navbar"
              >
                Sobre nós
							</NavLink>
            </NavItem>

            <NavItem className="mx-2">
              <NavLink
                to="/abrigos"
                activeStyle={{ background: "#669999", color: "#fff" }}
                className="link-navbar"
              >
                Lista de Abrigos
							</NavLink>
            </NavItem>

            <NavItem className="mx-2">
              <NavLink
                to="/contato"
                activeStyle={{ background: "#669999", color: "#fff" }}
                className="link-navbar"
              >
                Contato
							</NavLink>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar>

            <NavItem className="mx-2">
              <NavLink
                to="/faq"
                activeStyle={{ background: "#669999", color: "#fff" }}
                className="link-navbar"
              >
                FAQ
							</NavLink>
            </NavItem>

            <NavItem className="mx-2">
              <NavLink
                to={`/meu-perfil/${email}`}
                activeStyle={{ background: "#669999", color: "#fff" }}
                className="link-navbar"
              >
                Meu Perfil
							</NavLink>
            </NavItem>

            <NavItem className="ml-2">
              <Button onClick={handleLogout} className="logout-btn">Log out</Button>
            </NavItem>

          </Nav>

        </Collapse>
      </Navbar>
    </>
  );
}

export default UserNavbar;
