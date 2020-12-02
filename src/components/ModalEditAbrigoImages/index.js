import React, { useState } from 'react';
import api from '../../services/api';
import ImageInput from '../ImageInput';
import { Modal, Container, Row, Button } from 'reactstrap';
import { FiX } from "react-icons/fi";
import logotipoAzul from '../../imagens/logotipo-azul.svg';
import './styles.css';

function ModalEditAbrigoImages(props) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  async function submitNewImages(files) {
    try {
      const data = new FormData();
      files.map((file, index) =>
        data.append(`image[${index}]`, file, file.name)
      );
      const config = {
        headers: {
          "content-type": "multipart/form-data"
        }
      };

      await api.post(
        `/abrigos/${props.abrigo.id}/images`,
        data,
        config
      );
      props.apply();
    } catch (err) {
      console.log(err);
    }
    toggleModal();
  }

  function editingAbrigoImages() {
    return (
      <Container className="edit-images">
        <img
          src={logotipoAzul}
          alt="Ha-bicho"
          width="175"
          height="80"
        />
        <Row className="justify-content-center">
          <h1>Editando Imagens</h1>
        </Row>
        <Row>
          <ImageInput styling="drop-files" handleSubmit={submitNewImages} />
        </Row>
      </Container>
    )
  }

  return (
    <Container className="edit-abrigo-images p-0" fluid={true}>
      <Button
        className="bt-open-modal"
        onClick={toggleModal}
      >
        Editar Imagens
      </Button>
      <Modal
        isOpen={showModal}
        backdrop={true}
        keyboard={true}
        className="modal-lg modal-edit-images"
      >
        <Button className="bt-close-modal" onClick={toggleModal}>
          <FiX />
        </Button>
        <div>
          {editingAbrigoImages()}
        </div>
      </Modal>
    </Container>
  )
}

export default ModalEditAbrigoImages;
