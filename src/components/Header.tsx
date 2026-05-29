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
  <img src="../src/assets/logo_minatech.png" style={{ width: '125px', height: '70px' }}/>
)

export function Header({ links = defaultLinks }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="/" className="header-logo" aria-label="MinaTech - Página inicial">
          <BirdLogo />
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
