import { useState } from "react";
import { Link } from "react-router";
import "./Header.css";
import logoMinaTech from "../assets/logo_minatech.png";

const defaultLinks = [
  { label: "Quem somos", href: "/quem-somos" },
  { label: "OSCS", href: "/oscs" },
  { label: "Programação", href: "/programacao" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

export function Header({ links = defaultLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = "primary-navigation";

  const toggleMenu = () => {
    setIsOpen((currentState) => !currentState);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${isOpen ? "header--open" : ""}`}>
      <div className="header-inner">
        <div className="header-bar">
          <Link
            to="/"
            className="header-logo"
            aria-label="MinaTech - Pagina inicial"
            onClick={closeMenu}
          >
            <img src={logoMinaTech} alt="" className="header-logo-image" />
          </Link>

          <Link to="/inscricao" className="header-cta" onClick={closeMenu}>
            Faça parte
          </Link>

          <button
            className="header-menu-button"
            type="button"
            aria-controls={menuId}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            onClick={toggleMenu}
          >
            <span className="header-menu-line" aria-hidden="true" />
            <span className="header-menu-line" aria-hidden="true" />
            <span className="header-menu-line" aria-hidden="true" />
          </button>
        </div>

        <nav
          id={menuId}
          className="header-nav"
          aria-label="Navegacao principal"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="header-link"
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
