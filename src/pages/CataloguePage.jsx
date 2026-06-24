
import { useState } from 'react';
import { Card } from '../components/Card';

export const CataloguePage = ({arrCuadro}) => {
  const [paginaActual, setPaginaActual] = useState(1)
  if (!arrCuadro) return <p>Cargando...</p>

  const paginaInicio = (paginaActual -1) *12;
  const cuadrosPagina = arrCuadro.slice(paginaInicio, paginaInicio + 12)
  
  return (
    <>
      <header>
        <h1>Juega con<br />
        <span className='destacado'>Adivin<span className='arte'>arte</span></span></h1>
        <hr className='separacion' />
        <h2>Galería del catálogo</h2>
      </header>
      
      {
        !arrCuadro ? <p>cargando...</p>
        :
      <section className='catalogo-grid centradoMargin m30-0px'>
      {
        cuadrosPagina.map((cuadro)=> (
            <Card cuadro={cuadro}/>
        ))
      }
      </section>
      }
      <section className='zona-paginacion'>
        <button className='boton-paginacion' onClick={() => 
        setPaginaActual(paginaActual - 1)
          } disabled={paginaActual === 1}> Anterior 
        </button>
        <button className='boton-paginacion' onClick={() => 
          setPaginaActual(paginaActual + 1)
          } disabled ={paginaActual === Math.ceil(arrCuadro.length/12)}
          > Siguiente&nbsp;</button>
      </section>
    </>
  )
}


