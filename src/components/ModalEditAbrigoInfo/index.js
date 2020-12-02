import React, { useState } from 'react';
import { Form } from '@unform/web';
import Input from '../Input';
import { FiX } from "react-icons/fi";

import { Modal, Container, Row, Col, FormGroup, Label, Button } from 'reactstrap';
import './styles.css';
import logotipoAzul from '../../imagens/logotipo-azul.svg';

function ModalEditAbrigoInfo({ abrigo, apply }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  function handleEditInfo(data) {
    console.log('abrigo editado', data);
    apply(data, toggleModal);
  }
  
  function editingAbrigoInfo() {
    return (
      <>
        <Form onSubmit={handleEditInfo} initialData={abrigo} className="edit-abrigo">
          <img
            src={logotipoAzul}
            alt="Ha-bicho"
            width="175"
            height="80"
          />
          <Row className="justify-content-center mb-3">
            <h1>Editando Informações</h1>
            <p>
              <span style={{ fontWeight: "700", color: "#333366" }}>
                *Para editar basta sobrescrever as informações desejadas
              </span>
            </p>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  name="nome"
                  label="Nome do Abrigo"
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  name="cnpj_cpf"
                  label="CNPJ ou CPF do responsável"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  name="qtd_animais"
                  label="Número de Animais"
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  name="telefone"
                  label="Telefone"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormGroup>
                <Input
                  name="descricao"
                  label="Descrição"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  name="historia"
                  label="História"
                  type="text"
                  placeholder="Conte-nos sua história"
                />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup className="endereco">
            <Label className="address-field">Endereço</Label>
            <Row>
              <Col>
                <FormGroup>
                  <Input
                    name="rua"
                    label="Rua"
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    name="numero"
                    label="Número"
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    name="cep"
                    label="CEP"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Input
                    name="bairro"
                    label="Bairro"
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    name="cidade"
                    label="Cidade"
                    required
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Input
                    name="uf"
                    label="UF"
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
          </FormGroup>
          <Button
            className="submit-button"
            type="submit"
          >
            Salvar Alterações
          </Button>
        </Form>
      </>
    )
  }

  return (
    <Container className="edit-abrigo-info p-0" fluid={true}>
      <Button
        className="bt-open-modal"
        onClick={toggleModal}
      >
        Editar Informações
      </Button>
      <Modal
        isOpen={showModal}
        backdrop={true}
        keyboard={true}
        className="modal-lg modal-edit-info"
      >
        <Button className="bt-close-modal" onClick={toggleModal}>
          <FiX />
        </Button>
        <div>
          {editingAbrigoInfo()}
        </div>
      </Modal>
    </Container>
  )
}

export default ModalEditAbrigoInfo;
