import { useState } from 'react'
import './assets/style.scss'
import './App.css'
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
  const [reponsePoint, setReponsePoint] = useState(null);
  const [score, setScore] = useState(0);
  const [screenNumber, setScreenNumber] = useState(0)
  const [gameOver, setGameOver] = useState(false)

  const handleClick = async () => {
    if (screenNumber >= 10) {
      setGameOver(true);
      return
    } 
    
    const paintArtwork = await getRandomArtwork();
    const randoms = randomField();
    const options = await optionsGenerate (paintArtwork, randoms);
    const correctOption = paintArtwork [randoms]
    
    setArtwork(paintArtwork);
    setOption(options);
    setCorrectOption(correctOption);
    setScreenNumber(screenNumber+1);
    setReponsePoint(null);
    setSaveOption(null);
    setGameOver(false);
  }

  const handleChange = (ev) => {
    setSaveOption(ev.target.value);
    
  }

  const handleCheck =()=> {
    if (saveOption === correctOption) {
      setReponsePoint("¡¡¡Respuesta correcta!!!!!");
      setScore(score+1);
    } else {
      setReponsePoint("¡¡¡Noooo, error!!!")
    }
  }
  const handleReset =()=>{
    setArtwork(null);
    setOption([]);
    setCorrectOption(null);
    setSaveOption(null);
    setReponsePoint(null);
    setScore(0);
    setScreenNumber(0);
    setGameOver(false)
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
      <main>
        {gameOver ? (
          <div>
            <h2>¡Juego terminado!</h2>
            <p>Has acertado {score} de 10</p>
            <button onClick={handleReset} className='boton mayus padBoton borderRad10'>Jugar de nuevo</button>
          </div>
          ) : (
            <div>
          <div className='containerImage'>
            {artwork && <img src={artwork.primaryImageSmall} alt={artwork.title}/>}
          </div>

          <div className='flexContainer column'>
          {option.map((item, index) => (
            <label key={index}>
              <input 
                type="radio" 
                name="opciones" 
                value={item} 
                onChange={handleChange}
                checked={saveOption === item}
              />
              {item}
            </label>
            ))}
          </div>
          {reponsePoint && <h3>{reponsePoint}</h3>}
          {<h2>Puntuación: <span className='mayus fw600 color-principal'>{score} puntos</span></h2>}

          <div className='flexContainer'>
            
            {artwork && <button onClick={handleCheck} className='boton mayus padBoton borderRad10'>Responder</button>}
            <button onClick={handleClick} className='boton mayus padBoton borderRad10'>Seguir jugando</button>
          </div>
        </div>
        )}
      
      </main>

    <footer></footer>
    </>
  )
}

export default App
