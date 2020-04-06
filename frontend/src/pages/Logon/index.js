import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import imageLogon from './../../assets/imageLogon.png';
import BtnPrimary from './../../components/BtnPrimary/index';
import InputStd from './../../components/InputStd';
import { FiLogOut } from 'react-icons/fi'


export default function Logon() {
  return (
    <div className="container">

      <div className="section">
        <div className="imgLogin">
          <img src={logo} alt="logo help me" />
        </div>


        <div className="titleLogon">
          <h1>I am ONG</h1>
        </div>

        <div className="input">
          <InputStd type="text" placeholder="Your ID" />
        </div>

        <div className="buttonLogin">
          <BtnPrimary name="Login" />
        </div>

        <div className="linkRegister">
          <p><FiLogOut /> Not yet registered, click here.</p>
        </div>

      </div>

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