import React, { useEffect } from 'react';
import api from '../../services/api';
import { Container, Row } from 'reactstrap';
import pets3 from '../../imagens/pets3.svg';
import './styles.css';


function PaymentSuccess(props) {

  useEffect(()=> {
    async function makeDonation(){
      try {
        const response = await api.get("/show");
        const { id } = response.data;
        const abrigoId = localStorage.getItem('@saved');
        const quantia = localStorage.getItem('@qnt');
        await api.post(`/donations/${abrigoId}/${id}`, { quantia: quantia });
        localStorage.removeItem('@saved');
        localStorage.removeItem('@qnt');
      } catch (err) {
        console.log(err);
      }
    }
    makeDonation();
  },[]);

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
