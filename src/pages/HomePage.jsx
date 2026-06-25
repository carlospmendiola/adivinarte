import React from 'react'
import { useNavigate } from 'react-router'
import { EmblaCarousel } from '../components/EmblaCarousel'

export const HomePage = () => {
   let navigate = useNavigate()
  const handleClick = async (direccion) => {
    navigate (`/${direccion}`)
    }
  return (
    <>
      <header>
        <h1>Juega con<br />
        <span className='destacado'>Adivin<span className='arte'>arte</span></span></h1>
        <hr className='separacion' />
        <h2>¿Cuánto sabes de pintura?</h2>
        <p className='txt-intro'>Explora el <strong>fascinante mundo de la pintura universal</strong>. Identifica obras maestras, descubre sus autores y pon a prueba <strong>cuánto sabes de la historia del arte</strong>.</p>
      </header>

      <section className='container-Principal'>
        
        <EmblaCarousel/>

        <section className='zona-botones'>
          <button onClick={()=>{handleClick('juego')}} className='boton-juego'>¡Comienza el juego!</button>
          <button onClick={()=>{handleClick('catalogo')}} className='boton-catalogo'>Visita el catálogo</button>
        </section>

      </section>
    </>
  )
}
