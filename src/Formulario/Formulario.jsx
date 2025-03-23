import { useState } from 'react';
import styles from './formulario.module.css';
import { useEffect } from 'react';

export default function Formulario({ setResultadoIMC, setPesoMinimo, setPesoMaximo }) {

    const [alturaFinal, setAlturaFinal] = useState();
    const [pesoFinal, setPesoFinal] = useState();
    const idealMinimoIMC = 18.5;
    const idealMaximoIMC = 24.9;

    function calculoIMC() {

        if (alturaFinal && pesoFinal) {

            const pesoNumero = parseFloat(pesoFinal);
            const alturaNumero = parseFloat(alturaFinal);

            const imc = pesoNumero / (alturaNumero * alturaNumero);

            const imcFormatado = imc.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

            setResultadoIMC(imcFormatado);

            const pesoIdealMin = idealMinimoIMC * (alturaNumero * alturaNumero);
            const pesoIdealMax = idealMaximoIMC * (alturaNumero * alturaNumero);

            setPesoMinimo(pesoIdealMin.toFixed(0));
            setPesoMaximo(pesoIdealMax.toFixed(0));
        }

    }

    function valorAltura(event) {
        setAlturaFinal(event.target.value);
    }

    function valorPeso(event) {
        setPesoFinal(event.target.value);
    }

    useEffect(() => {
        calculoIMC();

    }, [alturaFinal, pesoFinal]);

    return (
        <div className={`${styles.formulario} container mb-4`}>

            <form className='d-flex justify-content-center flex-column align-items-center'>
                <label className='form-label fw-bold fs-5'>Selecione a sua altura:</label>

                <div className="row">
                    <div className="col-12">
                        <select className='form-select' onChange={valorAltura} defaultValue="">
                            <option value="" disabled>
                                Clique aqui
                            </option>
                            {Array(96)
                                .fill(0)
                                .map((_, i) => {
                                    const altura = (1.20 + i * 0.01).toFixed(2);

                                    return (
                                        <option key={altura} value={altura}>
                                            {altura}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                </div>

                <br />

                <label className='form-label fw-bold fs-5'>Selecione o seu peso:</label>

                <div className="row">
                    <div className="col-12">
                        <select className='form-select' onChange={valorPeso} defaultValue="">
                            <option value="" disabled>
                                Clique aqui
                            </option>
                            {Array(91)
                                .fill(0)
                                .map((_, i) => {
                                    const peso = 30 + i * 1;

                                    return (
                                        <option key={peso} value={peso}>
                                            {peso}
                                        </option>
                                    );
                                })}
                        </select>
                    </div>
                </div>

                {/* <h1>(Resultado apenas para teste) O seu IMC é: {resultadoIMC} </h1> */}
            </form>

        </div>

    )
}