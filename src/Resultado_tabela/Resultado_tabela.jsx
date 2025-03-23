import { useState } from 'react';
import styles from './resultado_tabela.module.css';
import { useEffect } from 'react';

export default function resultado_tabela({ resultadoIMC }) {


    function mensagemResultado({ resultadoIMC }) {

        const [mensagemIMC, setMensagemIMC] = useState('');

        useEffect(() => {

            if (resultadoIMC < 18.5) {

                setMensagemIMC('Seu IMC indica que voce está abaixo do peso ideal.' +
                    'Considere buscar uma alimentação balanceada e consultar um nutricionista para um plano alimentar adequado.')
    
            } else if (resultadoIMC >= 18.5 && resultadoIMC < 24.9) {
    
                setMensagemIMC('Parabéns! Seu IMC está dentro da faixa considerada saudável.' +
                    'Mantenha hábitos saudáveis com uma boa alimentação e exercícios regulares.')
    
            } else if (resultadoIMC >= 25.0 && resultadoIMC < 29.9) {
    
                setMensagemIMC('Seu IMC indica sobrepeso.' +
                    'Talvez seja interessante adotar hábitos mais saudáveis, como uma dieta equilibrada e exercícios físicos regulares.')
    
            } else if (resultadoIMC >= 30.0 && resultadoIMC < 34.9) {
    
                setMensagemIMC('Seu IMC indica obesidade grau 1.' +
                    'Reavaliar seus hábitos alimentares e incluir mais atividade física pode ser essencial para sua saúde.')
    
            } else if (resultadoIMC >= 35.0 && resultadoIMC < 39.9) {
    
                setMensagemIMC('Seu IMC indica obesidade grau 2 (severa).' +
                    'É altamente recomendável procurar um profissional de saúde para orientações específicas.')
    
            } else if (resultadoIMC >= 40.0) {
    
                setMensagemIMC('Seu IMC indica obesidade grau 3 (mórbida).' +
                    'Essa condição pode trazer sérios riscos à saúde. Procure acompanhamento médico e nutricional o quanto antes.')
    
            }

        }, [resultadoIMC]);

    }


    return (
        <div className={`${styles.resultado} container mb-4`}>
            <h2 className='fw-bold border-bottom border-secondary pb-3'>Resultado do Cálculo</h2>

            <div className='pt-3'>
                <span className='fs-5 text-center'>Resultado do seu IMC: {resultadoIMC} </span>
                <span> {mensagemIMC} </span>
            </div>

            <h5 className='my-4 fs-4 border-top border-secondary  pt-3'>Tabela de referência (IMC)</h5>

            <div className="justify-content-center d-flex mx-auto px-md-5 px-lg-5">
                <ul className="list-unstyled justify-content-center d-flex mx-auto row">
                    <li className="col-6 fs-5 fw-bold text-start border border-1 border-secondary">Faixa de IMC</li>
                    <li className="col-6 fs-5 fw-bold  border border-1 border-secondary ">Classificação</li>
                    <li className="col-6  border border-1 border-secondary text-start">Abaixo de 18,5</li>
                    <li className="col-6  border border-1 border-secondary">Abaixo do peso</li>
                    <li className="col-6  border border-1 border-secondary text-start">18,5 - 24,9</li>
                    <li className="col-6  border border-1 border-secondary ">Peso normal</li>
                    <li className="col-6  border border-1 border-secondary text-start">25,0 - 29,9</li>
                    <li className="col-6  border border-1 border-secondary ">Sobrepeso</li>
                    <li className="col-6  border border-1 border-secondary text-start">30,0 - 34,9</li>
                    <li className="col-6  border border-1 border-secondary">Obesidade grau 1</li>
                    <li className="col-6 border border-1 border-secondary text-start d-flex align-items-center">35,0 - 39,9</li>
                    <li className="col-6 border border-1 border-secondary">Obesidade grau 2 (severa)</li>
                    <li className="col-6 border border-1 border-secondary text-start d-flex align-items-center">Acima de 40,0</li>
                    <li className="col-6 border border-1 border-secondary">Obesidade grau 3 (mórbida)</li>
                </ul>
            </div>
        </div>
    )
}