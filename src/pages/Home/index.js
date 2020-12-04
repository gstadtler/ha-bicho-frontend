import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import NumberFormat from 'react-number-format';
import {
  Container, Row, Col, Button,
  Card, CardBody
} from 'reactstrap';
import { FaHeart, FaInstagram } from 'react-icons/fa';

import './styles.css';
import logo from '../../imagens/logo.svg';
import pets from '../../imagens/pets2.svg';


function Home(props) {

  const [donations, setDonations] = useState([]);

  useEffect(() => {
    async function loadDonations() {
      try {
        const { data } = await api.get('/donations');
        setDonations(data);
      } catch (err) {
        console.log(err);
      };
    };
    loadDonations();
  },[])

  function sumDonations() {
    return donations.map(donate => donate.quantia).reduce(
      (a, b) => (parseFloat(a) + parseFloat(b)).toFixed(2), 0);
  }

  return (
    <div className="home-page">
      <Container className="mt-5 first-container" fluid={true}>
        <Row>
          <img src={pets} alt="Ha-bicho" style={{ width: '100%' }} />
        </Row>
        <Row>
          <Col className="d-flex justify-content-center" sm="12" md={{ size: 6, offset: 3 }}>
            <img src={logo} alt="Ha-bicho" className="home-logo" />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center mt-3 slogan" md="12">
            <h1>Aumentar doações com empatia, transparência e praticidade.</h1>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Link to="/sobre-nos" className="saiba-mais-link btn-links">Saiba mais</Link>
          </Col>
        </Row>
      </Container>

      <Container className="second-container" fluid={true}>
        <Row>
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
                <Link to="/abrigos" className="btn-links">Faça sua doação</Link>
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
              peludo toda semana por e-mail.”
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
      
      <Container className="third-container" fluid={true}>
        <Container className="d-flex flex-column p-3" fluid={true}>
          <Row lg="12" md="12" sm="12" className="mb-3">
            <Col>
              <h2 style={{color: "#fff", marginBottom: "20px"}}>Total de doações até agora:</h2>
              <Card className="content-wrapper">
                <CardBody className="d-flex justify-content-center m-1">
                  <NumberFormat 
                    value={sumDonations()}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'R$'}
                    className="each-number"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="fourth-container" fluid={true}>
        <Row className="rodape-habicho">
          <Col className="d-flex content">
            <div className="d-flex">
              <h6 style={{marginRight: "5px", padding: "3px"}}>Encontre-nos em:</h6>
              <a href="https://www.instagram.com/ha.bicho/">
                <FaInstagram size="31" style={{fontWeight: "bold", color: "#333366"}} />
                <p>@ha.bicho</p>
              </a>
            </div>
          </Col>
          <Col className="d-flex justify-content-end">
            <p style={{color: "#669999", padding: "2px", textAlign: "center"}}>
              Feito com <FaHeart style={{color: "#333366"}} /> pela Ha-bicho
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
