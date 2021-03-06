import React from 'react';
import './style.css';

export default function BtnPrimary(props) {
  return (
    <button className="btnPrimary" name={props.name} type={props.type} style={props.style}> {props.value} </button>
  )
}