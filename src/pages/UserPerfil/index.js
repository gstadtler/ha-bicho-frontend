import React from 'react';
import { getCurrentUser, getUserRole } from '../../services/auth';

import AbrigoPerfil from '../AbrigoPerfil';
import DoadorPerfil from '../DoadorPerfil';



export const isAbrigo = () => {
  const role = getUserRole();
  if (role === "abrigo") {
    return true;
  } else {
    return false;
  }
}

function UserPerfil(props) {

  const user = getCurrentUser();
  
  return (
    <div>
      {isAbrigo() ? (
        <AbrigoPerfil currentUser={user} />
      ): (
        <DoadorPerfil currentUser={user} />
      )}
    </div>
  );


}

export default UserPerfil;
