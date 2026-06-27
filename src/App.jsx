import { useEffect, useState } from 'react'
import './styles/style.scss'
import './App.css'
import { NavBar, Botones } from './components'
import { Route, Routes } from 'react-router'
import { CataloguePage, GamePage, HomePage } from './pages'
import { useFetch } from './hooks/useFetch'
import { DetalleCardPage } from './pages/DetalleCardPage'


function App() {
  // Guuardamos el array de IDs
  // const [arrayId, setArrayId] = useState(null)
  const urlApi = import.meta.env.VITE_API_URL;
  const { data, consulta } = useFetch()

  useEffect(() => {
    consulta(`${urlApi}/?type=Painting&limit=250&has_image=1`)
  }, [])
  return (
    <>
    <main>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/catalogo' element={<CataloguePage arrCuadro={data.data} />} />
        <Route path='/Juego'  element={<GamePage arrCuadro={data.data} />} />
        <Route path='/DetalleCardPage'  element={<DetalleCardPage arrCuadro={data.data} />} />
        </Routes>      
      <footer>
        <p>©Adivinarte 2026.</p>
      </footer>
    </main>
    </>
  )
}

export default App
