import React from 'react';
import './styles.css'

export default function InputStd(props) {
  return (
    <input className={props.className} name={props.name} id={props.id} type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
  )
}