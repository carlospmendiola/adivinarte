import React from 'react'
import './_card.scss'
import { useNavigate } from 'react-router'

export const Card = ({cuadro}) => {

console.log('cuadro:', cuadro)
  let navigate = useNavigate()
  const handleClick = async (direccion) => {
    navigate(`/${direccion}`, { state: { cuadro } })
    }
  return (
    <>
      <article className='cardContainer masonry card' >
        <div><img src={cuadro.images.web.url} alt={cuadro.title}/></div>
        <article className='txt-card'>
          <h3 className='mayus'>{cuadro.title}</h3>
          <p>{cuadro.creators[0]?.description || "Autor desconocido"}</p>
          <button onClick={()=>{handleClick('DetalleCardPage')}} className='boton-detalle'>Ver detalle</button>
        </article>
      </article>
    </>
  )
}
