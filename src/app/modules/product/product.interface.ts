export type TProductImg = {
  altText: string
  url: string
}
export type TProduct = {
  category: string
  productName: string
  brand: string
  price: number
  stockQuantity: number
  soldCount: number
  isAvailable: boolean
  productImagesLink: TProductImg[]
  features: object[]
  specifications: object[]
  extraInfo?: object[]
  description: string
  rating?: number
}
