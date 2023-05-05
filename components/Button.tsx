const DEFAULT =
  'uppercase text-center inline-block px-5 py-3 rounded-md font-bold text-primary transition duration-300'

interface ButtonProps {
  href?: string
  onClick?: any
  type?: 'primary' | 'secondary'
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
    secondary: 'bg-secondary-100 hover:bg-secondary-200',
  }[type]
  if (href) {
    return (
      <a {...props} href={href} className={`${DEFAULT} ${buttonType} duration`}>
        {children}
      </a>
    )
  }

  return (
    <button {...props} className={`${DEFAULT} ${buttonType}`} onClick={onClick}>
      {children}
    </button>
  )
}
