import React from 'react'

export const PresentacionJuego = ({setJugando}) => {

  const handleClick =()=>{
    setJugando(true)
  } 
  
  
  return (
    <section>
      <article className='txt-intro'>
        <p>Pon a prueba tu conocimiento del arte universal con este <strong>quiz de 10 preguntas</strong> sobre las grandes obras de la historia de la pintura.</p>
        <p>Identificarás artistas y nombres de las obras. Al final descubrirás tu <strong>nivel de conocimiento artístico</strong>.</p>
      </article>
      <div><img src="https://openaccess-cdn.clevelandart.org/1960.117/1960.117_web.jpg" alt="Christ and the Virgin in the House at Nazareth" /></div>

      <section className='zona-botones'>
        <button onClick={handleClick} className='boton-juego'>Empezar a jugar</button>
      </section>
    </section>
  )
}
