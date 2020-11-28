import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
import ModalComponent from '../ModalComponent';
import AbrigoForm from '../AbrigoForm';
import './styles.css';

import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	Button
} from 'reactstrap';


function HomeNavbar() {

	const [isOpen, setIsOpen] = useState(false);

	function toggle() {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<Navbar light expand="md" className="menu-navbar">

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
								to="/login"
								activeStyle={{ background: "#669999", color: "#fff" }}
								className="link-navbar"
							>
								Log in
							</NavLink>
						</NavItem>

						<NavItem className="mx-2">
							<ModalComponent btnOpenModalName="Cadastre seu abrigo" btnColor="#669999">
								<AbrigoForm />
							</ModalComponent>
						</NavItem>

						<NavItem className="ml-2">
							<Button className="register">
								<Link to="/register" className="register link-register">Seja doador/a</Link>
							</Button>
						</NavItem>

					</Nav>
				</Collapse>
			</Navbar>
		</>
	);
}

export default HomeNavbar;
