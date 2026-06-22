import { useEffect, useState } from 'react';

import { Juego, PresentacionJuego, Botones } from '../components';
import { useFetch } from '../hooks/useFetch';


export const GamePage = ({estado=false}) => {

  const urlApi = import.meta.env.VITE_API_URL;
  
  const [jugando, setJugando] = useState(estado);
  const [arrCuadro, setArrCuadro] = useState(null)
  const { data, error, isLoading, consulta } = useFetch()
  useEffect(() => {
    consulta(`${urlApi}/?type=Painting&limit=200&has_image=1`)
  }, [])
  useEffect(() => {
    setArrCuadro(data.data)
  }, [data])
  

  return (
    <>
    <header>
      <h1>Juega con AdivinARTE</h1>
      <h2>Cuanto sabes de pintura</h2>
    </header>

    {
      isLoading ? ("Cargando..."):(
      !jugando ? (
        <PresentacionJuego setJugando={setJugando}/>
      ) : (
        <Juego arrCuadro={ arrCuadro }/>
      ))
    }
    </>
  )
}
