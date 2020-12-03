import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';
import PaymentSuccess from '../PaymentSuccess';
import PaymentPending from '../PaymentPending';
import PaymentFailure from '../PaymentFailure';
import {
  Container, Row, Col, Card, CardImg, CardBody,
  CardTitle, Tooltip, CardSubtitle, Button, Input
} from 'reactstrap';
import './styles.css';
import Icon from '../../imagens/Icon.svg';

function Payments(props) {

  const abrigoId = props.match.params.abrigoId;
  const abrigoNome = props.match.params.abrigoNome;
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [btnColor, setBtnColor] = useState('info');
  const [quantia, setQuantia] = useState('');
  const [tipoDePagamento, setTipoDePagamento] = useState('');

  const location = useLocation();
  const curl = location.pathname;

  function setPagePayments() {
    if (curl === `/payments/${abrigoId}/${abrigoNome}`) {
      return true;
    } else {
      return false;
    }
  }

  function setPageSuccess() {
    if (curl.includes("payments/success")) {
      return true;
    } else {
      return false;
    }
  }

  function setPagePending() {
    if (curl.includes("payments/pending")) {
      localStorage.removeItem('@saved');
      localStorage.removeItem('@qnt');
      return true;
    } else {
      return false;
    }
  }

  function setPageFailure() {
    if (curl.includes("payments/failure")) {
      localStorage.removeItem('@saved');
      localStorage.removeItem('@qnt');
      return true;
    } else {
      return false;
    }
  }

  async function handlePayment() {
    if (tipoDePagamento === 'MP') {
      localStorage.setItem('@saved', abrigoId);
      localStorage.setItem('@qnt', quantia);
      const response = await api.get(`/payments/checkout/${abrigoId}/${abrigoNome}/${quantia}`);
      const mpCheckout = response.data.body.init_point;
      window.open(mpCheckout, "_top")
    } else {
      alert("Houve algum erro na escolha do tipo de pagamento.")
    }
  }

  function handleSelecBtn() {
    setBtnColor('success');
    setTipoDePagamento('MP');
  }

  function toggle() {
    setTooltipOpen(!tooltipOpen);
  }

  return (
    <>
      {setPagePayments() &&
        <>
          <h1 className="page-title">Formas de Pagamento</h1>
          <Container className="d-flex justify-content-center payments-page">
            <Row className="payments-box">
              <Col className="content">
                <Card>
                  <CardImg src={Icon} alt="Ha-bichinho" className="content-img" />
                  <CardBody className="card-bd">
                    <CardTitle tag="h2">Pagamento</CardTitle>
                    <CardSubtitle tag="h6">Para: Abrigo {abrigoNome}</CardSubtitle>
                    <Row className="d-flex flex-column pay-options">
                      <CardSubtitle
                        tag="h6"
                        style={{ color: "#333366", fontWeight: "bold" }}
                      >
                        Clique para escolher uma opção
                    </CardSubtitle>
                      <Col>
                        <Button id="mp" color={btnColor} onClick={handleSelecBtn}>
                          Mercado Pago
                        </Button>
                      </Col>
                      <Tooltip
                        placement="right"
                        isOpen={tooltipOpen}
                        target="mp"
                        toggle={toggle}
                      >
                        Pague com cartão de crédito, boleto bancário e mais!
                      </Tooltip>
                      <Col>PicPay (Em breve)</Col>
                      <Col>Pix (Em breve)</Col>
                    </Row>
                    <CardBody className="d-flex">
                      <Input
                        name="quantia"
                        value={quantia}
                        onChange={e => setQuantia(e.target.value)}
                        placeholder="Valor mínimo de R$ 5,00"
                      />
                      <Button color="success" onClick={handlePayment}>Pagar</Button>
                    </CardBody>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      }
      {setPageSuccess() && <PaymentSuccess />}
      {setPagePending() && <PaymentPending />}
      {setPageFailure() && <PaymentFailure />}
    </>
  );

}

export default Payments;
