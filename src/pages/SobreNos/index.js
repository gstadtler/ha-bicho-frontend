import React from 'react';

import Navbar from '../../components/Navbar';

import logotipoVerde from '../../imagens/logotipo-verde.svg';
import './styles.css';

function SobreNos() {
	return (
		<>
			<Navbar />
			<div id="sobre-nos">
				<h1>Sobre Nós</h1>
				<div className="sobre-nos-content">
					<p>
						Somos uma plataforma existente com o intuito de dar visibilidade
						para abrigos de animais e trazer para eles mais doações.
						Pretendemos também promover a interação entre doadores e abrigos de animais,
						além de contribuir para a praticidade e a transparência de informações e trocas financeiras.
						Logo, buscamos com essa plataforma a maior comodidade para você, doador, e para a causa social.
					</p>
					<p>
						Contamos com uma lista de perfis cadastrados onde você pode encontrar as necessidades emergenciais
						dos locais de acolhimento e quais estão mais próximos de você.
						Também oferecemos benefícios para os cadastrados em nosso site,
						desde de descontos com as empresas parceiras até o monitoramento de como o seu dinheiro vem sendo usado.
					</p>
					<p>
						Fazemos parte de um projeto criado por estudantes que visam ajudar a causa animal
						e trazer uma recompensa social. Para mais informações, entre em Contato.
					</p>
				</div>
			</div>
		</>
	);
}

export default SobreNos;
