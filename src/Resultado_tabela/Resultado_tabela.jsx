import styles from './resultado_tabela.module.css';

export default function resultado_tabela() {

    return (
        <div className={`${styles.resultado} container mb-4`}>
            <h2 className='fw-bold border-bottom border-secondary pb-3'>RESULTADO</h2>

            <span className='fs-5 text-center'>Resultado do IMC:  </span>

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