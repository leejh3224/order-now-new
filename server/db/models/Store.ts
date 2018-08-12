import { Schema, Model, model, Document } from 'mongoose'
import { MenuSchema } from './Menu'

interface IStoreModel extends Document {}

const StoreSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    location: {
      type: {
        type: String,
        default: 'Point',
      },
      coordinates: [Number],
    },
    facade_image: String,
    phone_number: {
      type: String,
      required: true,
    },
    menus: [MenuSchema],
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Order',
      },
    ],
  },
  {
    timestamps: true,
    toObject: {},
  },
)

StoreSchema.index({ location: '2dsphere' })

const StoreModel: Model<IStoreModel> = model('Store', StoreSchema)

StoreSchema.methods.findNearbyStores = (lat: number, lon: number) => {
  return StoreModel.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [lon, lat],
        },
        maxDistance: 1000,
        distanceField: 'distance',
        spherical: true,
      },
    },
    {
      $project: {
        location: 0,
        orders: 0,
        createdAt: 0,
        updatedAt: 0,
        __v: 0, // version key
      },
    },
  ])
}

StoreSchema.methods.findAllMenus = (store_id: string) => {
  return StoreModel.find({ _id: store_id }, 'menus')
}

StoreSchema.methods.getMenu = (store_id: string, menu_id: string) => {
  return StoreModel.find(
    {
      _id: store_id,
    },
    'menus',
  ).elemMatch('menus', { _id: menu_id })
}

export default StoreModel
