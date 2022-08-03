import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { body, validationResult } from 'express-validator'
import { authMiddleware } from '../../middleware/authMiddleware.js'
import User from '../../models/userModel.js'
import generateToken from '../../utils/generateToken.js'
import { PasswordManager } from '../../utils/passwordManager.js'

const router = express.Router()

// @desc    Authenticate user & get token
// @route   POST /api/v1/users/login
// @access  Public
const authenticateUser = expressAsyncHandler(
  // [
  //   body('email').isEmail().withMessage('Please enter a valid email'),
  //   body('password').trim().notEmpty().withMessage('Please enter a password'),
  // ],
  async (req, res) => {
    // const errors = validationResult(req)
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() })
    // }

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      res.status(401)
      throw new Error('User not found')
    }

    const passwordIsMatch = await PasswordManager.compare(
      user.password,
      password
    )

    if (!passwordIsMatch) {
      res.status(400)
      throw new Error('Invalid password')
    }

    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  }
)

export { authenticateUser }
