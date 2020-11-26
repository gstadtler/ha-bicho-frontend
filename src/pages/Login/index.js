import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { login } from "../../services/auth";
import { FaFacebookF } from 'react-icons/fa';

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardText,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';

import logotipoVerde from '../../imagens/logotipo-verde.svg';
import './styles.css';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


function Login(props) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Sign In with social media
  const [userData, setUserData] = useState('');
  const [fbError, setFbError] = useState('');
  const [googleError, setGoogleError] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();
    const userSession = { email, password };
    try {
      const response = await api.post("/login", userSession);
      login(response.data.token);
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  function responseFacebook(response) {
    if (response) {
      if (!response.status) {
        setUserData(response);
        console.log(userData);
        login(response.accessToken);
        props.history.push("/");
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
        setUserData(response.profileObj);
        console.log(userData);
        login(response.accessToken);
        props.history.push("/");
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
                <Form onSubmit={handleSignIn}>
                  <FormGroup className="social-login">
                    <div>
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
