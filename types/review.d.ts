export interface Review {
  id: number
  review: string
  created_by: string | null
  created_at: string
  updated_at: string
  categories: {
    name: string
    rating: number
  }[]
  rental: {
    id: number
    name: string
    address: string
    type: string
    created_at: string
    updated_at: string
  }
  rating: number
}
