import { useEffect, useState } from "react";
import "./header.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header__logo">Leandro</div>


      <nav className="header__nav">
        <a href="#home"></a>
        <a href="#services">Serviços</a>
        <a href="#about">Sobre mim</a>
        <a href="#portfolio">Portfolio</a>
      </nav>
    </header>
  );
}
