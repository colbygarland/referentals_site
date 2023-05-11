import { Group } from './Group'
import { Label } from './Label'
import { INPUT_STYLES } from './constants'

interface SelectGroupProps {
  label: string
  options: string[]
}
export function SelectGroup({ label, options }: SelectGroupProps) {
  return (
    <Group>
      <Label>{label}</Label>
      <select className={INPUT_STYLES}>
        {options.map(option => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </Group>
  )
}
