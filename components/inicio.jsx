import style from '../styles/inicio.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import path from 'path';

path.resolve(process.cwd(), 'fonts', 'fonts.conf');
path.resolve(process.cwd(), 'fonts', 'MyFontName.ttf');

import Head from 'next/head';
const FileViewer = dynamic(() => import('react-file-viewer'), {
    ssr: false
});

export default function Navbar() {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
                        <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Space+Mono:ital,wght@0,700;1,400&display=swap" rel="stylesheet"/>
                        </Head>
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
                    </div>
                    )
}