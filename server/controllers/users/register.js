import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { body, validationResult } from 'express-validator'
import User from '../../models/userModel.js'
import generateToken from '../../utils/generateToken.js'

const router = express.Router()

// @desc    Register a new user
// @route   POST /api/v1/users/signup
// @access  Public
const registerUser = expressAsyncHandler(
  // [
  //   body('email', 'Please include a valid email').isEmail(),
  //   body('password', 'Password length must be between 6 and 20 characters')
  //     .trim()
  //     .isLength({ min: 6, max: 20 }),
  // ],
  async (req, res) => {
    // const errors = validationResult(req)
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() })
    // }

    const { name, email, password } = req.body

    const existingUser = await User.findOne({ email })

    if (existingUser) {
      res.status(400)
      throw new Error('User already exists')
    }

    const user = await User.create({ name, email, password })

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid user data')
    }
  }
)

export { registerUser }
