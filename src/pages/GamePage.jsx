import {useState } from 'react';

import { Juego, PresentacionJuego, Botones } from '../components';
export const GamePage =  ({arrCuadro}) => {

  const [jugando, setJugando] = useState(false);
  const presentacionYJuego =()=> {
    if (!arrCuadro) {
      return <p>cargando...</p>
    } else if (!jugando) {
      return <PresentacionJuego setJugando={setJugando}/>
    } else {
      return <Juego arrCuadro={ arrCuadro }/>
    }
  }

  return (
    <>

    {/* {JSON.stringify(data,null,2)} */}
    <header>
        <h1>Juega con<br />
        <span className='destacado'>Adivin<span className='arte'>arte</span></span></h1>
        <hr className='separacion' />
        <h2>¿Cuánto sabes de pintura?</h2>
      </header>
      {
        presentacionYJuego()
      }
    </>
  )
}
