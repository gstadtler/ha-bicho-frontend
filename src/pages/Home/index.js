import React from 'react';
import { Container, Row, Col } from 'reactstrap';

//import Slideshow from '../../components/Slideshow';
import NavbarResponsive from '../../components/NavbarResponsive';

import './styles.css';
import logo from '../../imagens/logo.svg';
import pets from '../../imagens/pets2.svg';


function Home() {
  return (
    <>
      <NavbarResponsive />
      <Container className="mt-5" fluid={true}>
        <Row>
          <img src={pets} alt="Ha-bicho" style={{height: 'max-content', width: '100%'}} />
        </Row>
        <Row>
          <Col className="d-flex justify-content-center" sm="12" md={{size: 6, offset: 3}}>
            <img src={logo} alt="Ha-bicho" width="500" height="125" />
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center" md="12">
            <h1>Mediamos doações com empatia, transparência e praticidade.</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
