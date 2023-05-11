import Link from 'next/link'

const DEFAULT =
  'uppercase text-center inline-block px-5 py-3 rounded-md font-bold text-primary transition duration-300 hover:no-underline'

interface ButtonProps {
  href?: string
  onClick?: any
  type?: 'primary' | 'secondary'
  buttonType?: string
  children: any
}
export function Button({
  href,
  onClick,
  type = 'primary',
  children,
  ...props
}: ButtonProps) {
  const buttonType = {
    primary: 'bg-primary-800 hover:bg-primary-600 text-white',
    secondary: 'bg-secondary-100 hover:bg-secondary-200 text-primary-800',
  }[type]
  if (href) {
    return (
      <Link {...props} href={href} className={`${DEFAULT} ${buttonType}`}>
        {children}
      </Link>
    )
  }

  return (
    <button {...props} className={`${DEFAULT} ${buttonType}`} onClick={onClick}>
      {children}
    </button>
  )
}
