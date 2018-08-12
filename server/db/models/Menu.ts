import { Schema, Model, model, Document } from 'mongoose'

interface IMenuModel extends Document {}

const listAmount = ['없이', '보통', '적게', '많이']

const QuantityOption = {
  name: {
    type: String,
    required: true,
  },
  number_of_shots: {
    type: Number,
    required: true,
    default: 1,
  },
}

const AmountOption = {
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    enum: listAmount,
    required: true,
    default: 'common',
  },
}

export const OptionSchema: Schema = new Schema(
  {
    ice: {
      type: String,
      enum: listAmount,
      required: true,
      default: 'common',
    },
    coffee: QuantityOption,
    syrup: [QuantityOption],
    whipping_cream: {
      type: String,
      enum: listAmount,
      required: true,
      default: 'common',
    },
    drizzle: [AmountOption],
    user_request: String,
  },
  {
    _id: false,
    timestamps: false,
    versionKey: false,
    toObject: {},
  },
)

export const MenuSchema: Schema = new Schema(
  {
    store_id: {
      type: Schema.Types.ObjectId,
      ref: 'Store',
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    size: {
      type: String,
      required: true,
      default: 'regular',
    },
    cup: {
      type: String,
      required: true,
      default: '일회용컵',
    },
    options: OptionSchema,
  },
  {
    timestamps: true,
    toObject: {},
  },
)

const MenuModel: Model<IMenuModel> = model('Menu', MenuSchema)

export default MenuModel
