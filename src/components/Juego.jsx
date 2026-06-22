import { randomField, optionsGenerate, getRandomArtwork, getFieldValue } from '../api/cleveland.js'

import { useEffect, useState } from "react";
import { Resultado } from './Resultado.jsx';

import './_juego.scss';

export const Juego = ({arrCuadro}) => {
  const [artwork,setArtwork] = useState(null);
  const [option, setOption] = useState([]);
  const [correctOption, setCorrectOption] = useState(null);
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
      setResponsePoint("¡¡¡Respuesta correcta!!!!!");
      setScore(score+1);
    } else {
      setResponsePoint("¡¡¡Noooo, error!!!")
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

  useEffect(()=>{
    handleClick()

  },[])

  return (
    <>
      {gameOver ? (
        <Resultado score={score} handleReset={handleReset}/>
        
      ) : (
        <div>
          <div className='containerImage'>
            {artwork && <img src={artwork.images.web.url} alt={artwork.title}/>}
          </div>

          <div className='flexContainer columnFC'>
          {option.map((item, index) => (
            <label key={index}>
              <input 
                type="radio" 
                name="opciones" 
                value={item} 
                onChange={handleChange}
                checked={saveOption === item}
                disabled={responsePoint !== null}
              />
              {item}
            </label>
            ))}
          </div>
          {responsePoint && <h3>{responsePoint}</h3>}
          <div className='flexContainer'>
            {<h4>Puntuación: <span className='mayus fw600 color-principal'>{score} puntos</span></h4>}
            {<p>{screenNumber}/10</p>}
          </div>

          <div className='flexContainer centerFC'>

            {artwork && <button onClick={responsePoint === null ? 
              (handleCheck):
              (handleClick)
              } className='boton mayus padBoton borderRad10'>
                {
                responsePoint === null ? 
                ("Responder"):
                ("Seguir jugando")
                }
                </button>}
          </div>
      </div>
      )}
        
      
    </>
  )
}
