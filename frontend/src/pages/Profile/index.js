import React from 'react';
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
          <p>Welcome Fernando</p>
        </div>

        <div className="rightContent">
          <BtnPrimary type="button" value="Register a new case" />
          <BtnLogout type="button" value="Logout" />
        </div>
      </div>

      <h1>Cases</h1>

      <div className="casesContainer">

        <div className="card">
          <p className="cardTitle">
            <p><FiTrash2 size={16} /></p>
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

        <div className="card">
          <p className="cardTitle">
            <p><FiTrash2 size={16} /></p>
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

        <div className="card">
          <p className="cardTitle">
            <p><FiTrash2 size={16} /></p>
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

        <div className="card">
          <p className="cardTitle">
            <p className="cardIcon"><FiTrash2 size={16} /></p>
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