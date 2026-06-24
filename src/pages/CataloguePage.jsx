
import { useState } from 'react';
import { Card } from '../components/Card';

export const CataloguePage = ({arrCuadro}) => {
  const [paginaActual, setPaginaActual] = useState(1)
  if (!arrCuadro) return <p>Cargando...</p>

  const paginaInicio = (paginaActual -1) *12;
  const cuadrosPagina = arrCuadro.slice(paginaInicio, paginaInicio + 12)
  const totalPaginas = Math.ceil(arrCuadro.length / 12)
  const paginasArray = Array.from({ length: totalPaginas }, (_, i) => i + 1);
  
  return (
    <>
      <header>
        <h1>Juega con<br />
        <span className='destacado'>Adivin<span className='arte'>arte</span></span></h1>
        <hr className='separacion' />
        <h2>Galería del catálogo</h2>
        <p className='txt-intro-catalogo'>Visita nuestra <strong>galería de obras</strong>. Un catálogo de las mejoras obras seleccionadas.</p>
      </header>
      {
        
        !arrCuadro ? <p>cargando...</p>
        :
      
      <section className='catalogo-grid container-catalogo'>
        
      {
        cuadrosPagina.map((cuadro)=> (
            <Card cuadro={cuadro} key={cuadro.id}/>
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


