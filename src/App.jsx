import './App.css'
import './assets/style.css'
import { Catalogo } from './components/Catalogo'
import { Inicio } from './components/Inicio'
import { Juego } from './components/Juego'
import { Pregunta } from './components/Pregunta'
import { Resultado } from './components/Resultado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header></header>
      <h1>Adivinarte</h1>
      <Inicio/>
      <Catalogo/>
      <Juego/>
      <Pregunta/>
      <Resultado/>

    <footer></footer>
    </>
  )
}

export default App
