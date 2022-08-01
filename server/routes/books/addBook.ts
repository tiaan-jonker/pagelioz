import express, { Request, Response } from 'express'
import { authMiddleware } from '../../middleware/authMiddleware'
import UserBook from '../../models/userBookModel'

const router = express.Router()

// @desc    Add
// @route   POST /api/v1/addbook
// @access  Public
router.post('/addbook', authMiddleware, async (req: any, res: Response) => {
  const { title, author, category } = req.body

  const book = new UserBook({
    user: req.user.id,
    title,
    author,
    category,
  })

  const addedBook = await book.save()

  res.status(201).json(addedBook)
})

export { router as addBookRouter }
