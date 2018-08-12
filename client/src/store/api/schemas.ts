import { schema } from 'normalizr'

const menuSchema = new schema.Entity('menus', {}, { idAttribute: '_id' })

const storeSchema = new schema.Entity(
  'stores',
  {
    menus: [menuSchema],
  },
  {
    idAttribute: '_id',
  },
)

export default {
  STORE_ARRAY: [storeSchema],
}
