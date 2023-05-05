interface ContainerProps {
  children: any
}
export function Container({ children }: ContainerProps) {
  return <div className="max-w-5xl mx-auto">{children}</div>
}
