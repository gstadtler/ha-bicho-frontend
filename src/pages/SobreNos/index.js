import React from 'react';
import { Container, Row, Col, Card, CardBody, CardText } from 'reactstrap';

import './styles.css';

function SobreNos(props) {
	return (
		<>
			<Container className="sobre-nos" fluid={true}>
				<h1 className="sobre-nos-title">Sobre Nós</h1>
				<Row>
					<Col lg="7" md="9" className="d-flex m-auto">
						<Container className="d-flex justify-content-center sb-nos" fluid={true}>
							<Row className="p-3">
								<Col>
									<Card style={{border: "none"}}>
										<CardBody style={{background: "#bdd3d3"}}>
											<CardText className="sb-nos-text">
												Somos uma plataforma existente com o intuito de dar visibilidade
												para abrigos de animais e trazer para eles mais doações.
												Pretendemos também promover a interação entre doadores e abrigos de animais,
												além de contribuir para a praticidade e a transparência de informações e trocas financeiras.
												Logo, buscamos com essa plataforma a maior comodidade para você, doador, e para a causa social.
										</CardText>
											<CardText className="sb-nos-text">
												Contamos com uma lista de perfis cadastrados onde você pode encontrar as necessidades emergenciais
												dos locais de acolhimento e quais estão mais próximos de você.
												Também oferecemos benefícios para os cadastrados em nosso site,
												desde de descontos com as empresas parceiras até o monitoramento de como o seu dinheiro vem sendo usado.
										</CardText>
											<CardText className="sb-nos-text">
												Fazemos parte de um projeto criado por estudantes que visam ajudar a causa animal
												e trazer uma recompensa social. Para mais informações, entre em Contato.
										</CardText>
										</CardBody>
									</Card>
								</Col>
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default SobreNos;
