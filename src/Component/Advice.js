import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './Advice.css'
const Advice = () => {
  const [adivce,setAdvice] = useState('');
  const fetchAdvice = async()=>{
    await axios.get(`https://api.adviceslip.com/advice`).then((res)=>{
      const advicess = res.data.slip.advice
      setAdvice(advicess)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    fetchAdvice()
  },[])
  return (
    <div className='app'>
      <div className='card'>
      
        <h1 className='heading'>{adivce}</h1>
        <button className='btn' onClick={()=>fetchAdvice()}>Advice</button>
       
      </div>
    
    </div>
  )
}

export default Advice