import style from '../styles/inicio.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';

const FileViewer = dynamic(() => import('react-file-viewer'), {
    ssr: false
});

export default function Navbar() {
    return (
        <div className={style.containerinicio} id='inicio'>
            <nav className={style.navbar}>
                <div class={style.configlink}>
                    <a class={style.link} href="#inicio" rel="opener" >INÍCIO</a>
                </div>
                <div class={style.param}>
                    <div class={style.configlink}><a class={style.link} href="#skills" rel="opener">SKILLS</a></div>
                    <div class={style.configlink}><a class={style.link} href="#projetos" rel="opener">PROJETOS</a></div>
                    <div class={style.configlink}><a class={style.link} href="#contato" rel="opener">CONTATO</a></div>
                </div>
            </nav>
            <div className={style.sobremim}>
                <div className={style.textos}>
                    <h1 className={style.textoGrande}>OLÁ,</h1>
                    <p className={style.textoSobreMim}>meu nome é Rafael Nóbrega, tenho 21 anos e sou estudante de Análise e Desenvolvimento de Sistemas na Universidade Paulista. Dedicado aos meus estudos, valorizo a produtividade e a qualidade  nos meus códigos.</p>
                </div>
                <a href="/Curriculo.pdf" className={style.botao} rel="opener">currículo</a>
            </div>
        </div>
    )
}