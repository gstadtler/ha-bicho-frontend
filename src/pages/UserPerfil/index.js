import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import AbrigoPerfil from '../AbrigoPerfil';
import DoadorPerfil from '../DoadorPerfil';


function UserPerfil(props) {

  const [user, setUser] = useState('');
  const [abrigo, setAbrigo] = useState('');
  
  useEffect(() => {
    async function getCurrentUser() {
      try {
        const currUser = await api.get("/show");
        setUser(currUser.data);
        const { role, email } = currUser.data;
        console.log(role, email);
        if (role === "abrigo") {
          console.log("got here!")
          const response = await api.get(`/find/${email}`);
          console.log('got the shelter', response);
          setAbrigo(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    console.log('set the shelter', abrigo);
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
        <AbrigoPerfil abrigo={abrigo} />
      ) : (
          <DoadorPerfil currentUser={user} />
        )}
    </div>
  );


}

export default UserPerfil;
