import style from '../styles/footer.module.css';

export default function Footer() {
    return(
        <footer className={style.footer}>
        <p className={style.paragrafo}>Feito por <span className={style.meunome}>Rafael Nóbrega</span></p>
    </footer>
    )
}