import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import AbrigoPerfil from '../AbrigoPerfil';
import DoadorPerfil from '../DoadorPerfil';


function UserPerfil(props) {

  const [user, setUser] = useState('');
  const email = props.match.params.email;
  
  useEffect(() => {
    async function getCurrentUser() {
      try {
        const currUser = await api.get("/show");
        setUser(currUser.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCurrentUser();
  }, []);

  function isAbrigo() {
    if (user.role === "abrigo") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div>
      {isAbrigo() ? (
        <AbrigoPerfil email={email} />
      ) : (
          <DoadorPerfil currentUser={user} />
        )}
    </div>
  );


}

export default UserPerfil;
