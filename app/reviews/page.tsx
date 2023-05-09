import { Button } from '@/components/Button'
import { Section } from '@/components/Section'
import { Star } from '@/components/Star'
import { Body, H1, H2 } from '@/components/Typography'
import { Review } from '@/types/review'

function Reviews({ reviews }: { reviews: Review[] | null }) {
  if (!reviews) {
    return <H2>Sorry, no results found.</H2>
  }

  return (
    <>
      {reviews.map((review: Review) => {
        const numberOfStars = Math.floor(review.rating)
        return (
          <div key={review.id} className="border border-black py-6 px-4">
            <div className="md:flex gap-8 items-start">
              <div className="flex items-center gap-10 md:flex-col md:gap-2">
                <img
                  src="/house.png"
                  alt=""
                  role="presentation"
                  className="w-16 h-16 mb-6 md:mb-0"
                />
                <div className="text-center inline-block">
                  <div className="flex gap-1 mb-2">
                    {[...Array(numberOfStars)].map((_r, i) => (
                      <Star key={i} fill="fill-black" size="small" />
                    ))}
                  </div>
                  <p>{review.rating} (1)</p>
                </div>
              </div>
              <div>
                <h2 className="font-bold text-black text-lg mb-6">
                  {review.rental.address}
                </h2>
                <Body>{review.review}</Body>
                <a
                  href={`/reviews/${review.id}`}
                  className="mt-6 block underline"
                  aria-label={`Read more about the ${review.rental.address} review`}
                >
                  Read more...
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default async function Page() {
  let reviews = null
  try {
    const response = await fetch(`${process.env.API_URL}/reviews`)
    reviews = await response.json()
  } catch (error) {
    console.error(error)
  }

  return (
    <>
      <Section type="primary">
        <H1>Read rental reviews in your city</H1>
        <Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Body>
        <div className="mt-6">
          <input
            className="bg-white rounded-lg py-2 px-4 text-black placeholder-black font-bold w-full md:w-2/3"
            type="search"
            placeholder="Search rental by address..."
          />
        </div>
      </Section>
      <Section>
        <div className="flex flex-col gap-4 lg:gap-10">
          <Reviews reviews={reviews} />
        </div>
      </Section>
      <Section type="tertiary">
        <div className="text-center">
          <H2>Are you ready to review your rental?</H2>
          <Button href="/write-review">Write a review</Button>
        </div>
      </Section>
    </>
  )
}
