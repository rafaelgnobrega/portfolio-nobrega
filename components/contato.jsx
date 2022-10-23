import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/contato.module.css';
import Image from 'next/image';
import Wpp from '../public/wpp.svg';
import FitaDois from '../public/fita2.svg';


export default function Contato() {
    return (
        <div className={style.containercontato} id='contato'>
            <Image src={FitaDois} />
            <div id="contato" className={style.contato}>
                <h2>Contato</h2>
                <form action="https://futormsubmit.co/rafelnobrega6@gmail.com" method="POST" >
                    <div className={style.inputContact}>
                        <label for="name"></label>
                        <input type="text" name="name" id="name" placeholder="Nome" required/>
                    </div>
                    <div className={style.inputContact}>
                        <label for="email"></label>
                        <input type="email" name="email" id="email" placeholder="E-mail" required/>
                    </div>
                    <div className={style.inputContact}>
                        <label for="text"></label>
                        <input type="text" name="text" id="Empresa" placeholder="Empresa" />
                    </div>
                    <div className={style.inputContact}>
                        <label for="text"></label>
                        <input className={style.inputContact} type="text" name="text" id="message" placeholder="Mensagem" required/>
                    </div>
                    <div className={style.enviar}>
                        <button type="submit">Send</button>
                        <p>or</p>
                        <a href="https://api.whatsapp.com/send?1=pt_BR&phone=5513981542326" rel="opener"><Image src={Wpp} /></a>
                    </div>
                </form>
            </div>
        </div>
    )
}