import React from 'react';
import './styles.css';
import logoTransparent from './../../assets/logoTransparent.png';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import InputStd from './../../components/InputStd';
import BtnPrimary from './../../components/BtnPrimary';
import axios from 'axios';

export default function Register() {

  async function handleSubmit(e) {
    e.preventDefault()
    //   const register = await axios.post('http://localhost:3333/ongs'){
    //     name,
    //     email,
    //     whatsapp,
    //     city,
    //     uf
    //   }

    // }

  }

  return (
    <div className="container-register">
      <div className="section">
        <img src={logoTransparent} alt="Help Me" />
        <h1>Register your ONG</h1>
        <p>
          To join our community and post, first you need to be an ONG,
          if you are not, you can register your case through one.
        </p>
        <Link to="/"><p><FiArrowLeft size={16} />  Back to Logon</p></Link>
      </div>

      <div className="form" onSubmit={handleSubmit}>
        <InputStd type="text" className="inputStd" name="name" placeholder="ONG Name" />
        <InputStd type="email" className="inputStd" name="email" placeholder="E-mail" />
        <InputStd type="text" className="inputStd" name="whatsapp" placeholder="Whatsapp" />
        <div className="city">
          <InputStd type="text" className="inputStd" id="city" name="city" placeholder="City" />
          <InputStd type="text" className="inputStd" id="uf" name="uf" placeholder="UF" />
        </div>
        <BtnPrimary type="submit" className="btnPrimary" value="Register" onClick={(e) => handleSubmit(e)} />
      </div>
    </div>
  )
}

