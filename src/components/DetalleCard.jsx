import './_card.scss'

import React from 'react'
import { useNavigate } from 'react-router'

export const DetalleCard = ({cuadro}) => {
    let navigate = useNavigate()
  const handleClick = async (direccion) => {
    navigate (`/${direccion}`)
    }
  return (
    <>
      <section className='detalleCard'>
        <div><img src={cuadro.images.web.url} alt={cuadro.title}/></div>
        <article className='txt-card'>
          <h3 className='mayus'>{cuadro.title}</h3>
          <p>{cuadro.creators[0]?.description || "Autor desconocido"}</p>
          <p className='descripcion'><>{cuadro.description}</></p>
        </article>
        <section className='zona-paginacion'>
          <button onClick={()=>{handleClick('catalogo')}} className='boton-paginacion'>Volver al catálogo</button>
        </section>
      </section>
    </>
  )
}
