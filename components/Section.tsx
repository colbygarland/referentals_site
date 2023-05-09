import { Container } from './Container'

interface SectionProps {
  children: any
  type?: 'default' | 'primary' | 'secondary' | 'tertiary'
  fullWidth?: boolean
}
export function Section({
  children,
  fullWidth,
  type = 'default',
}: SectionProps) {
  const Wrapper = fullWidth ? 'div' : Container
  const backgroundColor = {
    primary: 'bg-primary-800 text-white',
    secondary: 'bg-secondary-100 text-primary',
    tertiary: 'bg-tertiary-400 text-primary',
    default: 'bg-white text-primary',
  }[type]
  return (
    <section className={`px-6 py-12 lg:py-20 ${backgroundColor}`}>
      <Wrapper>{children}</Wrapper>
    </section>
  )
}
