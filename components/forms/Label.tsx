interface LabelProps {
  children: any
}
export function Label({ children }: LabelProps) {
  return <label className="font-bold block mb-2">{children}</label>
}
