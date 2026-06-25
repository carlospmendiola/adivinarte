import React from 'react'
import { useGame } from '../hooks/useGame.js';
import { phraseOption } from '../api/cleveland.js';

export const Botones = () => {
  return (
    <section className='zona-botones'>
      {artwork && <button onClick={responsePoint === null ? 
        (handleCheck):
        (handleClick)
        } disabled={saveOption === null}>

        {
          responsePoint === null ? 
            (<span className='boton-juego'>Responder</span>):
            (<span className='boton-catalogo'>Seguir jugando</span>)
        }

      </button>}
    </section>
  )
}
