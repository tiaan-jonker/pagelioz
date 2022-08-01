import express, { Request, Response } from 'express'
import User from '../../models/userModel'

const router = express.Router()

// @desc    Get user profile
// @route   GET /api/v1/users/profile
// @access  Private
router.get('/profile', async (req: Request, res: Response) => {
  const user = await User.findById(req.body)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export { router as currentUserRouter }
