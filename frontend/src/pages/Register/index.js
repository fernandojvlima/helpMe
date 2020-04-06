import React from 'react';
import './styles.css';
import logoTransparent from './../../assets/logoTransparent.png';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import InputStd from './../../components/InputStd';
import BtnPrimary from './../../components/BtnPrimary';

export default function Register() {
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

      <div className="aside">
        <div className="form">
          <div>
            <InputStd type="text" className="inputStd" name="name" placeholder="ONG Name" />
          </div>
          <div>
            <InputStd type="email" className="inputStd" name="email" placeholder="E-mail" />
          </div>

          <div>
            <InputStd type="text" className="inputStd" name="whatsapp" placeholder="Whatsapp" />
          </div>

          <div>
            <InputStd type="text" className="inputStd" name="city" placeholder="City" />
          </div>

          <div>
            <InputStd type="text" className="inputStd" name="uf" placeholder="UF" />
          </div>

          <div>
            <BtnPrimary type="submit" className="btnPrimary" value="Register" />
          </div>
        </div>


      </div>

    </div>
  )
}

