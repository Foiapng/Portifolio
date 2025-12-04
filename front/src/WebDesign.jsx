import './styles/WebDesign.css'
import './styles/BotaoProx.css'
import Header from './Header'
import useAnimateRoutes from './hooks/useAnimatedRoutes/index.jsx';
import Footer from './Footer.jsx';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';


function WebDesign() {
const navigate = useNavigate();
const animationClass = useAnimateRoutes()
const [ativo, setAtivo] = useState (0);

 return(   
  <>
  <section className={animationClass}>
    <Header/>
      <button className='BotaoProx' onClick={() => navigate('/Games') } > Próximo </button>
      <section className='WebDesign__Box'>
    <section className='WebDesign'>
        <h1 className='WebDesign__Titulo'>Alguns projetos que participei</h1>
        <section className='WebDesign__BtnGroup'>
          <button className='WebDesign__Btn' onClick={() => setAtivo(1)}>Cosmica</button>
          <button className='WebDesign__Btn' onClick={() => setAtivo(2)}>Novo Horizonte Ambiental</button>
          <button className='WebDesign__Btn'onClick={() => setAtivo(3)}>Integração APIs</button>
        </section>
        <section className='WebDesign__Toggle'>

          {ativo === 1 &&(
            <section className='WebDesign__Toggle--1'>
            <img src="./Cosmica/Home.png" alt="Home Cosmica" />
            <img src="./Cosmica/Catalogo.png" alt="Catalogo Cosmica" />
            <img src="./Cosmica/Figma.png" alt="Figma Cosmica" />
          </section>
          )}

          {ativo === 2 &&(
          <section className='WebDesign__Toggle--2'>
            <img src="./Novo Horizonte/Login.png" alt="Login Novo Horizonte Ambiental" />
            <img src="./Novo Horizonte/Recuperar.png" alt="Recuperar Senha Novo Horizonte Ambiental" />
            <img src="./Novo Horizonte/Figma.png" alt="Figma Novo Horizonte Ambiental" />
          </section>
          )}

          {ativo === 3 &&(
          <section className='WebDesign__Toggle--3'>
            <img src="./Integracao/TemaEscuro.png" alt="Home no tema escuro Integração de APIs" />
            <img src="./Integracao/TemaRoxo.png" alt="Home no tema roxo Integração de APIs" />
            <img src="./Integracao/Login.png" alt="Login Integração de APIs" />
            <img src="./Integracao/Crud.png" alt="CRUD Integração de APIs" />
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