import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import Modal from '../Modal';
import navbarLogo from '../../imagens/navbarLogo.svg'
import './styles.css';

function Navbar(props) {
	return (
		<>
			<div id="menu-navbar">
				<header>
					<Link to="/" className="link-navbar"><FaHome /></Link>
					<Link to="/quem-somos" className="link-navbar">Quem Somos</Link>
					<Link to="/abrigos" className="link-navbar">Lista de Abrigos</Link>
					<Link to="/contato" className="link-navbar">Contato</Link>
				</header>
				<img src={navbarLogo} alt="Ha-bicho" width={240} height={25} />
				<footer>
					<Link to="/faq" className="link-navbar">FAQ</Link>
					<Link to="/session" className="link-navbar">Log in</Link>
					<Modal />
					<Link to="/register" className="link-navbar register">Seja doador/a</Link>
				</footer>
			</div>
		</>
	);

}

export default Navbar;