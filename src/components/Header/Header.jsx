import "./header.css";


export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">Leandro</div>


      <nav className="header__nav">
        <a href="#home">Home</a>
        <a href="#services">Serviços</a>
        <a href="#about">Sobre mim</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}