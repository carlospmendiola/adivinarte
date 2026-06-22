import React from 'react'

export const PresentacionJuego = ({setJugando}) => {

  const handleClick =()=>{
    setJugando(true)
  } 
  
  
  return (
    <section>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, iure iusto qui porro sed illo, voluptate, nisi aliquid corporis modi dolorem sequi impedit consequatur excepturi non? Consequatur nulla explicabo praesentium.</p>
      <img/>

      <div  className='flexContainer centerFC'>
        <button onClick={handleClick} className='boton mayus padBoton borderRad10'>EMPEZAR A JUGAR</button>
      </div>
    </section>
  )
}
