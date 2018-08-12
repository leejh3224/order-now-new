import { Schema, Model, model, Document } from 'mongoose'
import { MenuSchema } from './Menu'

interface IOrderModel extends Document {}

const OrderSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    menu: MenuSchema,
    order_status: {
      type: String,
      required: true,
      enum: [
        'NOT_CONFIRMED',
        'CONFIRMED',
        'CANCELLED',
        'READY',
        'DELIVERED',
        'FAILED',
      ],
      default: 'NOT_CONFIRMED',
    },
    order_failed_reason: String,
    is_packaged: {
      type: Boolean,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    toObject: {},
  },
)

const THIRY_DAYS_INTO_MS = '2592000000'

// 주문 정보는 30일 후에 소멸
OrderSchema.index({ created_at: 1 }, { expires: THIRY_DAYS_INTO_MS })

const OrderModel: Model<IOrderModel> = model('Order', OrderSchema)

OrderSchema.methods.placeOrder = ({
  username,
  menu,
  is_packaged,
  quantity,
}) => {
  return OrderModel.create({
    username,
    menu,
    is_packaged,
    quantity,
  })
}

export default OrderModel
