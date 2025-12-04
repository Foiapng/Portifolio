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
      <section className='SobreMim__FlexContainer'>
        <section className='SobreMim__Nome'>
        <h1 className='SobreMim__Titulo'>Vinicius de Almeida Lima</h1>
        <h2 className='SobreMim__Subtitulo'>Desenvolvedor front-end e artista de jogos</h2>
        </section>

        <section className='SobreMim__Info'>
          <img src='*' className='SobreMim__Foto'/>
          <section className='SobreMim__Texto'>
          <aside className='SobreMim__Descricao'>
            aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
            aaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa
          </aside>
          <h2 className='SobreMim__Subtitulo'>Formações</h2>
          <section className='SobreMim__Educacao'>
          <aside>aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa</aside>
          <aside>aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa</aside>
          </section>
          </section>
      </section>
      
      <section className='SobreMim__Competencias'>
        <h1 className='SobreMim__Subtitulo'>Competências</h1>
        <aside className='SobreMim__Descricao'>
            aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaa
            aaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaa aaaaaaaaaaaa
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