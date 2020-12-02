import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import happyPug from '../../imagens/pirulito.png';
import './styles.css';

function DoadorPerfil({ currentUser }) {

  const currUser = currentUser;

  return (
    <>
      <Container className="d-flex justify-content-around mt-5" fluid={true}>
        <Row>
          <Col className="d-flex">
            <img src={happyPug} alt="Happy Pug" className="doador-avatar" />
            <h1 style={{color: "#333366"}}>Olá, {currUser.username}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={{color: "#669999"}}>Minhas doações</h1>
            <ListGroup>
              <ListGroupItem 
                tag="h6" 
                style={{color: "#333366", textAlign: "center"}}
              >
                Assim que
              </ListGroupItem>
              <ListGroupItem 
                tag="h6" 
                style={{color: "#333366", textAlign: "center"}}
              >
                você doar
              </ListGroupItem>
              <ListGroupItem 
                tag="h6" 
                style={{color: "#333366", textAlign: "center"}}
              >
                suas doações
              </ListGroupItem>
              <ListGroupItem 
                tag="h6" 
                style={{color: "#333366", textAlign: "center"}}
              >
                aparecerão aqui
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DoadorPerfil;
