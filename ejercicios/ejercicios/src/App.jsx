import React, { useState } from 'react';



function App() {

  const [contador, setContador]= useState(0)
  
  const sumar = () =>{
  setContador(contador+1);
}
const restar = () =>{
  setContador(contador-1)
}



  return (



  <div>

 <button className='block' onClick={sumar}>Sumar</button>
 <button onClick={restar}>restar</button>
 <h1>{contador}</h1>
  

  </div>


 )
}

export default App
