import mongoose from 'mongoose'
const { Schema } = mongoose

interface UserBookAttrs {
  user: string
  title: string
  author: string
  category: string
}

interface UserBookDoc extends mongoose.Document {
  user: string
  title: string
  author: string
  category: string
}

interface UserBookModel extends mongoose.Model<UserBookDoc> {
  build(attrs: UserBookAttrs): UserBookDoc
}

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

userBookSchema.statics.build = (attrs: UserBookAttrs) => {
  return new UserBook(attrs)
}

const UserBook = mongoose.model('UserBook', userBookSchema)

export default UserBook
