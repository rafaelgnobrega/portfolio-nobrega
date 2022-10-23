import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/projeto.module.css';
import Image from 'next/image';
import BlueBird from '../public/bluebird.svg';
import Onevent from '../public/onevent.svg';
import Cadastro from '../public/cadastro.svg';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function Projetos() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={style.containerprojetos} id='projetos'>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {/* ONEVENT */}
          <Carousel.Item>
            <Image
              className={style.imagem}
              src={Onevent}
              alt="First slide"
            />
            <Carousel.Caption className={style.espaco}>
              <h2 className={style.titulos}>Onevent</h2>
              <p className={style.descricao}>O Onevent é um projeto pessoal de aplicativo mobile, sua interface <br/>foi desenvolvida no FIGMA. <a className={style.link} href="https://www.linkedin.com/feed/update/urn:li:activity:6950876294901293056/" target='_blank'>Visualizar pelo LinkedIn\&gt;</a></p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* BLUEBIRD */}
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={BlueBird}
              alt="Second slide"
            />
            <Carousel.Caption className={style.espaco}>
              <h2 className={style.titulos}>BlueBird</h2>
              <p className={style.descricao}>A BlueBird é um projeto acadêmico que está em andamento, uma seguradora para veículos híbridos e elétricos. O desenvolvimento do  está sendo feito em Next.js com ajuda do Bootstrap.<a className={style.link} href="https://www.linkedin.com/feed/update/urn:li:activity:6987944103636307969/" target='_blank'> Visualizar pelo LinkedIn\&gt;</a></p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* TELA DE CADASTRO */}
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={Cadastro}
              alt="Third slide"
            />
            <Carousel.Caption className={style.espaco}>
              <h2 className={style.titulos}>Tela de Cadastro</h2>
              <p className={style.descricao}>
                Um dos meus primeiros projetos de desenvolvimento web,<br/> utilizando apenas HTML e CSS. <a className={style.link} href="https://rafaelgnobrega.github.io/tela-de-cadastro/" target='_blank'>Visitar site\&gt;</a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>
  );
}

