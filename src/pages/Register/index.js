import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Form } from "@unform/web";
import Input from "../../components/Input";
import { FaFacebook } from 'react-icons/fa';

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
		const inputPassword  = document.getElementById("password-input");
		if (inputPassword.type === "password") {
			inputPassword.type = "text";
		} else {
			inputPassword.type = "password";
		}
	}

	const responseFacebook = (response) => {
		console.log(response);
		//setData(response);
		//setPicture(response.picture.data.url);
		//if (response.accessToken) {
		//setLogin(true);
		//} else {
		//setLogin(false);
		//}
	}

	const responseGoogle = (response) => {
		console.log(response);
	}

	return (
		<>
			<Navbar />
			<div id="Register">
				<header>
					<h1>Cadastro</h1>
					<img src={logotipoVerde} alt="Ha-bicho" width="175" height="100" />
				</header>

				<main>
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
				</main>

				<footer>
					<Form onSubmit={handleSubmit}>
						<Input name="username" placeholder="Nome de usuário" required />
						<Input name="email" placeholder="Email" type="email" required />
						<Input name="password" id="password-input" placeholder="Senha" type="password" required />
						<div className="check-buttons">
							<div className="toggle-password">
								<input type="checkbox" onClick={togglePassword} className="check-input" />
								<h6>Mostrar senha</h6>
							</div>
							<div className="check-terms">
								<input type="checkbox" className="check-input" />
								<h6>Concordo com os termos e condições</h6>
							</div>
						</div>
						<button className="register-button" type="submit">Cadastrar</button>
					</Form>
				</footer>
			</div>
		</>
	);
}

export default Register;