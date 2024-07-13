import QueryBuilder from '../../builder/QueryBuilder'
import { productSearchableFields } from './product.constant'
import { TProduct } from './product.interface'
import { Product } from './product.model'

const createProduct = async (payload: TProduct) => {
  const result = await Product.create(payload)
  return result
}

const getAllProducts = async (query: Record<string, unknown>) => {
  let baseQuery = Product.find().populate('category')
  if (query.maxPrice && query.minPrice) {
    baseQuery = Product.find({
      price: { $lte: Number(query.maxPrice), $gte: Number(query.minPrice) },
    })
  } else if (query.maxPrice) {
    baseQuery = Product.find({ price: { $lte: Number(query.maxPrice) } })
  } else if (query.minPrice) {
    baseQuery = Product.find({ price: { $gte: Number(query.minPrice) } })
  }
  const productQuery = new QueryBuilder(baseQuery, query)
    .search(productSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()
  const result = await productQuery.modelQuery
  return result
}

const getSingleProduct = async (productId: string) => {
  const result = await Product.findById(productId)
  return result
}
const getBestSellingProducts = async () => {
  const result = await Product.find({}).sort('-soldCount').limit(4)
  return result
}

const updateProduct = async (productId: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(productId, payload, {
    new: true,
  })
  return result
}
const deleteProduct = async (productId: string) => {
  const result = await Product.findByIdAndUpdate(
    productId,
    { isDeleted: true },
    { new: true },
  )
  return result
}

// const returnCar = async (payload: TReturnCar) => {
//   const session = await mongoose.startSession()
//   try {
//     await session.startTransaction()
//     const booking = await Booking.findById(payload.bookingId)
//     if (!booking) {
//       throw new AppError(httpStatus.NOT_FOUND, 'Booking does not exist!')
//     }

//     const updatedCar = await Car.findByIdAndUpdate(
//       booking.car,
//       {
//         status: 'available',
//       },
//       { new: true },
//     )

//     const time = calcTotalDuration(booking.startTime, payload.endTime)
//     const price = time * (updatedCar?.pricePerHour as number)
//     const uodatedBookingData = {
//       endTime: payload.endTime,
//       totalCost: price,
//     }

//     const updatedBooking = await Booking.findByIdAndUpdate(
//       payload.bookingId,
//       uodatedBookingData,
//       { new: true },
//     )
//       .populate('car')
//       .populate('user')

//     await session.commitTransaction()
//     await session.endSession()

//     return updatedBooking
//   } catch (err: any) {
//     await session.abortTransaction()
//     await session.endSession()
//     throw new Error(err.message)
//   }
// }

export const ProductService = {
  createProduct,
  getBestSellingProducts,
  getSingleProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
}
