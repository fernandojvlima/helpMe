import React from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import backgroundImg from '../../assets/backgroundImg.png';
import BtnPrimary from './../../components/BtnPrimary/index'

export default function Logon() {
  return (
    <div className="box-login">
      <img src={backgroundImg} alt="Background" />
      <div className="logo">
        <img src={logo} alt="logo help me" />
        <BtnPrimary name="Start Now!" />
      </div>

    </div>
  )
}