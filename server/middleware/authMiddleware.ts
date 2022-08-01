import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel'

type UserToken = {
  user: string
  id: string
  iat: number
  exp: number
}

const authMiddleware = expressAsyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    let token

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith('Bearer')
    ) {
      try {
        token = req.headers.authorization.split(' ')[1]

        const decodedToken = jwt.verify(
          token,
          process.env.JWT_SECRET!
        ) as UserToken

        //! Fix: TS error with req.user if req of type Request in params
        req.user = await User.findById(decodedToken.id).select('-password')

        next()
      } catch (error) {
        console.error(error)
        res.status(401).send('Not authorized')
      }
    }
  }
)

export { authMiddleware }
