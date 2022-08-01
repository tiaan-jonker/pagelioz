import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import User from '../../models/userModel.js'

const router = express.Router()

// @desc    Register a new user
// @route   POST /api/v1/users/signup
// @access  Public
router.post('/signup', async (req, res) => {
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
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

export { router as signupRouter }
