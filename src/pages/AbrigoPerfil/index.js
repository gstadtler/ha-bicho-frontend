import React, { useState, useEffect } from 'react';

import Navbar from '../../components/Navbar';
import api from '../../services/api';

import './styles.css';

function AbrigoPerfil(props) {

	const [abrigo, setAbrigo] = useState([]);

	const abrigoId = props.match.params.abrigoId;

	useEffect(() => {
		async function loadAbrigo() {
			try {
				const response = await api.get(`/abrigos/${abrigoId}`)
				setAbrigo(response.data);
			} catch (err) {
				console.log(err);
			}
		};
		loadAbrigo();
	}, [abrigoId]);

	return (
		<>
			<Navbar />
			<div className="abrigo-background">
				<div id="Abrigo-perfil">
					<h1>{abrigo.nome}</h1>
					<header>
						<p>{abrigo.descricao}</p>
					</header>
					<footer>
						<button>Prestação de contas</button>
						<button>Doar</button>	
					</footer>
				</div>
			</div>
		</>
	);
}

export default AbrigoPerfil;