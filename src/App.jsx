import Formulario from './Formulario/Formulario'
import Header from './Header/Header'
import Resultado_tabela from './Resultado_tabela/Resultado_tabela'
import Footer from './Footer/Footer'
import { useState } from 'react'

function App() {
  const [resultadoFinalIMC, setResultadoFinalIMC] = useState();

  return (
    <>
      <Header />
      <Formulario setResultadoIMC={setResultadoFinalIMC} />
      <Resultado_tabela resultadoIMC={resultadoFinalIMC} />
      <Footer />
    </>
  )
}

export default App
