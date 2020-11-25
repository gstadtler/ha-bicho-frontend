import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { login } from '../../services/auth';
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


function Register(props) {

	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const role = 'doador';

	async function handleSignUp(e) {
		e.preventDefault();
    try {
      const novoUsuario = {
				username,
				email,
				password,
				role
      }
			const response = await api.post("/register", novoUsuario);
      if (response.status === 200) {
				alert("Agora você pode ajudar vários bichinhos de uma forma mais fácil e transparente!");
				login(response.data.token);
				props.history.push("/");
      } else {
        alert("Houve algum erro durante o cadastro :(");
      }
    } catch (err) {
      console.log(err);
    };

	}

	function responseFacebook(response) {
		if (response) {
			login(response.accessToken);
			props.history.push("/");
		} else {
			alert("Houve algum erro ao cadastrar-se.");
		}
	}

	function responseGoogle(response) {
		if(response) {
			login(response.accessToken);
			props.history.push("/");
		} else {
			alert("Houve algum erro ao cadastrar-se.");
		}
	}

	return (
		<>
			<Container className="Register" fluid={true}>
				<header>
					<h1>Cadastro</h1>
					<img src={logotipoVerde} alt="Ha-bicho" width="175" height="100" />
				</header>

				<footer>
					<Form onSubmit={handleSignUp}>
						<FormGroup className="social-login">
							<div className="login-fb">
								<FacebookLogin
									appId="398864984824000"
									fields="name,email"
									scope="public_profile,user_friends"
									callback={responseFacebook}
									icon={<FaFacebookF />}
									textButton="Inscreva-se com Facebook"
									cssClass="facebook-button"
								/>
							</div>
							<div className="login-google">
								<GoogleLogin
									clientId="969966321777-hj4ej23le0r0gs8ga68k2l2516q88mqh.apps.googleusercontent.com"
									buttonText="Inscreva-se com Google"
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									className="google-button"
								/>
							</div>
						</FormGroup>
						<FormGroup>
							<Input
								name="username"
								value={username}
								onChange={e => setUsername(e.target.value)}
								placeholder="Nome de usuário"
								required
							/>
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
							<Button className="register-button" type="submit">Cadastrar-se</Button>
						</FormGroup>

						<FormGroup className="termos-group">
							<h6>Ao clicar em “Cadastrar-se”, você concorda com os termos e condições.</h6>
						</FormGroup>

						<FormGroup className="login-group">
							<h6>Já possui cadastro?</h6>
							<Link to="/login" className="link-login">Entrar</Link>
						</FormGroup>

					</Form>
				</footer>
			</Container>
		</>
	);
}

export default Register;
