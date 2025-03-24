import styles from './Interface.module.css';

export default function Interface() {
    return (
        <div className={`${styles.interface} d-flex justify-content-center align-items-center flex-column`}>
            <div>
                <h1 className='p-4 font-weight-bold'>
                    <img src="/gym.png" alt="academia" className={`${styles.imagemIcone} me-4`} />
                    Cálculo de IMC
                </h1>

            </div>
            <div>
                <h3 className='mt-3 fs-5'>Seja bem-vindo a nossa página!</h3>
            </div>
        </div>
    );
}