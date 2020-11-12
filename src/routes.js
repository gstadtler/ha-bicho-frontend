import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Abrigos from './pages/Abrigos';
import Register from './pages/Register';
import SobreNos from './pages/SobreNos';
import Contato from './pages/Contato';
import AbrigoPerfil from './pages/AbrigoPerfil';
import Faq from './pages/Faq';
import Session from './pages/Session';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/abrigos" component={Abrigos} />
				<Route path="/register" component={Register} />
				<Route path="/session" component={Session} />
				<Route path="/sobre-nos" component={SobreNos} />
				<Route path="/contato" component={Contato} />
				<Route path="/perfil-abrigo/:abrigoId" component={AbrigoPerfil} />
				<Route path="/faq" component={Faq} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;