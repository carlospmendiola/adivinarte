import React from 'react'
import './_resultado.scss';

export const Resultado = ({score,handleReset}) => {
  return (
    <>
      <section className='container-Principal'>
        <div><img src="https://openaccess-cdn.clevelandart.org/1927.1984/1927.1984_web.jpg" alt="Dos remeros"/></div>
        <section className='txt-Finjuego'>
          <h3>¡Juego terminado!</h3>
          <p>Has acertado <span className='destacado'>{score}</span> de 10</p>
        </section>

        <section className='zona-botones'>
        <button onClick={handleReset} className='boton-juego'>Jugar de nuevo</button>
        </section>
      </section>
    </>
  )
}
