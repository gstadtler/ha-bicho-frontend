import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import Home from './pages/Home';
import Abrigos from './pages/Abrigos';
import Register from './pages/Register';
import SobreNos from './pages/SobreNos';
import Contato from './pages/Contato';
import AbrigoPerfil from './pages/AbrigoPerfil';
import Faq from './pages/Faq';
import Doacoes from './pages/Doacoes';
import Login from './pages/Login';


function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated() ? (
					<Component {...props} />
				) : (
						<Redirect to={{ pathname: "/", state: { from: props.location } }} />
					)
			}
		/>
	);
};

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/abrigos" component={Abrigos} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/sobre-nos" component={SobreNos} />
				<Route path="/contato" component={Contato} />
				<Route path="/perfil-abrigo/:abrigoId" component={AbrigoPerfil} />
				<Route path="/faq" component={Faq} />
				<Route path="/doacoes" component={Doacoes} />
				<Route path="*" component={() => <h1>Page not found</h1>} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
