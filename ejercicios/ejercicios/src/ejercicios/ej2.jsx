import React, { useState } from 'react';



function App() {

  const [visible, setVisible]= useState(true)
  
  const ocultar = () =>{
  visible==true ? setVisible(false) : setVisible(true)
}



  return (



  <div style={{backgroundColor: 'black'}} className="w-screen h-screen flex">

    <button className=' text-white justify-self-center items-center' onClick={ocultar}>Ocultar
        
    </button>
    <h1 className='text-white' style={{display: visible==true ? "block" : "none"}}>HolaMundo</h1>

  </div>


 )
}

export default App
