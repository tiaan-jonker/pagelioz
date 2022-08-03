import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]

      const decodedToken = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decodedToken.id).select('-password')

      next()
    } catch (error) {
      console.error(error)
      res.status(401).send('Not authorized')
    }
  }
})

export { authMiddleware }
