import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Card } from '../components/Card';

export const CataloguePage = () => {

  const urlApi = import.meta.env.VITE_API_URL;

  const { data, error, isLoading, consulta } = useFetch()
    useEffect(() => {
      consulta(`${urlApi}/?type=Painting&limit=12&has_image=1`)
    }, [])


  return (
    <>
      <header>
        <h1>Juega con<br />
        <span className='destacado'>Adivin<span className='arte'>arte</span></span></h1>
        <hr className='separacion' />
        <h2>Galería del catálogo</h2>
      </header>
    
      {
        isLoading ? <p>cargando</p>
        :
      <section className='catalogo-grid centradoMargin m30-0px'>
      {
        data.data.map((cuadro)=> (
            <Card cuadro={cuadro}/>
        ))
      }
      </section>
      }
    
    </>
  )
}
