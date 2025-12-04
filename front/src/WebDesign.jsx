import './styles/WebDesign.css'
import Header from './Header'
import useAnimateRoutes from './hooks/useAnimatedRoutes/index.jsx';
import Footer from './Footer.jsx';

function WebDesign() {
const animationClass = useAnimateRoutes()
 return(   
  <>
  <section className={animationClass}>
    <Header/>
    <section className='WebDesign'>
        <h1>Alguns Sites que participei</h1>
        <section>
          <button>Cosmica</button>
          <button>Novo Horizonte Ambiental</button>
          <button>Integração APIs</button>
        </section>
      </section>
            <Footer />
      </section>
    </>
 );
}

export default WebDesign;