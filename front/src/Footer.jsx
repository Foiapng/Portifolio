import './styles/Footer.css'

function Footer() {

 return(   
    <section className='Footer'>
        <section className='Footer__Contato'>           
            <aside><a href="https://wa.me/5511954240586" target="_blank">+55 (11) 95424-0586</a></aside>
            <aside>Viniciuslima.devcontato@gmail.com</aside>
            <aside><a href="https://github.com/Foiapng/Portifolio" target="_blank">Repositorio Github</a></aside>
            <aside><a href="www.linkedin.com/in/vinicius-lima-3266052bb/" target="_blank">Linkedin</a></aside>
            <aside>Imagens e código foram feitos por mim</aside>
        </section>
        {/* <p className='Footer__Autoria'>Imagens e código foram feitos por mim</p> */}
    </section>
 );
}

export default Footer;