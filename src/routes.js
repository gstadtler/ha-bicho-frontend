import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import WithNavigation from './components/WithNavigation';
import { isAuthenticated } from './services/auth';

import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Abrigos from './pages/Abrigos';
import Contato from './pages/Contato';
import Faq from './pages/Faq';
import Login from './pages/Login';
import Register from './pages/Register';
import AbrigoPerfil from './pages/AbrigoPerfil';
import UserPerfil from './pages/UserPerfil';
import Doacoes from './pages/Doacoes';
import Payments from './pages/Payments';
import Transparencia from './pages/Transparencia';
import PaymentSuccess from './pages/PaymentSuccess';


function PrivateRoute({ component: Component, ...rest }) {
	return (
		<Route
			{...rest}
			render={props =>
				isAuthenticated() ? (
					<WithNavigation>
						<Component {...props} />
					</WithNavigation>
				) : (
						<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
					)
			}
		/>
	);
};

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact render={() =>
					<WithNavigation>
						<Home />
					</WithNavigation>
				}/>
				<Route path="/sobre-nos" exact render={() => 
					<WithNavigation>
						<SobreNos />
						</WithNavigation>
				}/>
				<Route path="/abrigos" exact render={() => 
					<WithNavigation>
						<Abrigos />
					</WithNavigation>
				}/>
				<Route path="/contato" exact render={() => 
					<WithNavigation>
						<Contato />
						</WithNavigation>
				}/>
				<Route path="/faq" exact render={() => 
					<WithNavigation>
						<Faq />
					</WithNavigation>
				}/>
				<Route path="/login" exact render={props => 
					<WithNavigation>
						<Login {...props} />
					</WithNavigation>
				}/>
				<Route path="/register" exact render={props => 
					<WithNavigation>
						<Register {...props} />
					</WithNavigation>
				}/>
				<Route path="/perfil-abrigo/:abrigoId" exact render={props => 
					<WithNavigation>
						<AbrigoPerfil {...props} />
					</WithNavigation>
				}/>
				<Route path="/transparencia/abrigo-gastos" exact render={props => 
					<WithNavigation>
						<Transparencia {...props} />
					</WithNavigation>
				}/>
				
				<PrivateRoute path="/doacoes/:abrigoId/:abrigoNome" exact component={Doacoes} />
				<PrivateRoute path="/payments/:abrigoId/:abrigoNome" exact component={Payments} />
				<PrivateRoute path="/meu-perfil" exact component={UserPerfil} />
				<PrivateRoute path="/payments/success" exact component={PaymentSuccess}/>
				<Route path="*" component={() => <h1>Page not found</h1>} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
