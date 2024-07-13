export type TProductImg = {
  altText: string
  url: string
}
export type TProduct = {
  categoryId: string
  productName: string
  brand: string
  price: number
  stockQuantity: number
  soldCount: number
  isAvailable: boolean
  productImagesLink: TProductImg[]
  features: object[]
  specifications: object[]
  extraInfo: object[]
  description: string
  isDeleted: boolean
}

export type TReturnCar = {
  bookingId: string
  endTime: string
}
