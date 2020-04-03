import React from 'react';
import './style.css';

export default function BtnPrimary(props) {
  return (
    <button className="btnPrimary">{props.name}</button>
  )
}