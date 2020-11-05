import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../../components/Navbar';

import './styles.css';
import api from '../../services/api';

function Abrigos() {

	const [abrigos, setAbrigos] = useState([]);

	useEffect(() => {
		let mounted = true;
		async function ListaAbrigos() {
			try {
				const response = await api.get("/abrigos");
				if (mounted) {
					setAbrigos(response.data);
				}
			} catch (err) {
				console.log(err);
			};
		};
		ListaAbrigos();
		return () => mounted = false;
	}, []);

	return (
		<>
			<Navbar />
			<h1 className="titulo-abrigos">Lista de Abrigos</h1>
			<div id="Abrigos-lista">
				{abrigos.map(abrigo =>
					<div key={abrigo.id} className="abrigo">
						<div className="abrigo-content">
							<h3>{abrigo.nome}</h3>
							<p>{abrigo.descricao}</p>
						</div>
						<div className="bttn-visitar">
							<Link to={`/perfil-abrigo/${abrigo.id}`} className="link-abrigo">Conhecer</Link>
						</div>
					</div>
				)}
			</div>
		</>
	);
}

export default Abrigos;