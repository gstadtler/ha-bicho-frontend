import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Abrigos from './pages/Abrigos';
import Register from './pages/Register';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/abrigos" component={Abrigos} />
				<Route path="/register" component={Register} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;