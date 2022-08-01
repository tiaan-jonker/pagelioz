import express, { Request, Response } from 'express'
import { body, validationResult } from 'express-validator'
import { authMiddleware } from '../../middleware/authMiddleware'
import User from '../../models/userModel'
import generateToken from '../../utils/generateToken'
import { PasswordManager } from '../../utils/passwordManager'

const router = express.Router()

// @desc    Authenticate user & get token
// @route   POST /api/v1/users/signin
// @access  Public
router.post(
  '/signin',
  authMiddleware,
  [
    body('email').isEmail().withMessage('Please enter a valid email'),
    body('password').trim().notEmpty().withMessage('Please enter a password'),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

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

export { router as signinRouter }
