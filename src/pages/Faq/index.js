import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Faq(props) {
	return (
		<>
			<div id="Faq-page">
				<h1>FAQ</h1>
				<div className="faq-content">
					<div>
						<h3>Como a iniciativa surgiu?</h3>
						<p>
							Através de pesquisas relacionadas à área de animais abandonados, 
							reconhecemos a maior dificuldade para mantê-los: a falta de doações. 
							Assim, analisamos como seria possível aumentar essa receita e expandir 
							a arrecadação para outros públicos, e vimos que uma excelente forma seria através 
							de uma plataforma voltada ao desenvolvimento da empatia 
							e entrega de praticidade e transparência. 
						</p>
					</div>
					<div>
						<h3>Como faço para doar?</h3>
						<p>
							Você precisa estar cadastrado no nosso site! Clicando <Link to="/register"> aqui </Link>
							 você vai para a página de cadastro, preenche com suas informações 
							de forma prática e rápida. Logo após, você poderá escolher 
							o abrigo para o qual deseja realizar a sua doação.
							<Link to="/abrigos"> Nesta página</Link> você encontra uma lista de abrigos. 
							Clicando em "conhecer" algum deles, você é redirecionado para o perfil deste abrigo,
							onde você pode econtrar mais informações sobre o mesmo. Após
							escolher, basta seguir as etapas para concluir o pagamento.
						</p>
					</div>
					<div>
						<h3>Quais são os benefícios que posso receber?</h3>
						<p>
							Você pode optar por receber informações, vídeos, 
							fotos do local para o qual doou. 
						</p>
					</div>
					<div>
						<h3>Onde vejo as informações dos abrigos disponíveis?</h3>
						<p>
							Você pode encontrá-las selecionando algum abrigo 
							no mapa interativo em nossa <Link to="/">página inicial </Link> 
							ou na <Link to="/abrigos">lista de abrigos</Link>. 
							Lá, estão disponíveis a história do local, 
							dados para contato, planilhas de gastos (mostrando para onde vai sua doação), 
							as formas de contribuir e registros do cotidiano do abrigo. 
						</p>
					</div>
					<div>
						<h3>Por que devo doar? </h3>
						<p>
							Além de ajudar um animalzinho, projetos sociais são importantes para 
							o desenvolvimento de uma realidade. E todos eles possuem missões 
							que só podem ser realizadas com recursos. 
							Os benefícios de conviver com animais são descritos por diversas 
							pesquisas científicas. No entanto, nem todos podem se dar a esse luxo. 
							Se você é um desses, ajudar abrigos é uma forma de se relacionar sem tantos obstáculos. 
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Faq;
