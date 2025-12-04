import './styles/Home.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import useAnimateRoutes from './hooks/useAnimatedRoutes/index.jsx';
import Footer from './Footer.jsx';

function Home() {
  const navigate = useNavigate();
  const animationClass = useAnimateRoutes()


  return (
    <>
    <section className={animationClass}>
      <section className='Home__Titulo'>
        <h1>Portifolio</h1>
        <h2>Por Vinicius Lima</h2>
      </section>
      <Header className='Header' />
      <section className='Home'>
        <button className='Home__Btn' onClick={() => navigate('/SobreMim') } >Começar o Tour?</button>
      </section>
            <Footer />
    </section>
    </>
  )
}

export default Home
