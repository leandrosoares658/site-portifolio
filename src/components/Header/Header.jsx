import { useState } from "react";
import "./header.css";
import { useEffect } from "react";


export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="header">
      <div className="header__container">
        <a href="#home" className="logo" onClick={handleClick}>
          Leandro<span className="point">.</span>
        </a>

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

      <nav className={`nav ${open ? "open" : ""}`}>
        <a href="#home" onClick={handleClick}></a>
        <a href="#services" onClick={handleClick}>Serviços</a>
        <a href="#portfolio" onClick={handleClick}>Portfólio</a>
        <a href="#about" onClick={handleClick}>Sobre</a>
      </nav>

    </header>
  );
}
