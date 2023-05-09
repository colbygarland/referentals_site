import Link from 'next/link'
import { Button } from './Button'
import { Container } from './Container'

function MenuItem({ children, href }: { children: any; href: string }) {
  return (
    <li>
      <Link href={href} className="text-lg font-semibold uppercase">
        {children}
      </Link>
    </li>
  )
}

export function Header({ mode = 'dark' }: { mode?: 'light' | 'dark' }) {
  const bg = {
    light: '',
    dark: 'bg-primary-800 text-white border-b-secondary-100 border-b',
  }[mode]
  return (
    <header className={`${bg} py-4 px-2 lg:py-10 lg:sticky lg:top-0`}>
      <Container>
        <div className="lg:flex lg:items-center lg:gap-6">
          <Link href="/">
            <img
              src={`logo-${mode}.png`}
              alt="Referentals logo"
              className="w-60 "
            />
          </Link>
          <nav>
            <ul className="lg:flex lg:gap-6 lg:relative lg:top-2">
              <MenuItem href="/reviews">Read reviews</MenuItem>
              <MenuItem href="/about-us">About us</MenuItem>
              <MenuItem href="/blog">Blog & resources</MenuItem>
            </ul>
          </nav>
          <div className="lg:ml-auto lg:relative lg:top-2">
            {' '}
            <Button type="secondary" href="/write-review">
              Write a review
            </Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
