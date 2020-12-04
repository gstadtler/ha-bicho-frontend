import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import api from '../../services/api';
import SlideShow from '../../components/Slideshow';
import ModalEditAbrigoInfo from '../../components/ModalEditAbrigoInfo';
import ModalEditAbrigoImages from '../../components/ModalEditAbrigoImages';
//import ModalEditAbrigoNeeds from '../../components/ModalEditAbrigoNeeds';
import {
	Card, Button, CardImg, CardTitle, CardText, CardColumns,
	CardSubtitle, CardBody
} from 'reactstrap';
import NumberFormat from 'react-number-format';
import './styles.css';
import pets3 from '../../imagens/pets3.svg';
import sadPug from '../../imagens/sad_pug.svg';


function AbrigoPerfil(props) {

	const [abrigo, setAbrigo] = useState('');
	const [abrigoUpdated, setAbrigoUpdated] = useState(true);
	//console.log('no perfil', abrigo.images);

	const email = props.email;
	const location = useLocation();
	const curl = location.pathname;

	// Carrega dados do abrigo
	useEffect(() => {
		async function loadAbrigo() {
			try {
				if (curl === `/meu-perfil/${email}`) {
					const response = await api.get(`/find/${email}`);
					setAbrigo(response.data);
				} else {
					const abrigoId = props.match.params.abrigoId;
					const response = await api.get(`/abrigos/${abrigoId}`)
					setAbrigo(response.data);
				}
			} catch (err) {
				console.log(err);
			}
		}
		loadAbrigo();
	}, [abrigoUpdated]);

	function theresImages() {
		if (abrigo.images) {
			if (abrigo.images.length === 0) {
				return false;
			} else {
				return true
			}
		} else {
			return false;
		}
	}

	function sumDonations() {
		if (abrigo.donations) {
			return abrigo.donations.map(donate => donate.quantia).reduce(
				(a, b) => (parseFloat(a) + parseFloat(b)).toFixed(2), 0);
		} else {
			return 0;
		}
	}

	function handleUpdatedAbrigo() {
		setAbrigoUpdated(!abrigoUpdated);
	}

	async function applyInfoEdition(editedAbrigo, setModal) {
		console.log('aplicando edição');
		try {
			const response = await api.put(`/abrigos/${abrigo.id}`, editedAbrigo);
			console.log(response);
			handleUpdatedAbrigo();
		} catch (error) {
			console.log(error);
		}
		setModal();
	};

	function isMeuPerfil() {
		if (curl === `/meu-perfil/${email}`) {
			return true;
		} else {
			return false;
		}
	}

	return (
		<>
			<CardColumns className="abrigo-perfil">
				<Card>
					<CardImg top width="100%" src={pets3} alt="Card image cap" />
					<CardBody>
						<CardTitle tag="h3" style={{ color: "#333366" }}>{abrigo.nome}</CardTitle>
						<CardSubtitle 
							tag="h6" 
							className="mb-2 text-muted"
						>
							Abrigamos: {abrigo.qtd_animais} animais
						</CardSubtitle>
						<CardText>{abrigo.descricao}</CardText>
						{isMeuPerfil() && <ModalEditAbrigoInfo abrigo={abrigo} apply={applyInfoEdition} />}
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						<CardTitle tag="h5" style={{ color: "#333366" }}>Lista de Necessidades</CardTitle>
						<CardSubtitle
							tag="h6"
							className="mb-2 text-muted"
						>
							Em breve você também poderá doar materiais!
						</CardSubtitle>
						{/*isMeuPerfil() && <ModalEditAbrigoNeeds abrigo={abrigo} />*/}

						{/*<Button color="info" style={{display: "contents"}} className="text-muted">
								<Link
									to={`/doacoes/${abrigo.id}/${abrigo.nome}`}
									className="link-doacao">Em breve</Link>
							</Button>*/}
					</CardBody>
				</Card>
				<Card>
					<CardBody>
						{theresImages() ? (
							<SlideShow pictures={abrigo.images} />
						) : (
							<div>
								<img src={sadPug} alt="Ha-bichinho triste" width="100%" height="400px" />
								<CardText>{abrigo.nome} ainda não inseriu nenhuma imagem</CardText>
							</div>
						)}
					</CardBody>
					<CardBody>
						<CardTitle tag="h4" style={{ color: "#333366" }}>Ha-bichinhos do abrigo</CardTitle>
						<CardText>Acompanhe a situação dos nossos hóspedes animais</CardText>
						{isMeuPerfil() && <ModalEditAbrigoImages abrigo={abrigo} apply={handleUpdatedAbrigo} />}
					</CardBody>
				</Card>

				<Card body inverse color="info" className="d-flex">
					<CardTitle tag="h3">Doações</CardTitle>
					<CardText>Doações recebidas até agora:
						<NumberFormat
							value={sumDonations()}
							displayType={'text'}
							thousandSeparator={true}
							prefix={'R$'}
							className="donations"
						/>
					</CardText>
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
