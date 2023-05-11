import { Category } from '@/types/category'
import { Review, ReviewRequest } from '@/types/review'

export const listReviews = async (): Promise<Review[] | null> => {
  let reviews = null
  try {
    const response = await fetch(`${process.env.API_URL}/reviews`)
    reviews = await response.json()
  } catch (error) {
    console.error(error)
  }
  return reviews
}

export const storeReview = async (
  data: ReviewRequest,
): Promise<Review | null> => {
  let review = null
  try {
    const response = await fetch(`${process.env.API_URL}/reviews/store`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    review = await response.json()
  } catch (error) {
    console.error(error)
  }
  return review
}

export const listCategories = async (): Promise<Category[] | null> => {
  let categories = null
  try {
    const response = await fetch(`${process.env.API_URL}/categories`)
    categories = await response.json()
  } catch (error) {
    console.error(error)
  }
  return categories
}
