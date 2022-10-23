import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/skills.module.css';
import Image from 'next/image';
import Fita from '../public/fita.svg';

export default function Skills() {
    return (
        <div className={style.containerskills} id='skills'>
            <div className={style.containertodasskills}>
                <pre className={style.skills}>skills\&gt;</pre>
                <div className={style.minhasskills}>
                    <p className={style.estilolink}>VS Code</p>
                    <p className={style.estilolink}>Git/GitHub</p>
                    <p className={style.estilolink}>Node.js</p>
                    <p className={style.estilolink}>JavaScript</p>
                    <p className={style.estilolink}>React</p>
                    <p className={style.estilolink}>Next.js</p>
                    <p className={style.estilolink}>HTML</p>
                    <p className={style.estilolink}>CSS/SASS</p>
                    <p className={style.estilolink}>FIGMA</p>
                </div>
                <pre className={style.decoracao}><span className={style.alterafone}>&lt;</span>\_/</pre>
            </div>
            <Image src={Fita} className={style.imagem} />
        </div>
    )
}