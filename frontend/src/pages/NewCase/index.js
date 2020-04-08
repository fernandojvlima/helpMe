import React, { useState } from 'react';
import api from './../../services/api';
import { useHistory } from 'react-router-dom'
import './styles.css';
import logoTransparent from './../../assets/logoTransparent.png';
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import InputStd from './../../components/InputStd';
import BtnPrimary from './../../components/BtnPrimary';
import BtnCancel from './../../components/BtnCancel';

export default function Register() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    }
    if (title !== '' && description !== '' && value !== '') {
      try {
        const response = await api.post('/cases', data, {
          headers: {
            authorization: localStorage.getItem('ongId')
          }
        })
        alert(`Case has been registered!, ID: ${response.data.id}`)
        history.push('/profile')

      } catch (err) {
        alert('Error registering, please try again!')
      }
    } else {
      alert('Fill all fields before submitting form!')
    }
  }

  function handleCancel() {
    setTitle('')
    setDescription('')
    setValue('')
  }

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
        <Link to="/profile"><p><FiArrowLeft size={16} />  Back to Home</p></Link>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <InputStd type="text" className="inputStd" name="title" placeholder="Title of the Case" onChange={e => setTitle(e.target.value)} />
        <textarea type="textarea" className="textarea" name="description" placeholder="Description" onChange={e => setDescription(e.target.value)} />
        <InputStd type="text" className="inputStd" name="value" placeholder="Value" onChange={e => setValue(e.target.value)} />
        <div className="buttonGroup">
          <BtnCancel type="button" name="Cancel" onClick={() => handleCancel} />
          <BtnPrimary className="btnPrimary" type="submit" value="Register" style={{ width: 260 }} />
        </div>

      </form>
    </div>
  )
}

