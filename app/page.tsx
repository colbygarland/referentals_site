import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Review } from '@/types/review'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const response = await fetch(`${process.env.API_URL}/reviews`)
  const json = await response.json()

  return (
    <main className="h-screen bg-teal-400">
      {json.map((j: Review) => {
        return (
          <div key={j.id}>
            <p>{j.review}</p>
            <p>{j.rental.address}</p>
          </div>
        )
      })}
    </main>
  )
}
