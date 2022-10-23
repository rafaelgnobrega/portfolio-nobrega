// import Head from 'next/head'
import Inicio from '../components/inicio'
import Skills from '../components/skills'
import Projetos from '../components/projetos';
import Contato from '../components/contato';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Inicio />
      <Skills />
      <Projetos />
      <Contato />
      <Footer />
    </>
  )
}
