import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardDeck, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, Button
} from 'reactstrap';

import './styles.css';

import moneyDonate from '../../imagens/money-donate.svg';
import materialDonate from '../../imagens/material-donate.svg';
import volunteer from '../../imagens/volunteer.svg';
import padrin from '../../imagens/padrin.svg';


function Doacoes(props) {

  const selected = props.location.abrigo;
  console.log(selected);

  return (
    <div className="doacoes-page">
      <h1 className="titulo-doacoes">Formas de Ajudar</h1>
      <CardDeck>
        <Row>
          <Col sm="6" md="6" lg="3" className="mb-3">
            <Card className="doacoes-cards">
              <CardImg top className="doacoes-img" src={moneyDonate} alt="Doação financeira" />
              <CardBody className="card-content">
                <CardTitle tag="h2">Doação Financeira</CardTitle>
                <CardText className="content-text"><li>Preço mínimo de R$ 5,00</li></CardText>
                <Button className="doacao-btn-active">
                  <Link 
                    to={{pathname: "/payments", abrigo: {selected}}} 
                    className="donate-link"
                  >
                    Doar
                  </Link>
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="6" lg="3" className="mb-3">
            <Card className="doacoes-cards">
              <CardImg top className="doacoes-img" src={materialDonate} alt="Doação de Materiais" />
              <CardBody className="card-content">
                <CardTitle tag="h2">Doação de Materiais</CardTitle>
                <CardText className="content-text">
                  <li>Vermifugos</li>
                  <li>Carrapaticidas</li>
                  <li>Vacinas</li>
                  <li>Ração</li>
                </CardText>
                <Button className="doacao-btn text-muted">Em breve</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="6" lg="3" className="mb-3">
            <Card className="doacoes-cards">
              <CardImg top className="doacoes-img" src={volunteer} alt="Voluntariar" />
              <CardBody className="card-content">
                <CardTitle tag="h2">Voluntariar</CardTitle>
                <CardText className="content-text">
                  <li>Passear</li>
                  <li>Banho nos animais</li>
                  <li>Cuidados</li>
                  <li>Passar um dia no abrigo</li>
                </CardText>
                <Button className="doacao-btn text-muted">Em breve</Button>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6" md="6" lg="3" className="mb-3">
            <Card className="doacoes-cards">
              <CardImg top className="doacoes-img" src={padrin} alt="Apadrinhar" />
              <CardBody className="card-content">
                <CardTitle tag="h2">Apadrinhar</CardTitle>
                <CardText className="content-text">
                  <li>Doar preço da ração do animal apadrinhado</li>
                  <li>Doar preço de quaisquer adversidades que envolvam o animal</li>
                </CardText>
                <Button className="doacao-btn text-muted">Em breve</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  );
}

export default Doacoes;
