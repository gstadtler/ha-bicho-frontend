import React from 'react';

import Navbar from '../../components/Navbar';
import ContatoForm from '../../components/ContatoForm';

import './styles.css'

function Contato() {

	return (
		<>
			<Navbar />
			<div id="contato-page">
				<header>
					<h1>Contato</h1>
					<p>Quer fazer doação de materiais ou ser voluntário num abrigo? Ainda tem questões 
						a partilhar conosco? Manda uma mensagem para nós, que responderemos em até três dias.
					</p>
				</header>
				<footer>
					<ContatoForm />
				</footer>
			</div>
		</>
	);
}

export default Contato;