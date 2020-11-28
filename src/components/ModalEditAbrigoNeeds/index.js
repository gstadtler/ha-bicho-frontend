import React from 'react';
import ModalComponent from '../ModalComponent';
import './styles.css';

function ModalEditAbrigoNeeds(props) {


  function editingAbrigoNeeds() {
    return (
      <>
        <h1>Editando Lista de necessidades do abrigo {props.abrigo.nome}</h1>
      </>
    )
  }

  return (
    <ModalComponent btnOpenModalName="Editar Lista" btnColor="#333366">
      {editingAbrigoNeeds()}
    </ModalComponent>
  )
}

export default ModalEditAbrigoNeeds;
