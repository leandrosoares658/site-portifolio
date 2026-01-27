import "./footer.css";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3>Leandro<span>.</span></h3>
          <p>
            Desenvolvedor web focado em criar sites, sistemas e soluções
            digitais que ajudam negócios a crescer.
          </p>
        </div>


        <nav className="footer__nav">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>


        <div className="footer__social">
          <a href="https://www.instagram.com/lean.drosoarespereira/" target="_blank">Instagram</a>
          <a href="https://www.linkedin.com/in/leandro-soares-702140249/" target="_blank">LinkedIn</a>
          <a href="https://github.com/leandrosoares658" target="_blank">GitHub</a>
        </div>
      </div>


      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Leandro Soares. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}