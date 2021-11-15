import { User } from '@/types/models'
import { model, models, Schema } from 'mongoose'

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const UserModel = models.User || model('User', UserSchema)

export default UserModel
