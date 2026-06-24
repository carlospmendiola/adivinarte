import React from 'react'
import './_card.scss'

export const Card = ({cuadro}) => {
  return (
    <>
      <article className='cardContainer masonry card' >
        <div><img src={cuadro.images.web.url} alt={cuadro.title}/></div>
        <article className='txt-card'>
          <h3 className='mayus'>{cuadro.title}</h3>
          <p>{cuadro.creators[0]?.description || "Autor desconocido"}</p>
        </article>
      </article>
    </>
  )
}
