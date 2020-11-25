import React from 'react';

function DoadorPerfil(props) {

  const currUser = props.currentUser;

  
  return (
    <div>
      <h1>Olá, {currUser.username}</h1>
    </div>
  )
}

export default DoadorPerfil;
