import React from 'react';
import { Link } from 'react-router-dom';
import logoTransparent from './../../assets/logoTransparent.png';
import BtnPrimary from './../../components/BtnPrimary';
import BtnLogout from './../../components/BtnLogout';
import { FiTrash2 } from 'react-icons/fi'
import './styles.css';

export default function Profile() {
  return (
    <div className="mainContent">
      <div className="header">
        <div className="leftContent">
          <img src={logoTransparent} alt="logo" />
          <span>Welcome Fernando</span>
        </div>

        <div className="rightContent">
          <Link to="/cases/new"> <BtnPrimary type="button" value="Register a new case" /></Link>
          <BtnLogout type="button" value="Logout" />
        </div>
      </div>

      <h1>Cases</h1>

      <div className="casesContainer">
        <div className="card">
          <button className="btnIcon" type="button"><FiTrash2 size={20} color="#a8a8b3" /></button>
          <p className="cardTitle">
            Case:
          </p>
          <p>Family needing medicine</p>
          <p className="cardTitle">
            Briefing:
          </p>
          <p>Live in this house two old people plus 65+, they have no jobs
          or any source of money. Both need medicine or money.</p>
          <p className="cardTitle">
            Value:
          </p>
          <p>R$ 120,00</p>
        </div>

      </div>
    </div>
  )
}