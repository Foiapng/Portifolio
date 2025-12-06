import './styles/WebDesign.css'
import Header from './Header'
import useAnimateRoutes from './hooks/useAnimatedRoutes/index.jsx';
import Footer from './Footer.jsx';
import { useState } from 'react';


function WebDesign() {
const animationClass = useAnimateRoutes()
const [ativo, setAtivo] = useState (0);

 return(   
  <>
  <section className={animationClass}>
    <Header/>
      <section className='WebDesign__Box'>
    <section className='WebDesign'>
        <h1 className='WebDesign__Titulo'>Alguns projetos que participei</h1>
        <section className='WebDesign__BtnGroup'>
          <button className='WebDesign__Btn' onClick={() => setAtivo(1)}>Cosmica</button>
          <button className='WebDesign__Btn' onClick={() => setAtivo(2)}>Novo Horizonte Ambiental</button>
        </section>
        <section className='WebDesign__Toggle'>

          {ativo === 1 &&(
            <section className='WebDesign__Toggle--1'>
              <p>Homepage Cosmica</p>
            <img src="./Cosmica/Home.png" alt="Home Cosmica" />
              <p>Catálogo Cosmica</p>
            <img src="./Cosmica/Catalogo.png" alt="Catalogo Cosmica" />
              <p>Figma Cosmica</p>
            <img src="./Cosmica/Figma.png" alt="Figma Cosmica" />
          </section>
          )}

          {ativo === 2 &&(
          <section className='WebDesign__Toggle--2'>
            <p>Login Novo Horizonte Ambiental</p>
            <img src="./Novo Horizonte/Login.png" alt="Login Novo Horizonte Ambiental" />
            <p>Recuperar Senha Novo Horizonte Ambiental</p>
            <img src="./Novo Horizonte/Recuperar.png" alt="Recuperar Senha Novo Horizonte Ambiental" />
            <p>Figma</p>
            <img src="./Novo Horizonte/Figma.png" alt="Figma Novo Horizonte Ambiental" />
          </section>
          )}

        </section>
        </section>
      </section >
            <Footer />
      </section>
    </>
 );
}

export default WebDesign;