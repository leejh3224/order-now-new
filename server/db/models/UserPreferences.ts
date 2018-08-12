import { Schema, Model, model, Document } from 'mongoose'
import { IUserPreferences } from '../../common/types'

interface IUserPreferencesModel extends IUserPreferences, Document {}

export const UserPreferencesSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    favorite_stores: [String],
    custom_menus: [String],
  },
  {
    timestamps: true,
    toObject: {},
  },
)

const UserPreferencesModel: Model<IUserPreferencesModel> = model(
  'UserPreferences',
  UserPreferencesSchema,
)

export default UserPreferencesModel
