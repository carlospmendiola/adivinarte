import React from 'react'
import './_resultado.scss';

export const Resultado = ({score,handleReset}) => {

  const niveles = [
    {max:2, imagen:"https://carlospmendiola.com/downloads/Bootcamp-Slider/aciertos-02.jpg", mensaje:<><strong>No tienes ni idea</strong><br/> Nivel: Australopithecus poco evolucionado</>},
    {max:5, imagen:"https://carlospmendiola.com/downloads/Bootcamp-Slider/aciertos-35.jpg", mensaje:<><strong>Algo sabes, pero poco</strong>.<br/> Nivel: concursante de 'La isla de las tentaciones</>},
    {max:8, imagen:"https://carlospmendiola.com/downloads/Bootcamp-Slider/aciertos-68.jpg", mensaje:<><strong>Eres bueno</strong>, sabes de arte. <br/> Nivel: En el rosco de Pasapalabra acertarías la mitad, como mucho...</>},
    {max:10, imagen:"https://carlospmendiola.com/downloads/Bootcamp-Slider/aciertos-910.jpg", mensaje:<><strong>¡Eres un genio!</strong> ¿qué haces perdiendo el tiempo con este juego? <br/> Nivel: Haz algo de provecho para la humanidad...</>},
  ]
    const obtenerNivel = (valor) => {
      return niveles.find(n => valor <= n.max)
    }

    const nivel = obtenerNivel(score)


  return (
    <>
      <section className='container-Principal'>
        <div><img src={nivel.imagen} alt="{nivel.mensaje}"/></div>
        <section className='txt-Finjuego'>
          <h3>¡Juego terminado!</h3>
          <p className='puntuacion'><span className='destacado'>{score}</span> de <span className='destacado'>10</span> aciertos</p>
          <div className="contenedor-mensaje"><p className="mensaje-final">{nivel.mensaje} </p></div>
        </section>

        <section className='zona-botones'>
        <button onClick={handleReset} className='boton-juego'>Jugar de nuevo</button>
        </section>
      </section>
    </>
  )
}
