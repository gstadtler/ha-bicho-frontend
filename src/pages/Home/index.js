import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

import NavbarResponsive from '../../components/NavbarResponsive';
//import AbrigosMap from '../../components/AbrigosMap';

import './styles.css';
import logo from '../../imagens/logo.svg';
import pets from '../../imagens/pets2.svg';


function Home() {
  return (
    <div className="home-page">
      <NavbarResponsive />
      <Container className="mt-5 first-container" fluid={true}>
        <Row>
          <img src={pets} alt="Ha-bicho" style={{ height: 'max-content', width: '100%' }} />
        </Row>
        <Row>
          <Col className="d-flex justify-content-center" sm="12" md={{ size: 6, offset: 3 }}>
            <img src={logo} alt="Ha-bicho" width="500" height="125" />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center slogan" md="12">
            <h1>Mediamos doações com empatia, transparência e praticidade.</h1>
          </Col>
        </Row>
        <Row>
          <Button className="home-btns saiba-mais-btn">
            <Link to="/sobre-nos" className="btn-links">Saiba mais</Link>
          </Button>
        </Row>
      </Container>

      <Container className="second-container" fluid={true}>
        <Row>
          <Col lg="6" md="6" sm="12" className="p-4">
            {/*<AbrigosMap />*/}
          </Col>
          <Col className="find-abrigos">
            <main>
              <h2>
                Conheça os abrigos de animais ao seu redor
              </h2>
              <p>
                Aqui é possível encontrar informações sobre o cotidiano e necessidades
                dos abrigos da sua localidade, de forma a facilitar a sua contribuição
                para a manutenção destes lugares.
              </p>
              <Button className="home-btns">
                <Link to="/abrigos" className="btn-links">Faça sua contribuição</Link>
              </Button>
            </main>
          </Col>
        </Row>
        <Row className="depoimento-wbackground">
          <Col className="depoimento-content">
            <p>“Desde que as doações começaram a chegar,
            conseguimos cuidar dos animais sem passar aperto”
            </p>
          </Col>
          <Col className="depoimento-title">
            <p>Maria Oliveira, voluntária no Abrigo Peludinhos</p>
          </Col>
        </Row>
        <Row className="depoimentos-box">
          <Col className="depoimentos">
            <Row className="depoimento-content">
              <p>“É realizador ajudar um animalzinho 
                mesmo que ele não more comigo. Sinto-me mais feliz.”
              </p>
            </Row>
            <Row className="depoimento-title">
              <p>
                Joaquin Pedrosa, padrinho de Bolota, do Abrigo Peludinhos.
              </p>
            </Row>
          </Col>
          <Col className="depoimentos">
            <Row className="depoimento-content">
              <p>“Recebo o acompanhamento do meu afilhado 
                peludo toda semana por e-mail”
              </p>
            </Row>
            <Row className="depoimento-title">
              <p>
                Maria Oliveira, Voluntária no Abrigo Peludinhos.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
