import { Section } from './Section'

function ListItem({ children, href }: { children: any; href: string }) {
  return (
    <li className="text-lg mb-1">
      <a href={href}>{children}</a>
    </li>
  )
}

function Column({
  header,
  children,
  noColumns,
}: {
  header: string
  children: any
  noColumns?: boolean
}) {
  return (
    <div className="max-w-sm">
      <h3 className="font-bold text-3xl mb-4">{header}</h3>
      <ul
        className={`${
          noColumns ? '' : 'grid grid-cols-2 lg:grid-cols-3 gap-2'
        }`}
      >
        {children}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <Section type="primary">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-24">
          <Column header="Top Cities">
            <ListItem href="/reviews?city=Calgary">Calgary</ListItem>
            <ListItem href="/reviews?city=Toronto">Toronto</ListItem>
            <ListItem href="/reviews?city=Los Angeles">Los Angeles</ListItem>
            <ListItem href="/reviews?city=Vancouver">Vancouver</ListItem>
            <ListItem href="/reviews?city=Denver">Denver</ListItem>
            <ListItem href="/reviews?city=Montreal">Montreal</ListItem>
            <ListItem href="/reviews?city=Ottawa">Ottawa</ListItem>
            <ListItem href="/reviews?city=Grande Prairie">
              Grande Prairie
            </ListItem>
            <ListItem href="/reviews?city=Calgary">Calgary</ListItem>
            <ListItem href="/reviews?city=Calgary">Toronto</ListItem>
            <ListItem href="/reviews?city=Calgary">Los Angeles</ListItem>
            <ListItem href="/reviews?city=Calgary">Vancouver</ListItem>
          </Column>
          <Column header="About" noColumns>
            <ListItem href="/about">About Us</ListItem>
          </Column>
          <Column header="Support" noColumns>
            <ListItem href="/support">Support Center</ListItem>
            <ListItem href="/contact">Contact Us</ListItem>
          </Column>
        </div>
        <p className="mt-10">
          &copy; {new Date().getFullYear()} referentals. All rights reserved.
        </p>
      </Section>
    </footer>
  )
}
