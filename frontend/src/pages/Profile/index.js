import React, { useState, useEffect } from 'react';
import api from './../../services/api';
import { Link, useHistory } from 'react-router-dom';
import logoTransparent from './../../assets/logoTransparent.png';
import BtnPrimary from './../../components/BtnPrimary';
import BtnLogout from './../../components/BtnLogout';
import { FiTrash2 } from 'react-icons/fi'
import './styles.css';

export default function Profile() {

  const history = useHistory();
  const ongLogged = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId')
  const [cases, setCases] = useState([])

  useEffect(() => {
    api.get('/profile', {
      headers: {
        authorization: ongId,
      }
    }).then(response => {
      setCases(response.data)

    })
  }, [ongId])

  async function handleDeleteCase(id) {
    try {
      await api.delete(`/cases/${id}`, {
        headers: {
          authorization: ongId
        }
      })

    } catch (err) {
      alert('Error deleting register, please try again.')
    }
    setCases(cases.filter(e => e.id !== id))
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="mainContent">
      <div className="header">
        <div className="leftContent">
          <img src={logoTransparent} alt="logo" />
          <span>Welcome {ongLogged}</span>
        </div>

        <div className="rightContent">
          <Link to="/cases/new"> <BtnPrimary type="button" value="Register a new case" style={{ width: 264 }} /></Link>
          <BtnLogout type="button" value="Logout" onClick={() => handleLogout} />
        </div>
      </div>
      <h1>Cases</h1>

      <div className="casesContainer">
        {cases.map((e) => {
          return (
            <div className="card" key={e.id}>
              <button className="btnIcon" type="button" onClick={() => handleDeleteCase(e.id)}><FiTrash2 size={20} color="#a8a8b3" /></button>
              <p className="cardTitle">
                Case:
          </p>
              <p>{e.title}</p>
              <p className="cardTitle">
                Briefing:
          </p>
              <p>{e.description}</p>
              <p className="cardTitle">
                Value:
          </p>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(e.value)}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}