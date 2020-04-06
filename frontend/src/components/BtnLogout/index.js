import React from 'react';
import { FiPower } from 'react-icons/fi'
import './styles.css';

export default function BtnLogout(props) {
  return (
    <button type={props.type} className="BtnLogout" onClick={props.onClick}><FiPower size={16} /></button>
  )
}