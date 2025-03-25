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
  const [fadeClass, setFadeClass] = useState('fade-initial'); // Classe inicial

  useEffect(() => {

    const fadeTimeout = setTimeout(() => {
      setFadeClass('fade-out'); // Aplica a classe de fade-out
    }, 2000);

    // Remove o componente de loading após o fade-out (3 segundos)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 4000);

    // Limpa os timeouts ao desmontar o componente
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(loadingTimeout);
    };

  }, []);

  return (
    <>
      {loading ? (
        <div className={fadeClass}>
          <Interface />
        </div>
      ) : (
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
