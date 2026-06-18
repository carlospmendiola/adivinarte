
import { randomField, optionsGenerate, getRandomArtwork } from '../api/met.js'

import { useEffect, useState } from "react";


export const Juego = () => {
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

  // useEffect(()=>{
  //   getRandomArtwork()

  // },[])

  return (
    <>

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
          {responsePoint && <h3>{responsePoint}</h3>}
          {<h2>Puntuación: <span className='mayus fw600 color-principal'>{score} puntos</span></h2>}

          <div className='flexContainer centerFC'>
            
            {artwork && <button onClick={handleCheck} className='boton mayus padBoton borderRad10'>Responder</button>}
            <button onClick={handleClick} className='boton mayus padBoton borderRad10'>Seguir jugando</button>
          </div>
      </div>
        
      
    </>
  )
}
