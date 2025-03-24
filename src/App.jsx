import Interface from './Interface/Interface'
import Formulario from './Formulario/Formulario'
import Header from './Header/Header'
import Resultado_tabela from './Resultado_tabela/Resultado_tabela'
import Footer from './Footer/Footer'
import { useEffect, useState } from 'react'


function App() {
  const [resultadoFinalIMC, setResultadoFinalIMC] = useState();
  const [pesoIdealMinFinal, setPesoIdealMinFinal] = useState();
  const [pesoIdealMaxFinal, setPesoIdealMaxFinal] = useState();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? <Interface /> : (
        <>
        <Header />
        <Formulario setResultadoIMC={setResultadoFinalIMC} setPesoMinimo={setPesoIdealMinFinal} setPesoMaximo={setPesoIdealMaxFinal} />
        <Resultado_tabela resultadoIMC={resultadoFinalIMC} pesoMinimo={pesoIdealMinFinal} pesoMaximo={pesoIdealMaxFinal} />
        <Footer />
        </>
      )}
    </>
  )
}

export default App
