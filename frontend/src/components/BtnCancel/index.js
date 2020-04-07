import React from 'react';
import './styles.css';

export default function BtnCancel(props) {
  return (
    <button type={props.type} className="BtnCancel" onClick={props.onClick} >{props.name}</button>
  )
}