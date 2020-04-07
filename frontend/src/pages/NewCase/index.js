import React from 'react';
import './styles.css';
import logoTransparent from './../../assets/logoTransparent.png';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import InputStd from './../../components/InputStd';
import BtnPrimary from './../../components/BtnPrimary';
import BtnCancel from './../../components/BtnCancel';

export default function Register() {
  return (
    <div className="container-register">
      <div className="section">
        <img src={logoTransparent} alt="Help Me" />
        <h1>Register a Case</h1>
        <p>
          All cases to be registered must be verified by  ONG.
          Do not inform contacts or names of people involved  in order to
          maintain the confidentiality
        </p>
        <Link to="/"><p><FiArrowLeft size={16} />  Back to Home</p></Link>
      </div>

      <div className="form">
        <InputStd type="text" className="inputStd" name="title" placeholder="Title of the Case" />
        <InputStd type="email" className="inputDescription" name="description" placeholder="Description" />
        <InputStd type="text" className="inputStd" name="value" placeholder="Value" />
        <div className="buttonGroup">
          <BtnCancel type="button" name="Cancel" />
          <BtnPrimary className="btnPrimary" type="submit" value="Register" />
        </div>

      </div>
    </div>
  )
}

