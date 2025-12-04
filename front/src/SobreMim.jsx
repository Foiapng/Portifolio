import './styles/SobreMim.css'
import './styles/BotaoProx.css'
import Header from './Header'
import Footer from './Footer.jsx';
import useAnimateRoutes from './hooks/useAnimatedRoutes/index.jsx';
import { useNavigate } from 'react-router-dom'


function SobreMim() {
const animationClass = useAnimateRoutes()
const navigate = useNavigate();

 return(  
  <>
    <section className={animationClass}>
    <Header/> 
    <button className='BotaoProx' onClick={() => navigate('/WebDesign') } > Próximo </button>
    <section className='SobreMim'>
      <section className='SobreMim__FlexContainer'>
        <section className='SobreMim__Nome'>
        <h1 className='SobreMim__Titulo'>Vinicius de Almeida Lima</h1>
        <h2 className='SobreMim__Subtitulo'>Desenvolvedor front-end e artista de jogos</h2>
        </section>

        <section className='SobreMim__Info'>
          <img src='./Selfie.jpg' className='SobreMim__Foto'/>
          <section className='SobreMim__Texto'>
          <aside className='SobreMim__Descricao'>
            Meu nome é Vinicius, tenho 19 anos, sou artista e Dev focado em Frontend, 
          </aside>
          <h2 className='SobreMim__Subtitulo'>Formações</h2>
          <section className='SobreMim__Educacao'>
          <aside>ETEC de Itaquera <br/> Curso Desenvolvimento de Sistemas 2021 - 2023 <br/>(Ensino Medio e Técnico).</aside>
          <aside>FATEC de Itaquera <br/> Curso Desenvolvimento de Software Multiplataforma 2024 - 2027 <br/>(Ensino Superior Tecnólogo).</aside>
          </section>
          </section>
      </section>
      
      <section className='SobreMim__Competencias'>
        <h2 className='SobreMim__Subtitulo'>Competências</h2>
        <aside className='SobreMim__Descricao'>
            Pacote Office,
            HTML5,
            CSS3,
            JavaScript,
            React.js,
            Design Web,
            Design de paginas
            responsivas,
            Git/GitHub,
            Figma,
            Photoshop e edição
            de imagem,
            Compreensão
            interpessoal,
            Trabalha bem em equipe,
            Flexibilidade,
            Criatividade,
            Boa capacidade de
            resolução de
            problemas,
            Aprendizagem
            rápida

          </aside>
      </section>
      </section>
      </section>
            <Footer />
      </section>
  </>
 );
}

export default SobreMim;