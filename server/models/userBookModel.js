import mongoose from 'mongoose'
const { Schema } = mongoose

const userBookSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
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
    type: String,
    required: true,
  },
})

const UserBook = mongoose.model('UserBook', userBookSchema)

export default UserBook
