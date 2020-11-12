import React, { useState } from 'react';
import MenuNavbar from '../../components/MenuNavbar';
import { FaFacebook, FaEye } from 'react-icons/fa';

import {
	Container,
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap';

import logotipoVerde from '../../imagens/logotipo-verde.svg';
import './styles.css';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

function Register() {

	//const [login, setLogin] = useState(false);
	//const [data, setData] = useState({});
	//const [picture, setPicture] = useState('');

	function handleSubmit() {

	}


	function togglePassword() {
		const inputPassword = document.getElementById("password-input");
		if (inputPassword.type === "password") {
			inputPassword.type = "text";
		} else {
			inputPassword.type = "password";
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
			<Container id="Register" fluid={true}>
				<header>
					<h1>Cadastro</h1>
					<img src={logotipoVerde} alt="Ha-bicho" width="175" height="100" />
				</header>

				<footer>
					<Form onSubmit={handleSubmit}>
						<FormGroup>
							<Input name="username" placeholder="Nome de usuário" required />
						</FormGroup>

						<FormGroup>
							<Input name="email" placeholder="Email" type="email" required />
						</FormGroup>

						<FormGroup>
							<Input name="password" id="password-input" placeholder="Senha" type="password" required />
						</FormGroup>

						<FormGroup style={{display: "flex"}}>
							<Label className="ml-4 termos-label">Concordo com os termos e condições</Label>
							<Input type="checkbox" className="termos" />
						</FormGroup>

						<Button className="register-button" type="submit">Cadastrar</Button>

						<FormGroup className="social-login">
							<div className="login-fb">
								<FacebookLogin
									appId="398864984824000"
									fields="name,email,picture"
									scope="public_profile,user_friends"
									callback={responseFacebook}
									icon={<FaFacebook />}
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
					</Form>
				</footer>
			</Container>
		</>
	);
}

export default Register;