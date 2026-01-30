import { useState } from "react";
import "./header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">Leandro<span className="point">.</span></div>

        <nav className={`nav ${open ? "open" : ""}`}>
          <a href="#home" onClick={handleClick}></a>
          <a href="#services" onClick={handleClick}>Serviços</a>
          <a href="#portfolio" onClick={handleClick}>Portfólio</a>
          <a href="#about" onClick={handleClick}>Sobre</a>
        </nav>

        <button
          className={`menu-toggle ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
