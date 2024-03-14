/* eslint-disable no-unused-vars */
import { useState } from 'react'
import micro from './assets/microfono.png'
import './App.css'

function App() {
  const [texto, settexto] = useState("");
 const handleAudio = () =>{
  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = 'es-ES';
  recognition.onresult = event => {
    const transcript = event.results[0][0].transcript;
    settexto(transcript);
  };

  recognition.start();
  settexto('Escuchando...');
 }
  return (
    <>
    <h1>Conversor de Audio a Texto</h1>
    <button className='btn-micro' onClick={handleAudio} ><img src={micro} className='img-micro'></img></button>
    <h2>{texto}</h2>
    </>
  )
}

export default App
