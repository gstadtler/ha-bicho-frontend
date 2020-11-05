import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Abrigos from './pages/Abrigos';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/abrigos" component={Abrigos} />
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;