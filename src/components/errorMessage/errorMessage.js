import React from 'react';
import './errorMessage.css';
import img from './error.jpg';

const ErrorMesenge = () =>{
   return (
      <div className="rendom-blok img">
      <img   src={img} alt='error'  ></img>
   <span>Something goes wrong</span> 
   </div>
   )
}

export default ErrorMesenge;