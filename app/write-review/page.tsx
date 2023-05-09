'use client'

import { Section } from '@/components/Section'
import { H1 } from '@/components/Typography'
import { useEffect, useState } from 'react'

async function createReview() {}

export default function WriteReview() {
  const [address, setAddress] = useState('')
  const [type, setType] = useState('')
  const [review, setReview] = useState('')
  const [categories, setCategories] = useState<string[]>([])

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then(response => response.json())
      .then(cats => {
        const filteredCategories = cats.map((c: { name: string }) => c.name)
        setCategories(filteredCategories)
      })
  }, [])

  return (
    <Section>
      <H1>Write a review</H1>
      {categories.map(c => (
        <>
          <label className="font-bold block">{c}</label>
          <select>
            <option>1 star</option>
            <option>2 stars</option>
            <option>3 stars</option>
            <option>4 stars</option>
            <option>5 stars</option>
          </select>
        </>
      ))}
    </Section>
  )
}
