import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

export default function Profile() {
   const history = useHistory();

   const [incidents, setIncidents] = useState([]);

   const ong_id = localStorage.getItem('ong_id');
   const ong_name = localStorage.getItem('ong_name');

   useEffect(() => {
      api.get('incidents', {
         headers: {
            Authorization: ong_id
         }
      }).then(response => {
         setIncidents(response.data);
      });
   },[ong_id]);

   async function handleDelete(id){
      try {
         await api.delete(`incidents/${id}`, {
            headers: {
               Authorization: ong_id
            }
         });

         setIncidents(incidents.filter(incident => incident.id !== id));
      } catch (err) {
         alert('Não foi possível deletar, tente novamente!');
      }
   }

   function handleLogout(){
      localStorage.clear();

      history.push('/');
   }

   return (
      <div className="profile-container">
         <header>
            <img src={logoImg} alt="Be The Hero" />
            <span>Bem-vinda, {ong_name}</span>

            <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
            <button type="button" onClick={handleLogout}>
               <FiPower size={18} />
            </button>
         </header>

         <h1>Casos Cadastrados</h1>

         <ul>
            { incidents.map( incident => (
               <li key={incident.id}>
                  <strong>CASO:</strong>
                  <p>{incident.title}</p>

                  <strong>DESCRIÇÃO:</strong>
                  <p>{incident.description}</p>

                  <strong>VALOR:</strong>
                  <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                  <button type="button" onClick={() => handleDelete(incident.id)}>
                     <FiTrash2 size={20} color="#a8a8b3" />
                  </button>
               </li>
            )) }
         </ul>
      </div>
   )
}