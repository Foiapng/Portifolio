import './styles/Footer.css'

function Footer() {

 return(   
    <section className='Footer'>
        <section className='Footer__Contato'>           
            <aside><a href="https://wa.me/5511954240586" target="_blank">+55 (11) 95424-0586</a></aside>
            <aside><a href="mailto:viniciuslima.devcontato@gmail.com" target="_blank">Viniciuslima.devcontato@gmail.com</a></aside>
            <aside><a href="https://github.com/Foiapng/Portifolio" target="_blank">Repositorio Github</a></aside>
            <aside><a href="https://www.linkedin.com/in/vinicius-lima-3266052bb" target="_blank">Linkedin</a></aside>
        </section>
        <aside>Site feito em React + Vite, imagens e código feitos por mim</aside>
    </section>
 );
}

export default Footer;