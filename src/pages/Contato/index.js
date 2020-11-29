import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';

import ContatoForm from '../../components/ContatoForm';

import './styles.css'

function Contato(props) {

	return (
		<>
			<Container className="contato-page" fluid={true}>
				<Row className="ml-4">
					<h1>Contato</h1>
					<Row className="w-100">
						<Col xs="8">
							<p>Quer fazer doação de materiais ou ser voluntário num abrigo? Ainda tem questões
								a partilhar conosco? Manda uma mensagem para nós!"
							</p>
						</Col>
					</Row>
				</Row>
			</Container>
			<Container className="d-flex justify-content-end">
				<Row className="w-100">
					<Col>
						<Card style={{border: "none"}}>
							<ContatoForm />
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Contato;
