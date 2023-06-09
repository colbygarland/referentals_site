interface H1Props {
  children: any
}
export function H1({ children }: H1Props) {
  return (
    <h1 className="font-bold text-3xl lg:text-5xl mb-3 lg:mb-6">{children}</h1>
  )
}

interface H2Props {
  children: any
}
export function H2({ children }: H2Props) {
  return <h2 className="text-4xl font-bold mb-20">{children}</h2>
}

interface H3Props {
  children: any
}
export function H3({ children }: H3Props) {
  return <h3 className="">{children}</h3>
}

interface H4Props {
  children: any
}
export function H4({ children }: H4Props) {
  return <h4 className="">{children}</h4>
}

interface H5Props {
  children: any
}
export function H5({ children }: H5Props) {
  return <h5 className="">{children}</h5>
}

interface H6Props {
  children: any
}
export function H6({ children }: H6Props) {
  return <h6 className="">{children}</h6>
}

interface BodyProps {
  children: any
}
export function Body({ children }: BodyProps) {
  return <p className="mb-2">{children}</p>
}
