import { Section } from './Section'

function ListItem({ children }: { children: any }) {
  return <li className="text-lg mb-1">{children}</li>
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
            <ListItem>Calgary</ListItem>
            <ListItem>Toronto</ListItem>
            <ListItem>Los Angeles</ListItem>
            <ListItem>Vancouver</ListItem>
            <ListItem>Calgary</ListItem>
            <ListItem>Toronto</ListItem>
            <ListItem>Los Angeles</ListItem>
            <ListItem>Vancouver</ListItem>
            <ListItem>Calgary</ListItem>
            <ListItem>Toronto</ListItem>
            <ListItem>Los Angeles</ListItem>
            <ListItem>Vancouver</ListItem>
          </Column>
          <Column header="About" noColumns>
            <ListItem>About Us</ListItem>
          </Column>
          <Column header="Support" noColumns>
            <ListItem>Support Center</ListItem>
            <ListItem>Contact Us</ListItem>
          </Column>
        </div>
        <p className="mt-10">
          &copy; {new Date().getFullYear()} referentals. All rights reserved.
        </p>
      </Section>
    </footer>
  )
}
