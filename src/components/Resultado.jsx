import React from 'react'

export const Resultado = () => {
  return (
    <>
      <div>
            <h2>¡Juego terminado!</h2>
            <p>Has acertado {score} de 10</p>
            <button onClick={handleReset} className='boton mayus padBoton borderRad10'>Jugar de nuevo</button>
          </div>
    </>
  )
}
