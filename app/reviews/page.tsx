import { Review } from '@/types/review'

export default async function Reviews() {
  let response = null
  try {
    response = await fetch(`${process.env.API_URL}/reviews`)
    response = await response.json()
  } catch (error) {
    console.error(error)
  }

  return (
    <main className="h-screen bg-teal-400">
      {response?.map((j: Review) => {
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
