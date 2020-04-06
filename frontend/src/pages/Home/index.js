import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {

  const [cases, setCases] = useState([])

  useEffect(() => {

    const cases = async function () {

      const cases = await axios.get('http://localhost:3333/cases')
      setCases(cases.data)
    }
  }, [])

  console.log(cases)

  return (
    <h1>Home</h1>

  )
}