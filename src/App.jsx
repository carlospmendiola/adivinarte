import { useState } from 'react'
// import './assets/style.scss'
import { Catalogo } from './components/Catalogo'
import { Inicio } from './components/Inicio'
import { Juego } from './components/Juego'
import { Pregunta } from './components/Pregunta'
import { Resultado } from './components/Resultado'
import { getRandomArtwork } from './api/met.js'


function App() {

  const [obra,setObra] = useState(null)
  const handleClick = async () => {
    const pintarObra = await getRandomArtwork();
    setObra(pintarObra);
  }

  return (
    <>
    <header></header>
      <h1>Adivinarte</h1>
{/*       <Inicio/>
      <Catalogo/>
      <Juego/>
      <Pregunta/>
      <Resultado/> */}
      {obra && <p>{obra.title}</p>}
      <button onClick={handleClick}>Pintar obra</button>

    <footer></footer>
    </>
  )
}

export default App
