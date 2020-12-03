import React, { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import api from '../../services/api';
import { isAuthenticated } from '../../services/auth';
import ModalEditGastos from '../../components/ModalEditGastos';
import {
  Container, Card, CardHeader, CardBody,
  CardText, CardFooter, CardDeck
} from 'reactstrap';
import { MdPets } from 'react-icons/md';
import './styles.css';

function Transparencia(props) {
  const [role, setRole] = useState('');
  const [despesas, setDespesas] = useState(['Ração', 'Vacinas', 'Medicamentos', 'Exames',
    'Cirurgias', 'Infraestrutura', 'Detetização', 'Água', 'Energia']);
  const [gastosMensais, setGastosMensais] = useState([
    { mes: 'Janeiro', gasto: '' },
  ]);

  useEffect(() => {
    async function getUser() {
      try {
        if (isAuthenticated()) {
          const response = await api.get("/show");
          if (response.data) {
            const { role } = response.data;
            setRole(role);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
    getUser();
  }, [])

  function setEditView() {
    if (role === "abrigo") {
      return true;
    } else {
      return false;
    }
  }

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
      {setEditView() && <ModalEditGastos despesas={despesas} gastosMensais={gastosMensais} />}
      <Container className="d-flex justify-content-center gastos" fluid={true}>
        <CardDeck>
          {despesas.map((despesa, i) => (
            <Card className="" key={i}>
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
