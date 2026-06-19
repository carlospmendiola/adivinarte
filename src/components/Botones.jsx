import React from 'react'

export const Botones = () => {
  return (
    <div className='flexContainer centerFC'>
      {artwork && <button onClick={handleCheck} className='boton mayus padBoton borderRad10'>Responder</button>}
      <button onClick={handleClick} className='boton mayus padBoton borderRad10'>Seguir jugando</button>
    </div>
  )
}
