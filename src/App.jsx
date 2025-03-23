import Formulario from './Formulario/Formulario'
import Header from './Header/Header'
import Resultado_tabela from './Resultado_tabela/Resultado_tabela'
import Footer from './Footer/Footer'
import { useState } from 'react'

function App() {
  const [resultadoFinalIMC, setResultadoFinalIMC] = useState();
  const [pesoIdealMinFinal, setPesoIdealMinFinal] = useState();
  const [pesoIdealMaxFinal, setPesoIdealMaxFinal] = useState();

  return (
    <>
      <Header />
      <Formulario setResultadoIMC={setResultadoFinalIMC} setPesoMinimo={setPesoIdealMinFinal} setPesoMaximo={setPesoIdealMaxFinal} />
      <Resultado_tabela resultadoIMC={resultadoFinalIMC} pesoMinimo={pesoIdealMinFinal} pesoMaximo={pesoIdealMaxFinal} />
      <Footer />
    </>
  )
}

export default App
