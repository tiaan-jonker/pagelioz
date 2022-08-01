import mongoose from 'mongoose'
const { Schema } = mongoose

const userBookSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  category: {
    type: string,
    required: true,
  },
})

const UserBook = mongoose.model('UserBook', userBookSchema)

export default UserBook
