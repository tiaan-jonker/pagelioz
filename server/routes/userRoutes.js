import express from 'express'
const router = express.Router()

import { authenticateUser } from '../controllers/users/login.js'
import { registerUser } from '../controllers/users/register.js'

router.route('/').post(registerUser)
router.post('/login', authenticateUser)

export default router
