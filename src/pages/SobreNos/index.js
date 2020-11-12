import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import MenuNavbar from '../../components/MenuNavbar';

import logotipoVerde from '../../imagens/logotipo-verde.svg';
import './styles.css';

function SobreNos() {
	return (
		<>
			<MenuNavbar />
			<div id="sobre-nos">
				<h1>Sobre Nós</h1>
				<Container className="w-50 h-auto sb-nos">
					<Row className="p-3">
						<Col lg="12">
							<p>
								Somos uma plataforma existente com o intuito de dar visibilidade
								para abrigos de animais e trazer para eles mais doações.
								Pretendemos também promover a interação entre doadores e abrigos de animais,
								além de contribuir para a praticidade e a transparência de informações e trocas financeiras.
								Logo, buscamos com essa plataforma a maior comodidade para você, doador, e para a causa social.
							</p>
						</Col>
						<Col lg="12">
							<p>
								Contamos com uma lista de perfis cadastrados onde você pode encontrar as necessidades emergenciais
								dos locais de acolhimento e quais estão mais próximos de você.
								Também oferecemos benefícios para os cadastrados em nosso site,
								desde de descontos com as empresas parceiras até o monitoramento de como o seu dinheiro vem sendo usado.
							</p>
						</Col>
						<Col lg="12">
							<p>
								Fazemos parte de um projeto criado por estudantes que visam ajudar a causa animal
								e trazer uma recompensa social. Para mais informações, entre em Contato.
							</p>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}

export default SobreNos;
