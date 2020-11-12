import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import Modal from '../Modal';
import './styles.css';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from 'reactstrap';


function NavbarResponsive(props) {

	const [isOpen, setIsOpen] = useState(false);

	function toggle() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<Navbar light expand="md">
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>

					<Nav className="mr-auto" navbar>

						<NavItem>
							<Link to="/">
								<FaHome />
							</Link>
						</NavItem>

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
							<Link to="/session" className="link-navbar">Log in</Link>
						</NavItem>

						<NavItem className="mr-2 ml-2">
							<Modal />
						</NavItem>

						<NavItem className="ml-2">
							<Link to="/register" className="link-navbar register">Seja doador/a</Link>
						</NavItem>

					</Nav>

				</Collapse>
			</Navbar>
		</>
	);
}

export default NavbarResponsive;