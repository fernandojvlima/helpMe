import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import api from './../../services/api';
import './styles.css';
import logo from '../../assets/logo.png';
import imageLogon from './../../assets/imageLogon.png';
import BtnPrimary from './../../components/BtnPrimary/index';
import InputStd from './../../components/InputStd';
import { FiLogIn } from 'react-icons/fi';

export default function Logon() {

  const history = useHistory();
  const [id, setId] = useState('');


  async function handleLogon(e) {
    e.preventDefault();
    const data = {
      id
    }

    if (id !== '') {
      try {
        const response = await api.post('/session', data)
        alert(`Login Efetuado: ${response.data.name}`)
        history.push('/profile')
      } catch (err) {
        alert('Erro no Login, tente novamente!')
      }
    } else {
      alert('Campos Obrigatórios não preenchidos')
    }
  }
  return (
    <div className="container">

      <form className="section" onSubmit={handleLogon}>
        <div className="imgLogin">
          <img src={logo} alt="logo help me" />
        </div>
        <h1>I am ONG {id}</h1>
        <InputStd className="inputStd" type="text" name="id" placeholder="Your ID" value={id} onChange={(e) => setId(e.target.value)} />

        <BtnPrimary value="Login" type="submit" />
        <div className="linkRegister">
          <Link to="/register"><p><FiLogIn size={16} />  Not yet registered, click here.</p></Link>
        </div>
      </form>

      <div className="aside">
        <div className="imageLogon">
          <img src={imageLogon} alt="We are Together" />
        </div>

        <div className="titleAside">
          <h2>Help Me</h2>
        </div>

        <div className="phraseAside">
          <p>We are together</p>
        </div>
      </div>

    </div>

  )
}