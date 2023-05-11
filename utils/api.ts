import { Category } from '@/types/category'
import { Review } from '@/types/review'

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
