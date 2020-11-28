import React from 'react';
import ModalComponent from '../ModalComponent';
import './styles.css';

function ModalEditAbrigoImages(props) {


  function editingAbrigoImages() {
    return (
      <>
        <h1>Editando Imagens do abrigo {props.abrigo.nome}</h1>
      </>
    )
  }

  return (
    <ModalComponent btnOpenModalName="Editar Imagens" btnColor="#333366">
      {editingAbrigoImages()}
    </ModalComponent>
  )
}

export default ModalEditAbrigoImages;
