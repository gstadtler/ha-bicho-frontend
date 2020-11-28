import React from 'react';
import { Container, Row } from 'reactstrap';
import pets3 from '../../imagens/pets3.svg';
import './styles.css';


function PaymentSuccess(props) {
  return (
    <Container className="pay-sucesso">
      <Row>
        <h1>Pagamento recebido!</h1>
      </Row>
      <Row>
        <p className="text">
          Agradecemos a sua colaboração! Você poderá acompanhar o(s) abrigo(s)
          sempre que quiser, basta acessar o site e checar os perfis de abrigos,
          que estaram sendo atualizados semanalmente, com informações sobre
          o lugar e os animais que você está ajudando. Forte abraço!
          </p>
        <img
          src={pets3}
          alt="Ha-bichinho feliz!"
        />
      </Row>
    </Container>
  );
}

export default PaymentSuccess;
