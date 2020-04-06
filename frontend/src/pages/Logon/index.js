import React, { useState } from 'react';
import './styles.css';
import logo from '../../assets/logo.png';
import imageLogon from './../../assets/imageLogon.png';
import BtnPrimary from './../../components/BtnPrimary/index';
import InputStd from './../../components/InputStd';
import { FiLogIn } from 'react-icons/fi';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';


export default function Logon() {

  const [login, setLogin] = useState('')
  const [ong, setOng] = useState('');

  function handleChange(e) {
    const inputValue = e.target.value;
    setLogin(inputValue)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3333/session', {
        id: login
      })

      return <Redirect to="/cases" />

    } catch (err) {
      alert(err)
    }
  }

  return (
    <div className="container">
      <form className="section" onSubmit={(e) => handleSubmit(e)}>
        <div className="imgLogin">
          <img src={logo} alt="logo help me" />
        </div>


        <div className="titleLogon">
          <h1>I am ONG</h1>
        </div>

        <div className="input">
          <InputStd className="inputStd" type="text" placeholder="Your ID" onChange={handleChange} />
        </div>

        <div className="buttonLogin">
          <BtnPrimary name="Login" type="submit" />
        </div>

        <div className="linkRegister">
          <Link to="/register"><p><FiLogIn size={16} /> Not yet registered, click here.</p></Link>
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