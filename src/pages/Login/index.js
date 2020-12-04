import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { login } from "../../services/auth";
import { FaFacebookF } from 'react-icons/fa';
import { Form } from '@unform/web';
import Input from '../../components/Input';
import * as Yup from 'yup';
import { Container, Row, Col, Card,
  CardHeader, CardBody, CardText,
  FormGroup, Button } from 'reactstrap';

import logotipoVerde from '../../imagens/logotipo-verde.svg';
import './styles.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';



function Login(props) {
  const formRef = useRef(null);

  //Sign In with social media
  const [fbError, setFbError] = useState('');
  const [googleError, setGoogleError] = useState('');

  async function handleSignIn(data) {
    try {
      // Remove all previous errors
      formRef.current.setErrors({});

      const schema =  Yup.object().shape({
        email: Yup.string().email('Insira um e-mail válido!'),
        password: Yup.string().min(6, 'Sua senha deve ter no mínimo 6 caracteres.').max(30)
      })

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed
      const response = await api.post("/login", data);
      if (response.data.token) {
        login(response.data.token);
        props.history.push("/");
      } else {
        alert(response.data.notRegistered);
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

  async function handleSocialSignIn(user) {
    try {
      const response = await api.post("/login", user);
      if (response.data.token) {
        login(response.data.token);
        props.history.push("/");
      } else {
        alert(response.data.notRegistered);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function responseFacebook(response) {
    if (response) {
      if (!response.status) {
        const { email, id } = response;
        const user = {
          email: email, 
          password: id
        };
        handleSocialSignIn(user);
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
        const { email, googleId } = response.profileObj;
        const user = {
          email: email, 
          password: googleId
        };
        handleSocialSignIn(user);
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
      <Container className="login" fluid={true}>
        <h1 className="login-title">Login</h1>
        <Row>
          <Col className="d-flex justify-content-center content-wrapper">
            <Card>
              <CardHeader className="d-flex justify-content-center">
                <img src={logotipoVerde} alt="Ha-bicho" width="175" height="100" />
              </CardHeader>

              <CardBody>
                <Form ref={formRef} onSubmit={handleSignIn}>
                  <FormGroup className="social-login">
                    <div>
                      <FacebookLogin
                        appId="398864984824000"
                        fields="name,email"
                        scope="public_profile,email"
                        callback={responseFacebook}
                        icon={<FaFacebookF />}
                        textButton="Entrar com Facebook"
                        cssClass="facebook-button"
                      />
                    </div>
                    <div>
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
                    <Button className="login-button" type="submit">Entrar</Button>
                  </FormGroup>

                  <FormGroup className="register-group">
                    <CardText tag="h6">Ainda não possui cadastro?</CardText>
                    <Link to="/register" className="link-register">Cadastrar-se</Link>
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

export default Login;
