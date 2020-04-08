import React, { useState } from 'react';
import api from './../../services/api';
import './styles.css';
import logo2 from './../../assets/logo2.png';
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom';
import InputStd from './../../components/InputStd';
import BtnPrimary from './../../components/BtnPrimary';

export default function Register() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }

    if (name !== '' && email !== '' && whatsapp !== '') {
      try {
        const response = await api.post('/ongs', data)
        alert(`Seu cadastro foi efetuado, sua Id de acesso: ${response.data.id}`)
        history.push('/')
      } catch (err) {
        alert('Erro no cadastro, tente novamente!')
      }
    } else {
      alert('Campos Obrigatórios não preenchidos')
    }
  }

  return (
    <div className="container-register">
      <div className="section">
        <img src={logo2} alt="Help Me" />
        <h1>Register your ONG</h1>
        <p>
          To join our community and post, first you need to be an ONG,
          if you are not, you can register your case through one.
        </p>
        <Link to="/"><p><FiArrowLeft size={16} />  Back to Logon</p></Link>
      </div>

      <form className="form" onSubmit={handleRegister}>
        <InputStd type="text" className="inputStd" name="name" placeholder="ONG Name" value={name} onChange={(e) => setName(e.target.value)} />
        <InputStd type="email" className="inputStd" name="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <InputStd type="text" className="inputStd" name="whatsapp" placeholder="Whatsapp" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)} />
        <div className="city">
          <InputStd type="text" className="inputStd" id="city" name="city" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
          <InputStd type="text" className="inputStd" id="uf" name="uf" placeholder="UF" value={uf} onChange={(e) => setUf(e.target.value)} />
        </div>
        <BtnPrimary type="submit" value="Register" style={{ width: 448 }} />
      </form>
    </div>
  )
}

