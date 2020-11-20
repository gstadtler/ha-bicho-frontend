import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardTitle,
	CardText,
} from 'reactstrap';

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
			<h1 className="titulo-abrigos">Lista de Abrigos</h1>
			<Card style={{border: "none"}}>
				{abrigos.map(abrigo =>
					<CardBody key={abrigo.id} className="abrigo">
						<CardHeader style={{background: "none", border: "none", padding: "20px"}}>
							<CardTitle tag="h3">
								{abrigo.nome}
							</CardTitle>
							<CardText tag="h5" className="abrigo-descricao">
								{abrigo.descricao}
							</CardText>
						</CardHeader>
						<CardFooter className="bttn-conhecer">
							<Link to={`/perfil-abrigo/${abrigo.id}`} className="link-abrigo">Conhecer</Link>
						</CardFooter>
					</CardBody>
				)}
			</Card>
		</>
	);
}

export default Abrigos;
