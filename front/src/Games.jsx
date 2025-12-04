import './styles/Games.css'
import Header from './Header'
import Footer from './Footer.jsx';
import useAnimateRoutes from './hooks/useAnimatedRoutes/index.jsx';

function Games() {
const animationClass = useAnimateRoutes()
  
 return(   
  <>
  <section className={animationClass}>
    <Header/>
    <section className='Games'>
        <h1>Pixel Arts e Jogos</h1>
        <h2>--Em Progresso--</h2>
      </section>
            <Footer />
      </section>
  </>
 );
}

export default Games;