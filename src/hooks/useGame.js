import React, { useEffect, useState } from 'react'
import { getFieldValue, getRandomArtwork, optionsGenerate, randomField } from '../api/cleveland';


export const useGame = ({arrCuadro}) => {
    const [artwork,setArtwork] = useState(null);
    const [option, setOption] = useState([]);
    const [correctOption, setCorrectOption] = useState(null);
    const [titleOrArtist, setTitleOrArtist] = useState(null);
    const [saveOption, setSaveOption] = useState(null);
    const [responsePoint, setResponsePoint] = useState(null);
    const [score, setScore] = useState(0);
    const [screenNumber, setScreenNumber] = useState(0)
    const [gameOver, setGameOver] = useState(false)
  
    const handleClick = () => {
      if (screenNumber >= 10) {
        setGameOver(true);
        return
      } 
      
      const paintArtwork = getRandomArtwork(arrCuadro);
      const randoms = randomField();
      const options = optionsGenerate (paintArtwork, arrCuadro, randoms);
      const correctOption = getFieldValue (paintArtwork,randoms)
  
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
  return {
    artwork,
    option,
    correctOption,
    titleOrArtist,
    saveOption,
    responsePoint,
    score,
    screenNumber,
    gameOver,
    handleCheck,
    handleChange,
    handleClick,
    handleReset,
    getOptionClass
  }
}
