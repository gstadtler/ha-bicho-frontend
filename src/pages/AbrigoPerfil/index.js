import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

function AbrigoPerfil(props) {

	const [abrigo, setAbrigo] = useState([]);

	const currentUser = props.currentUser;


	useEffect(() => {
		async function loadAbrigo() {
			try {
				if(currentUser) {
					const response = await api.get(`/abrigos/${currentUser.id}`)
					setAbrigo(response.data);
				} else {
					const abrigoId = props.match.params.abrigoId;
					const response = await api.get(`/abrigos/${abrigoId}`)
					setAbrigo(response.data);
				}
			} catch (err) {
				console.log(err);
			}
		};
		loadAbrigo();
	}, []);

	return (
		<>
			<div className="abrigo-background">
				<div id="Abrigo-perfil">
					<h1>{abrigo.nome}</h1>
					<header>
						<p>{abrigo.descricao}</p>
					</header>
					<footer>
						<button>Prestação de contas</button>
						<button><Link to="/doacoes">Doar</Link></button>	
					</footer>
				</div>
			</div>
		</>
	);
}

export default AbrigoPerfil;
