import './Header.css'

interface NavLink {
  label: string
  href: string
}

interface HeaderProps {
  links?: NavLink[]
}

const defaultLinks: NavLink[] = [
  { label: 'Quem somos', href: '#quem-somos' },
  { label: 'OSCS', href: '#oscs' },
  { label: 'Inscrição', href: '#inscricao' },
  { label: 'Programação', href: '#programacao' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const BirdLogo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path
      d="M20 65 C25 45, 45 30, 70 20 C65 35, 55 42, 50 50 C60 45, 75 40, 85 25 C82 50, 65 65, 45 70 C50 75, 58 78, 65 75 C55 85, 35 85, 20 65Z"
      fill="#C0392B"
    />
    <path
      d="M20 65 C22 72, 28 78, 35 80 C30 72, 25 68, 20 65Z"
      fill="#A93226"
    />
  </svg>
)

export function Header({ links = defaultLinks }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="header-logo" aria-label="MinaTech - Página inicial">
          <BirdLogo />
          <span className="header-brand">MinaTech</span>
        </a>

        <nav className="header-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="header-link">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
