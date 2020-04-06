import React from 'react';
import './styles.css'

export default function InputStd(props) {
  return (
    <input className="inputStd" type={props.type} placeholder={props.placeholder} />
  )
}