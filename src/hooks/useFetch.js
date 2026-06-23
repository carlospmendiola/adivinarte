import React, { useState } from 'react'

export const useFetch = () => {

  const [data, setData] = useState({})
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

        // let newhhh=[]

        // result.data.forEach(element => {
        //   const newObject={
        //     title:element.title,
        //     img:element.image.web.url,
        //     artist:element.creators[0].description
        //   }
        //   newhhh.push(newObject)
        // });
  const consulta= async (url, opciones)=>{

    let result;

    try {
      const respuesta= await fetch(url, opciones)
      if (respuesta.ok) {
        result=await respuesta.json()
        setData(result)
        setError(null)
        setIsLoading(false)
      } else {
        setData(null)
        setError(result)
        setIsLoading(false)

      }
    } catch (error) {
        setData(null)
        setError(error)
    }
  }
  return {
    data,
    error,
    isLoading,
    consulta
  }
}
