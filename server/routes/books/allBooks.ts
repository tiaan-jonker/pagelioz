import express, { Request, Response } from 'express'
import { authMiddleware } from '../../middleware/authMiddleware'
import UserBook from '../../models/userBookModel'

const router = express.Router()

// @desc    Fetch all books
// @route   GET /api/v1/books
// @access  Public
router.get('/books', authMiddleware, async (req: any, res: Response) => {
  const books = await UserBook.find({ user: req.user.id })

  res.status(200).json(books)
})

export { router as allUserBooksRouter }
