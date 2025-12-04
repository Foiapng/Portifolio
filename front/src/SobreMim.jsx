import './styles/SobreMim.css'
import Header from './Header'
import Footer from './Footer.jsx';
import useAnimateRoutes from './hooks/useAnimatedRoutes/index.jsx';

function SobreMim() {
const animationClass = useAnimateRoutes()

 return(  
  <>
    <section className={animationClass}>
    <Header/> 
    <section className='SobreMim'>
        <h1>Vinicius de Almeida Lima</h1>
        <h2>Desenvolvedor front-end e artista de jogos</h2>

        <section className='SobreMim__Info'>
          <img src='*'/>
          <aside>...</aside>
          <h2>Formações</h2>
          <aside>...</aside>
          <aside>...</aside>
        </section>

        <h1>Competências</h1>
      </section>
            <Footer />
      </section>
  </>
 );
}

export default SobreMim;