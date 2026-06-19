import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import { Catalogo } from '../components'

export const CataloguePage = () => {

  const urlApi = import.meta.env.VITE_API_URL;

  const { data, error, isLoading, consulta } = useFetch()
    useEffect(() => {
      consulta(`${urlApi}/?type=Painting&limit=1`)
    }, [])


  return (
    <>
    <Catalogo/>
    <p>{JSON.stringify(data)}</p>
    </>
  )
}
