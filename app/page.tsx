import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { Star } from '@/components/Star'

/* eslint-disable react/no-unescaped-entities */
export default function Reviews() {
  return (
    <>
      <main>
        <section className="py-16 relative">
          <img
            src="hero.webp"
            alt=""
            className="absolute inset-0 h-full w-full object-cover z-0"
          />
          <div className="relative z-10 py-32 lg:py-64 px-6 lg:px-12">
            <Container>
              <h1 className="text-white text-5xl lg:text-7xl text-center font-bold">
                Landlords ask for your references. <br />
                It's time you leave one for them.
              </h1>
              <div className="mt-10 flex gap-6 flex-col md:flex-row md:justify-center">
                <Button href="/write-review" type="secondary">
                  Write a review
                </Button>
                <Button href="/reviews">Read Reviews</Button>
              </div>
            </Container>
          </div>
        </section>
        <Section type="primary">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <div className="text-2xl py-6 border-b-2 md:border-b-0 md:border-r-2 md:pr-12 border-white md:flex-2">
              <p className="">referental</p>
              <p>
                <em>[noun]</em> English
              </p>
            </div>
            <div className="md:flex items-center md:flex-1">
              <p className="text-xl">
                A place to find transparent references of your rental, including
                your landlord and rental experience.
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <h2 className="text-center text-4xl font-bold mb-20">
            Why use Referental?
          </h2>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <div className="text-center">
              <img src="t.png" alt="" className="h-20 w-20 mb-6 mx-auto" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="text-center">
              <img src="t.png" alt="" className="h-20 w-20 mb-6 mx-auto" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="text-center">
              <img src="t.png" alt="" className="h-20 w-20 mb-6 mx-auto" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-20">
            <Button href="/reviews">Read Reviews</Button>
          </div>
        </Section>
        <Section type="secondary">
          <h2 className="text-center text-4xl font-bold mb-16">
            Explore review rentals near you
          </h2>
          <div className="flex gap-2 justify-center mb-6">
            <Star fill="fill-primary" />
            <Star fill="fill-primary" />
            <Star fill="fill-primary" />
            <Star fill="fill-primary" />
            <Star fill="fill-white" />
          </div>
          <div className="text-center max-w-lg mx-auto">
            <p className="mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <p>
              <small>
                Colby Garland <br />
                Grande Prairie, Alberta, Canada
              </small>
            </p>
          </div>
          <div className="flex justify-center mt-20">
            <Button href="/reviews">Read Reviews</Button>
          </div>
        </Section>
      </main>
    </>
  )
}
