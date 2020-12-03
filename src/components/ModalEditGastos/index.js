import React, { useState } from 'react';
import { Modal, Container, Row, Col, Button} from 'reactstrap';
import { Form } from '@unform/web';
//import Input from '../../components/Input';
import { FiX } from 'react-icons/fi';
import logotipoAzul from '../../imagens/logotipo-azul.svg';
import './styles.css';

function ModalEditGastos({ despesas, gastosMensais }) {
  const [showModal, setShowModal] = useState(false);
  function toggleModal() {
    setShowModal(!showModal);
  }

  function editingGastos() {
    return (
      <>
        <Form className="editing-gastos">
          <img
            src={logotipoAzul}
            alt="Ha-bicho"
            width="175"
            height="80"
          />
          <Row className="justify-content-center">
            <h1>Editando Gastos</h1>
          </Row>
          <Row className="justify-content-center">
            <p>
              <span style={{ fontWeight: "700", color: "#333366" }}>
                *Para editar basta sobrescrever as informações desejadas
              </span>
            </p>
          </Row>
          <Container className="">
            <Row>
              <Col>
                {despesas[0]}
              </Col>
              <Col>
                {despesas[1]}
              </Col>
              <Col>
                {despesas[2]}
              </Col>
            </Row>
            <Row>
              <Col>
                {despesas[3]}
              </Col>
              <Col>
                {despesas[4]}
              </Col>
              <Col>
                {despesas[5]}
              </Col>
            </Row>
            <Row>
              <Col>
                {despesas[6]}
              </Col>
              <Col>
                {despesas[7]}
              </Col>
              <Col>
                {despesas[8]}
              </Col>
            </Row>
          </Container>
        </Form>
      </>
    )
  }

  return (
    <Container className="edit-gastos p-0" fluid={true}>
      <Button
        className="bt-open-modal"
        onClick={toggleModal}
      >
        Editar Gastos
  </Button>
      <Modal
        isOpen={showModal}
        backdrop={true}
        keyboard={true}
        className="modal-lg modal-edit-gastos"
      >
        <Button className="bt-close-modal" onClick={toggleModal}>
          <FiX />
        </Button>
        <div>
          {editingGastos()}
        </div>
      </Modal>
    </Container>
  )

}

export default ModalEditGastos;
