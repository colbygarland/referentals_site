import { HTMLInputTypeAttribute } from 'react'
import { Group } from './Group'
import { Label } from './Label'
import { INPUT_STYLES } from './constants'

interface InputGroupProps {
  label: string
  type?: HTMLInputTypeAttribute
  placeholder?: string
  autoComplete?: string
}
export function InputGroup({
  label,
  type = 'text',
  placeholder,
  autoComplete,
}: InputGroupProps) {
  return (
    <Group>
      <Label>{label}</Label>
      <input
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={INPUT_STYLES}
      />
    </Group>
  )
}
