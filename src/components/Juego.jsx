import { randomField, optionsGenerate, getRandomArtwork, getFieldValue, phraseOption } from '../api/cleveland.js'

import { useEffect, useState } from "react";
import { Resultado } from './Resultado.jsx';

import './_juego.scss';

export const Juego = ({arrCuadro}) => {
  const [artwork,setArtwork] = useState(null);
  const [option, setOption] = useState([]);
  const [correctOption, setCorrectOption] = useState(null);
  const [titleOrArtist, setTitleOrArtist] = useState(null);
  const [saveOption, setSaveOption] = useState(null);
  const [responsePoint, setResponsePoint] = useState(null);
  const [score, setScore] = useState(0);
  const [screenNumber, setScreenNumber] = useState(0)
  const [gameOver, setGameOver] = useState(false)

// const [game, setGame] = useState(
//   {
//     artwork:null,
//     option:[],
//     correctOption:null,
//     saveOption:null,
//     responsePoint:null,
//     score:0,
//     screenNumber:0,
//     gameOver:false
//   }
//  ) 

  const handleClick = () => {
    if (screenNumber >= 10) {
      setGameOver(true);
      return
    } 
    
    const paintArtwork = getRandomArtwork(arrCuadro);
    const randoms = randomField();
    const options = optionsGenerate (paintArtwork, arrCuadro, randoms);
    const correctOption = getFieldValue(paintArtwork,randoms)

    setArtwork(paintArtwork);
    setOption(options);
    setTitleOrArtist(randoms);
    setCorrectOption(correctOption);
    setScreenNumber(screenNumber+1);
    setResponsePoint(null);
    setSaveOption(null);
    setGameOver(false);
  }

  const handleChange = (ev) => {
    setSaveOption(ev.target.value);
  }

  const handleCheck =()=> {
    if (saveOption === correctOption) {
      setResponsePoint();
      setScore(score+1);
    } else {
      setResponsePoint()
    }
  }
  const handleReset =()=>{
    setArtwork(null);
    setOption([]);
    setCorrectOption(null);
    setSaveOption(null);
    setResponsePoint(null);
    setScore(0);
    setScreenNumber(0);
    setGameOver(false)
  }

  /*
  Este useEffect carga una obra nueva cada vez que gameOver pasa a false.
  Se ejecuta:
  1. Al montar el componente la primera vez (gameOver empieza en false)
  2. Cada vez que gameOver cambia de true a false (al pulsar "Jugar de nuevo")
  No llamamos a handleClick() directamente dentro de handleReset porque en ese
  momento screenNumber todavía tendría el valor antiguo (10), por el retraso
  con el que React aplica los cambios de estado. Al usar este useEffect,
  handleClick() se ejecuta ya en el siguiente render, con screenNumber
  actualizado a 0.
*/
  useEffect(() => {
  if (!gameOver) {
    handleClick()
  }
}, [gameOver])

  const getOptionClass = (item, correctOption, saveOption, responsePoint)=> {
    if (responsePoint === null) {
      return ''
      } else if (item === correctOption) {
      return 'correcta'}
        else if (item === saveOption) {
        return 'incorrecta'
        } else {
        return ''
      }
  }

  return (
    <>
      {gameOver ? (
        <Resultado score={score} handleReset={handleReset}/>
      ) : (
        <section className='container-pregunta'>
          <div className='containerImage'>
            {artwork && <img src={artwork.images.web.url} alt={artwork.title}/>}
          </div>

          <section className='zonaPreguntas'>
          <h3>{phraseOption(titleOrArtist)}</h3>
          {option.map((item, index) => (
            <label key={index} className={getOptionClass(item, correctOption, saveOption, responsePoint)}>
              <input
                type="radio" 
                name="opciones" 
                value={item} 
                onChange={handleChange}
                checked={saveOption === item}
                disabled={responsePoint !== null}
              />
              &nbsp;&nbsp;{item}
            </label>
            ))}
          </section>
          {responsePoint && <h3>{responsePoint}</h3>}
          <section className='zonaPuntuacion'>
            {<p>Puntuación: <span className='puntos'>{score} puntos</span></p>}
            {<p className='conteo'><span className='puntos'>{screenNumber}</span>/10</p>}
          </section>

          <section className='zona-botones'>

            {artwork && <button onClick={responsePoint === null ? 
              (handleCheck):
              (handleClick)
              }>
                {
                responsePoint === null ? 
                (<span className='boton-juego'>Responder</span>):
                (<span className='boton-catalogo'>Seguir jugando</span>)
                }
                </button>}
          </section>
      </section>
      )}
        
      
    </>
  )
}