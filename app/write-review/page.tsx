import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { H1 } from '@/components/Typography'
import { InputGroup } from '@/components/forms/InputGroup'
import { RadioGroup } from '@/components/forms/RadioGroup'
import { SelectGroup } from '@/components/forms/SelectGroup'
import { TextAreaGroup } from '@/components/forms/TextAreaGroup'
import { listCategories, storeReview } from '@/utils/api'

export default async function WriteReview() {
  const categories = await listCategories()
  return (
    <Section>
      <H1>Write a review</H1>
      <form>
        <InputGroup
          label="Address"
          autoComplete="street-address"
          placeholder="Address"
        />
        <SelectGroup
          label="Rental Type"
          options={['House', 'Apartment', 'Townhouse', 'Basement Suite']}
        />
        <TextAreaGroup label="Review" />
        {categories?.map((category, index) => (
          <RadioGroup key={index} label={category.name} name={category.name} />
        ))}
        <Button buttonType="submit">Submit</Button>
      </form>
    </Section>
  )
}
