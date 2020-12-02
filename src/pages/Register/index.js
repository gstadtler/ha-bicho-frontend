import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { login } from '../../services/auth';
import { FaFacebookF } from 'react-icons/fa';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import * as Yup from 'yup';
import {
	Container, Row, Col, Card,
	CardHeader, CardBody, CardText,
	FormGroup, Button
} from 'reactstrap';
import logotipoVerde from '../../imagens/logotipo-verde.svg';
import './styles.css';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


function Register(props) {
	const formRef = useRef(null);

	const role = 'doador';
	//Sign Up with social media
	const [fbError, setFbError] = useState('');
	const [googleError, setGoogleError] = useState('');

	async function handleSignUp(data) {
		try {
			// Remove all previous errors
			formRef.current.setErrors({});

			const schema = Yup.object().shape({
				username: Yup
					.string()
					.min(3, 'Nome de usuário deve ter no mínimo 3 caracteres')
					.max(80, 'Nome de usuário deve ter no máximo 80 caracteres'),
				email: Yup
					.string()
					.email('Insira um e-mail válido'),
				password: Yup
					.string()
					.min(6, 'Sua senha deve ter no mínimo 6 caracteres.')
					.max(30, 'Sua senha deve ter no máximo 30 caracteres'),
				role: Yup
					.string()
					.required()
			})

			const novoUsuario = {...data, role}

			await schema.validate(novoUsuario, {
				abortEarly: false
			});

			//validation passed
			const response = await api.post("/register", novoUsuario);
			if (response.data.token) {
				alert("Agora você pode ajudar vários bichinhos de uma forma mais fácil e transparente!");
				login(response.data.token);
				props.history.push("/");
			} else {
				alert("Houve algum erro durante o cadastro, tente novamente!");
			}

		} catch (err) {
			const validationErrors = {};

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);
      }
    };
	}

	async function handleSocialSignUp(user) {
		try {
			const response = await api.post("/register", user);
			if (response.data.token) {
				login(response.data.token);
				props.history.push("/");
			} else {
				alert('Houve algum erro ao se cadastrar, tente novamente!');
			}
		} catch (err) {
			console.log(err);
		}
	}

	function responseFacebook(response) {
		if (response) {
			if (!response.status) {
				const { name, email, id } = response;
				const user = { 
					username: name, 
					email: email, 
					password: id, 
					role: role
				}
				handleSocialSignUp(user);
			} else {
				setFbError(response);
				console.log(fbError);
			}
		} else {
			alert("Houve algum erro ao cadastrar-se.");
		}
	}

	function responseGoogle(response) {
		if (response) {
			if (!response.error) {
				const { name, email, googleId } = response.profileObj;
				const user = { 
					username: name, 
					email: email, 
					password: googleId, 
					role: role
				}
				handleSocialSignUp(user);
			} else {
				setGoogleError(response);
				console.log(googleError);
			}
		} else {
			alert("Houve algum erro ao cadastrar-se.");
		}
	}

	return (
		<>
			<Container className="register" fluid={true}>
				<h1 className="register-title">Cadastro</h1>
				<Row>
					<Col className="d-flex justify-content-center content-wrapper">
						<Card>
							<CardHeader className="d-flex justify-content-center">
								<img src={logotipoVerde} alt="Ha-bicho" width="175" height="100" />
							</CardHeader>

							<CardBody>
								<Form ref={formRef} onSubmit={handleSignUp}>
									<FormGroup className="social-login">
										<div>
											<FacebookLogin
												appId="398864984824000"
												fields="name,email"
												scope="public_profile,user_friends,email"
												callback={responseFacebook}
												icon={<FaFacebookF />}
												textButton="Cadastrar-se com Facebook"
												cssClass="facebook-button"
											/>
										</div>
										<div>
											<GoogleLogin
												clientId="969966321777-hj4ej23le0r0gs8ga68k2l2516q88mqh.apps.googleusercontent.com"
												buttonText="Cadastrar-se com Google"
												onSuccess={responseGoogle}
												onFailure={responseGoogle}
												className="google-button"
											/>
										</div>
									</FormGroup>
									<FormGroup>
										<Input
											name="username"
											placeholder="Nome de usuário"
											required
										/>
									</FormGroup>

									<FormGroup>
										<Input
											name="email"
											type="email"
											placeholder="E-mail"
											required
										/>
									</FormGroup>

									<FormGroup>
										<Input
											name="password"
											type="password"
											placeholder="Senha"
											required
										/>
									</FormGroup>

									<FormGroup>
										<Button className="register-button" type="submit">Cadastrar-se</Button>
									</FormGroup>

									<FormGroup className="termos-group">
										<CardText>
											Ao cadastrar-se você concorda com os
											nossos <Link to="#" className="link-termos">termos e condições.</Link>
										</CardText>
									</FormGroup>

									<FormGroup className="login-group">
										<CardText tag="h6">Já possui cadastro?</CardText>
										<Link to="/login" className="link-login">Entrar</Link>
									</FormGroup>
								</Form>
							</CardBody>


						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default Register;
