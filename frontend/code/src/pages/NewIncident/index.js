import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register() {
   const history = useHistory();
   const [title, setTitle] = useState("");
   const [description, setDescription] = useState("");
   const [value, setValue] = useState("");

   const ong_id = localStorage.getItem('ong_id');

   async function handleNew(e){
      e.preventDefault();

      const data = {
         title,
         description,
         value
      }

      try {
         await api.post('incidents', data, {
            headers: {
               Authorization: ong_id
            }
         });
         
         history.push('/profile'); 
      } catch (err) {
         alert("Não foi possível cadastrar o caso, tente novamente!");
      }

   }

   return (
      <div className="new-incident-container">
         <div className="content">
            <section>
               <img src={logoImg} alt="Be The Hero"/>

               <h1>Cadastrar novo caso</h1>
               <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

               <Link className="back-link" to="/profile">
                  <FiArrowLeft size={16} />
                  Voltar para home
               </Link>            
            </section>

            <form onSubmit={handleNew}>
               <input 
                  placeholder="Título do caso"
                  value={title}
                  onChange={e => setTitle(e.target.value)} 
               />
               <textarea 
                  placeholder="Descrição" 
                  value={description}
                  onChange={e => setDescription(e.target.value)} 
               />

               <input 
                  placeholder="Valor em reais" 
                  value={value}
                  onChange={e => setValue(e.target.value)} 
               />
               
               <button className="button" type="submit">Cadastrar</button>
            </form>
         </div>
      </div>
   )
}