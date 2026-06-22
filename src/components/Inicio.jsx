import React from 'react'
import { NavLink, useNavigate, useNavigationType } from 'react-router';

export const Inicio = () => {
  let navigate = useNavigate()
  const handleClick = async (direccion) => {
    navigate (`/${direccion}`)
    
      // if (screenNumber >= 10) {
      //   setGameOver(true);
      //   return
      // } 
      
      // const paintArtwork = await getRandomArtwork();
      // const randoms = randomField();
      // const options = await optionsGenerate (paintArtwork, randoms);
      // const correctOption = paintArtwork [randoms]
      
      // setArtwork(paintArtwork);
      // setOption(options);
      // setCorrectOption(correctOption);
      // setScreenNumber(screenNumber+1);
      // setResponsePoint(null);
      // setSaveOption(null);
      // setGameOver(false);
    }

  return (
    <>
    <section>
      <h1>Juega con Adivinarte</h1>
      <h2>Pon a práctica tu conocimiento de arte</h2>
      <p>Explicación de la app: Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nemo ratione porro sint iure nihil dignissimos accusamus eos laborum illum?</p>
      <div className='containerImage'>
        <img src="https://images.metmuseum.org/CRDImages/ep/original/DT11876.jpg" alt="adsasda"/>
      </div>

      <div className='flexContainer'>
        <button onClick={()=>{handleClick('juego')}} className='boton mayus padBoton borderRad10'>Comienza el juego!!</button>
        <button onClick={()=>{handleClick('catalogo')}} className='boton mayus padBoton borderRad10'>Visita el catálogo</button>
      </div>
      {/* <section>
        <p><NavLink
                to='/juego'
                className={({ isActive }) => isActive ? 'nombreClase' : ''}>
                Comienza el juego
            </NavLink></p>
        <p><NavLink
                to='/catalogo'
                className={({ isActive }) => isActive ? 'nombreClase' : ''}>
                Catalogo cuadros
            </NavLink></p>
      </section> */}
    </section>
    </>
  )
}
