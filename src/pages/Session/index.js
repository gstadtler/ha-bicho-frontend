import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { login } from "../../services/auth";
import MenuNavbar from '../../components/MenuNavbar';
import { FaFacebookF } from 'react-icons/fa';

import {
	Container,
	Form,
	FormGroup,
	Input,
	Button
} from 'reactstrap';

import logotipoVerde from '../../imagens/logotipo-verde.svg';
import './styles.css';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


function Session(props) {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	//const [login, setLogin] = useState(false);
	//const [data, setData] = useState({});
	//const [picture, setPicture] = useState('');

	async function handleSignIn(e) {
		e.preventDefault();
		const userSession = { email, password };
		try {
			const response = await api.post("/sessions", userSession);
			login(response.data.token);
			props.history.push("/");
		} catch (err) {
			console.log(err);
		}
	}


	function responseFacebook(response) {
		console.log(response);
		//setData(response);
		//setPicture(response.picture.data.url);
		//if (response.accessToken) {
		//setLogin(true);
		//} else {
		//setLogin(false);
		//}
	}

	function responseGoogle(response) {
		console.log(response);
	}

	return (
		<>
			<MenuNavbar />
			<Container className="Login" fluid={true}>
				<header>
					<h1>Login</h1>
					<img src={logotipoVerde} alt="Ha-bicho" width="175" height="100" />
				</header>

				<footer>
					<Form onSubmit={handleSignIn}>
						<FormGroup className="social-login">
							<div className="login-fb">
								<FacebookLogin
									appId="398864984824000"
									fields="name,email"
									scope="public_profile,user_friends"
									callback={responseFacebook}
									icon={<FaFacebookF />}
									textButton="Entrar com Facebook"
									cssClass="facebook-button"
								/>
							</div>
							<div className="login-google">
								<GoogleLogin
									clientId="969966321777-hj4ej23le0r0gs8ga68k2l2516q88mqh.apps.googleusercontent.com"
									buttonText="Entrar com Google"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									className="google-button"
								/>
							</div>
						</FormGroup>

						<FormGroup>
							<Input
								name="email"
								value={email}
								onChange={e => setEmail(e.target.value)}
								type="email"
								placeholder="Email"
								required
							/>
						</FormGroup>

						<FormGroup>
							<Input
								name="password"
								value={password}
								onChange={e => setPassword(e.target.value)}
								type="password"
								placeholder="Senha"
								required
							/>
						</FormGroup>

						<FormGroup>
							<Button className="login-button" type="submit">Entrar</Button>
						</FormGroup>

						<FormGroup className="register-group">
							<h6>Ainda não possui cadastro?</h6>
							<Link to="/register" className="link-register">Cadastrar-se</Link>
						</FormGroup>

					</Form>
				</footer>
			</Container>
		</>
	);
}

export default Session;
