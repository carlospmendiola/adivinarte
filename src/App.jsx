import { useState } from 'react'
import './styles/style.scss'
import './App.css'
import { NavBar } from './components'
import { Route, Routes } from 'react-router'
import { CataloguePage, GamePage, HomePage } from './pages'


function App() {
  // Guuardamos el array de IDs
  const [arrayId, setArrayId] = useState(null)


  return (
    <>
      <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/catalogo' element={<CataloguePage/>}/>
          <Route path='/juego' element={<GamePage/>} />
        </Routes>      
      </main>

    <footer></footer>
    </>
  )
}

export default App
