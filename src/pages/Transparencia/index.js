import React from 'react';
import NumberFormat from 'react-number-format';
import { Container, Card, CardHeader, CardBody,
  CardText, CardFooter, CardDeck } from 'reactstrap';
import { MdPets } from 'react-icons/md';
import './styles.css';

function Transparencia(props) {

  const despesas = ['Ração', 'Vacinas', 'Medicamentos', 'Exames',
    'Cirurgias', 'Infraestrutura', 'Detetização',
    'Água', 'Energia'];

  //const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
  //  'Maio', 'Junho', 'Julho', 'Agosto',
  //  'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return (
    <>
      <h1 className="transparencia-title">Tabela de Gastos</h1>
      <span style={{
        fontWeight: "600",
        fontSize: "18px",
        color: "#333366",
        marginLeft: "20px"
      }}>
        *As tabelas são atualizadas mensalmente pelos abrigos
      </span>
      <Container className="d-flex justify-content-center gastos" fluid={true}>
        <CardDeck>
          {despesas.map(despesa => (
            <Card className="">
              <CardHeader className="d-flex justify-content-center">
                <MdPets size={20} style={{ color: "#669999" }} />
              </CardHeader>
              <CardBody className="card-despesa">
                <CardText>
                  {despesa}
                </CardText>
              </CardBody>
              <CardFooter className="card-mes">
                <CardText>
                  <strong>Ex: Janeiro</strong>
                </CardText>
                <CardText>
                  <NumberFormat
                    value={0}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'R$'}
                    className="valor"
                  />
                </CardText>
              </CardFooter>
            </Card>
          ))}
        </CardDeck>
      </Container>
    </>
  );
}

export default Transparencia;
