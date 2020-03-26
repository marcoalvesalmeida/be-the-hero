import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import Logo from '../../assets/logo.svg';
import Heroes from '../../assets/heroes.png';
import api from '../../services/api';

export default function Logon() {
  const [id, setId] = useState("");

  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();

    try {
      const response = await api.post('session', { id });
      localStorage.setItem('ong_id', id);
      localStorage.setItem('ong_name', response.data.name);

      history.push('/profile');
    } catch (error) {
      alert('Erro ao fazer login, tente novamente!');
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={Logo} alt="Be The Hero"/>  
        <form onSubmit={handleLogin}>
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="Sua ID" 
            value={id} 
            onChange={e => setId(e.target.value)} 
          />
          <button className="button" type="submit">Vamos Lá!</button>

          <Link className="back-link" to="/register">
            <FiLogIn size="16" color="#E02041" />
            Não tenho Cadastro
          </Link>
        </form>
      </section>
      <img src={Heroes} alt="Heroes"/>
    </div>
  );
}
