import styles from './footer.module.css';

export default function Footer() {

    return (
        <div className={`${styles.footer} container`}>
            <footer class="pt-3">

                <h4 class="text-center fw-bold fs-6 ">2025 &copy; Calculo do IMC - Todos os direitos reservados.</h4>
                <p class="text-center fw-bold fs-6 fst-italic">Desenvolvido por Vinicius Baptista</p>

            </footer>
        </div>
    )
}