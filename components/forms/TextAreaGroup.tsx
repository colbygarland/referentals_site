import { Group } from './Group'
import { Label } from './Label'
import { INPUT_STYLES } from './constants'

interface TextAreaGroupProps {
  label: string
}
export function TextAreaGroup({ label }: TextAreaGroupProps) {
  return (
    <Group>
      <Label>{label}</Label>
      <textarea className={INPUT_STYLES}></textarea>
    </Group>
  )
}
