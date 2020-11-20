import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import ContatoForm from '../../components/ContatoForm';

import './styles.css'

function Contato() {

	return (
		<>
			<Container id="contato-page" fluid={true}>
				<Row className="ml-4">
					<h1>Contato</h1>
					<Row>
						<Col xs="8">
							<p>Quer fazer doação de materiais ou ser voluntário num abrigo? Ainda tem questões
							a partilhar conosco? Manda uma mensagem para nós, que responderemos em até três dias.
							</p>
						</Col>
					</Row>
				</Row>
			</Container>
			<Container className="d-flex justify-content-end" fluid={true}>
				<Row className="w-75">
					<Col xs="11">
						<ContatoForm />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Contato;
