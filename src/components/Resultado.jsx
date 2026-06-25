import React from 'react'
import './_resultado.scss';

export const Resultado = ({score,handleReset}) => {

  const obtenerMensaje = (valor) => {
    if (valor >= 0 && valor <= 2) {
      return <p className="mensaje-final"><strong>No tienes ni idea</strong>, Nivel cultural:  Austrolopitecus poco evolucionado</p>;
    } else if (valor >= 3 && valor <= 5) {
      return <p className="mensaje-final"><strong>Algo sabes, pero poco</strong>. Nivel: concursante de "La isla de las tentaciones"</p>;
    } else if (valor >= 6 && valor <= 8) {
      return <p className="mensaje-final"><strong>Eres bueno</strong>, sabes de arte. En el rosco de Pasapalabra acertarías la mitad, como mucho...</p>;
    } else if (valor == 9 || valor == 10) {
      return <p className="mensaje-final"><strong>¡Eres un genio!</strong> ¿qué haces perdiendo el tiempo con este juego? Haz algo de provecho para la humanidad...</p>;
    } else {
      return <p className="error">Puntuación no válida.</p>;
    }
  };


  return (
    <>
      <section className='container-Principal'>
        <div><img src="https://openaccess-cdn.clevelandart.org/1927.1984/1927.1984_web.jpg" alt="Dos remeros"/></div>
        <section className='txt-Finjuego'>
          <h3>¡Juego terminado!</h3>
          <p className='puntuacion'><span className='destacado'>{score}</span> de <span className='destacado'>10</span> aciertos</p>
          <div className="contenedor-mensaje"> {obtenerMensaje(score)} </div>
        </section>

        <section className='zona-botones'>
        <button onClick={handleReset} className='boton-juego'>Jugar de nuevo</button>
        </section>
      </section>
    </>
  )
}
