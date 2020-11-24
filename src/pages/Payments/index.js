import React, { useState } from 'react';
import api from '../../services/api';

import { Container, Row, Col, Card, CardImg, CardBody, 
  CardText, CardTitle, Tooltip, CardSubtitle, Button, Input
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

  async function handlePayment() {
    if(tipoDePagamento === 'MP') {
      const response = api.get(`/payments/checkout/${abrigoId}/${abrigoNome}/${quantia}`);
      console.log(response.data);
      //const mpCheckout = response.body.init_point;
      //props.history.push(mpCheckout);
    } else {
      alert("Houve algum erro na escolha do tipo de pagamento.")
    }
  }
  
  function handleSelecBtn() {
    setBtnColor('success');
    setTipoDePagamento('MP');
  }

  const toggle = () => setTooltipOpen(!tooltipOpen);


  return (
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
                <CardText>
                  <ul style={{listStyle: "none", marginTop: "25px"}}>
                    <li>
                      <Button id="mp" color={btnColor} onClick={handleSelecBtn}>
                        Mercado Pago
                      </Button>
                    </li>
                    <Tooltip 
                      placement="right" 
                      isOpen={tooltipOpen} 
                      target="mp" 
                      toggle={toggle}
                    >
                      Pague com cartão de crédito, boleto bancário e mais!
                    </Tooltip>
                    <li>PicPay (Em breve)</li>
                    <li>Pix (Em breve)</li>
                  </ul>
                </CardText>
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
  );

}

export default Payments;
