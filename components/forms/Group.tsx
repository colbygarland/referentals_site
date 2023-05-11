interface GroupProps {
  children: any
}
export function Group({ children }: GroupProps) {
  return <div className="mb-5">{children}</div>
}
