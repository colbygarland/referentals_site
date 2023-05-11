import { useId } from 'react'
import { Group } from './Group'
import { Label } from './Label'

interface RadioGroupProps {
  label: string
  name: string
}
export function RadioGroup({ label, name }: RadioGroupProps) {
  const id = useId()
  return (
    <Group>
      <Label>{label}</Label>
      <div className="">
        <div className="">
          <label htmlFor={`${id}-1`}>
            <input type="radio" value="1" id={`${id}-1`} name={name} />1 star
          </label>
        </div>
        <div className="">
          <label htmlFor={`${id}-2`}>
            <input type="radio" value="2" id={`${id}-2`} name={name} />2 stars
          </label>
        </div>
        <div className="">
          <label htmlFor={`${id}-3`}>
            <input type="radio" value="3" id={`${id}-3`} name={name} />3 stars
          </label>
        </div>
        <div className="">
          <label htmlFor={`${id}-4`}>
            <input type="radio" value="4" id={`${id}-4`} name={name} />4 stars
          </label>
        </div>
        <div className="">
          <label htmlFor={`${id}-5`}>
            <input type="radio" value="5" id={`${id}-5`} name={name} />5 stars
          </label>
        </div>
      </div>
    </Group>
  )
}
