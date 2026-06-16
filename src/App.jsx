import { useState } from 'react'
// import './assets/style.scss'
import { Catalogo } from './components/Catalogo'
import { Inicio } from './components/Inicio'
import { Juego } from './components/Juego'
import { Pregunta } from './components/Pregunta'
import { Resultado } from './components/Resultado'
import { randomField, optionsGenerate, getRandomArtwork } from './api/met.js'


function App() {

  const [artwork,setArtwork] = useState(null);
  const [option, setOption] = useState([]);
  const [correctOption, setCorrectOption] = useState(null);
  const [saveOption, setSaveOption] = useState(null);
  const handleClick = async () => {
    const paintArtwork = await getRandomArtwork();
    const randoms = randomField();
    const options = await optionsGenerate (paintArtwork, randoms);
    const correctOption = paintArtwork [randoms]
    // console.log(options);
    setArtwork(paintArtwork);
    setOption(options);
    setCorrectOption(correctOption);
  }

  const handleChange = (ev) => {
    setSaveOption(ev.target.value);
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
      <div>
      {artwork && <img src={artwork.primaryImageSmall} alt={artwork.title}/>}
      </div>
      {/* {artwork && <p>{artwork.title}</p>}
      {artwork && <p>{artwork.artistDisplayName}</p>} */}
      <div>
      {option.map((item, index) => (
        <label key={index}>
          <input type="radio" name="opciones" value={item} onChange={handleChange} />
          {item}
        </label>
      ))}
      </div>
      <button onClick={handleClick}>Pintar obra</button>

    <footer></footer>
    </>
  )
}

export default App
