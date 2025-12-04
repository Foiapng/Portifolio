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
        <h1 className='WebDesign__Titulo'>Alguns Sites que participei</h1>
        <section className='WebDesign__BtnGroup'>
          <button className='WebDesign__Btn'>Cosmica</button>
          <button className='WebDesign__Btn'>Novo Horizonte Ambiental</button>
          <button className='WebDesign__Btn'>Integração APIs</button>
        </section>
      </section>
            <Footer />
      </section>
    </>
 );
}

export default WebDesign;