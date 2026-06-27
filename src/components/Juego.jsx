
import { Resultado } from './Resultado.jsx';
import './_juego.scss';
import { useGame } from '../hooks/useGame.js';
import { phraseOption } from '../api/cleveland.js';

export const Juego = ({arrCuadro}) => {
  const { artwork, option, correctOption, titleOrArtist, saveOption, responsePoint, score, screenNumber, gameOver, handleCheck,  handleChange, handleClick,  handleReset, getOptionClass } = useGame({arrCuadro});

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
              } disabled={saveOption === null}>

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