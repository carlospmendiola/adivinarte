import React from 'react'

export const PresentacionJuego = ({setJugando}) => {

  const handleClick =()=>{
    setJugando(true)
  } 
  
  
  return (
    <section className='container-Principal'>
      <article className='intro-juego'>
        <p className='txt-intro'>Pon a prueba tu conocimiento del arte universal con este <strong>quiz de 10 preguntas</strong> sobre grandes obras de la historia de la pintura. Identifica artistas y nombres de las obras. Descubre tu <strong>nivel de conocimiento artístico</strong>.</p>
      </article>
      <div><img src="https://openaccess-cdn.clevelandart.org/1960.117/1960.117_web.jpg" alt="Christ and the Virgin in the House at Nazareth" /></div>

      <section className='zona-botones'>
        <button onClick={handleClick} className='boton-juego'>Empezar a jugar</button>
      </section>
    </section>
  )
}
