import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import pets3 from '../../imagens/pets3.svg';
import SlideShow from '../../components/Slideshow';

import {
	Card, Button, CardImg, CardTitle, CardText, CardColumns,
	CardSubtitle, CardBody
} from 'reactstrap';

import './styles.css';


function AbrigoPerfil(props) {

	const [abrigo, setAbrigo] = useState('');

	const abrigoProfile = props.abrigo;

	useEffect(() => {
		let mounted = true;
		async function loadAbrigo() {
			if (mounted) {
				try {
					if (abrigoProfile) {
						setAbrigo(abrigoProfile);
					} else {
						const abrigoId = props.match.params.abrigoId;
						const response = await api.get(`/abrigos/${abrigoId}`)
						setAbrigo(response.data);
					}
				} catch (err) {
					console.log(err);
				}
			};
		}
		loadAbrigo();
		return mounted = false;
	}, []);


	return (
		<>
			<CardColumns className="abrigo-perfil">
				<Card>
					<CardImg top width="100%" src={pets3} alt="Card image cap" />
					<CardBody>
						<CardTitle tag="h3" style={{color: "#333366"}}>{abrigo.nome}</CardTitle>
						<CardSubtitle tag="h6" className="mb-2 text-muted">Abrigo</CardSubtitle>
						<CardText>{abrigo.descricao}</CardText>
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<CardTitle tag="h5" style={{color: "#333366"}}>Lista de Necessidades</CardTitle>
						<CardSubtitle 
							tag="h6" 
							className="mb-2 text-muted"
						>
							Em breve você também poderá doar materiais!
						</CardSubtitle>
						{/*<Button color="info" style={{display: "contents"}} className="text-muted">
							<Link
								to={`/doacoes/${abrigo.id}/${abrigo.nome}`}
								className="link-doacao">Em breve</Link>
						</Button>*/}
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<SlideShow />
					</CardBody>
					<CardBody>
						<CardTitle tag="h4" style={{color: "#333366"}}>Ha-bichinhos do abrigo</CardTitle>
						<CardText>Acompanhe a situação dos nossos hóspedes animais</CardText>
					</CardBody>
				</Card>

				<Card body inverse color="info" className="d-flex">
					<CardTitle tag="h3">Doações</CardTitle>
					<CardText>Doações recebidas até agora: R$ 0,00</CardText>
					<CardText>Nos ajude a manter nossos amiguinhos felizes e saudáveis!</CardText>
					<Button color="success">
						<Link
							to={`/doacoes/${abrigo.id}/${abrigo.nome}`}
							className="link-doacao"
						>
							Doar
						</Link>
					</Button>
				</Card>
				
				<Card body inverse style={{ backgroundColor: '#669999' }}>
					<CardTitle tag="h4">Prestação de contas</CardTitle>
					<CardSubtitle tag="h6" className="mb-2">Veja como sua ajuda é de grande valor</CardSubtitle>
					<CardText></CardText>
					<Button style={{ backgroundColor: '#333366' }}>
						<Link to={`/transparencia/${abrigo.nome}/gastos`} className="link-doacao">
							Ver gastos
						</Link>
					</Button>
				</Card>
			</CardColumns>
		</>
	);
}

export default AbrigoPerfil;
