import React from 'react'
import { DetalleCard } from '../components/DetalleCard'
import { useLocation } from 'react-router'

export const DetalleCardPage = ({arrCuadro}) => {
  const location = useLocation()
  console.log('location.state:', location.state)

  if (!location.state) return <p>No hay obra seleccionada</p>
  const cuadro = location.state.cuadro


  return (
    <>
    <header>
        <h1>Juega con<br />
        <span className='destacado'>Adivin<span className='arte'>arte</span></span></h1>
        <hr className='separacion' />
        <h2>Detalle de la Obra</h2>
      </header>
    <DetalleCard cuadro={cuadro} key={cuadro.id}/>
    
    </>
  )
}
