import { Link } from "react-router";
import "./Header.css";

const defaultLinks = [
  { label: "Quem somos", href: "/quem-somos" },
  { label: "OSCS", href: "/oscs" },
  { label: "Inscrição", href: "/inscricao" },
  { label: "Programação", href: "/programacao" },
  { label: "FAQ", href: "/faq" },
  { label: "Contato", href: "/contato" },
];

const BirdLogo = () => (
  <img
    src="../src/assets/logo_minatech.png"
    style={{ width: "125px", height: "70px" }}
  />
);

export function Header({ links = defaultLinks }) {
  return (
    <header className="header">
      <div className="header-inner">
        <a
          href="/"
          className="header-logo"
          aria-label="MinaTech - Página inicial"
        >
          <BirdLogo />
        </a>

        <nav className="header-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <Link to={link.href} className="header-link">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
