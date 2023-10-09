import React, { useState } from 'react';



function App() {

  const [bgColor, setBgColor]= useState("blue")
  
  const cambiarColor = () =>{
  bgColor=='blue' ? setBgColor("black") : setBgColor("blue")
}



  return (



  <div style={{backgroundColor: bgColor}} className="w-screen h-screen flex">

    <button className=' text-white justify-self-center items-center' onClick={cambiarColor}>Ocultar
        
    </button>
    <h1>HolaMundo</h1>

  </div>


 )
}

export default App