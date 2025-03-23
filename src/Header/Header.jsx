import styles from './header.module.css';

export default function Header() {

    return (
        <div className={`${styles.header} container mb-4`}>
            <h1 className='p-4 font-weight-bold'>
                <img src="/gym.png" alt="academia" className={`${styles.imagemIcone} me-4`} />
                Descubra seu IMC agora!</h1>
            <p className='fs-5 mb-md-2 '>
                Calcule seu Índice de Massa Corporal e veja o que você pode melhorar para ter uma vida mais equilibrada!
            </p>
            <p className='fs-5'>
                Verifique se você está na faixa ideal para uma vida saudável.
            </p>
        </div>
    )
}