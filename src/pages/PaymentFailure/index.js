import React from 'react';
import { Container, Row } from 'reactstrap';
import paymentError from '../../imagens/paymentError.png';
import './styles.css'


function PaymentFailure(props) {
  return (
    <Container className="pay-failure">
      <Row>
        <h1>Pagamento falhou!</h1>
      </Row>
      <Row>
        <p className="text">
          Ops... Houve algum erro na confirmação do seu pagamento.
          Tente novamente ou entre em contato conosco!
        </p>
        <img
          src={paymentError}
          alt="Ha-bichinho triste :("
        />
      </Row>
    </Container>
  );
}

export default PaymentFailure;
