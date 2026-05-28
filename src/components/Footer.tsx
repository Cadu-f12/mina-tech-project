import './Footer.css'

interface ContactItem {
  icon: React.ReactNode
  label: string
}

interface FooterProps {
  title?: string
  contacts?: ContactItem[]
  instagramHandle?: string
  instagramUrl?: string
}

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
  </svg>
)

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
)

const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const defaultContacts: ContactItem[] = [
  { icon: <PhoneIcon />, label: '(31) 99999-9999' },
  { icon: <EmailIcon />, label: 'contato@minatech.com.br' },
  { icon: <LocationIcon />, label: 'Belo Horizonte, MG' },
]

export function Footer({
  title = 'MinaTech',
  contacts = defaultContacts,
  instagramHandle = '@minatech',
  instagramUrl = 'https://instagram.com/minatech',
}: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h3 className="footer-title">{title}</h3>
          <div className="footer-contacts">
            {contacts.map((item, i) => (
              <div key={i} className="contact-item">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="instagram-card" 
        >
          <InstagramIcon />
          <p>Nos siga no Instagram</p>
          <p><strong>{instagramHandle}</strong></p>
        </a>
      </div>
    </footer>
  )
}
