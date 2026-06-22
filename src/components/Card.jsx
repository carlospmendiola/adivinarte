import React from 'react'
import './_card.scss'

export const Card = ({cuadro}) => {
  return (
    <>
      <article className='cardContainer masonry card' key={cuadro.id}>
        <div><img src={cuadro.images.web.url} alt={cuadro.title}/></div>
        <div className='flexContainer centerFC columnFC pad15'>
          <h3 className='mayus'>{cuadro.title}</h3>
          <p>{cuadro.creators[0]?.description || "Autor desconocido"}</p>
        </div>
      </article>
    </>
  )
}
