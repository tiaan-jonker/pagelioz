import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import { signupRouter } from './routes/users/signup.js'
import { currentUserRouter } from './routes/users/currentUser.js'

dotenv.config()
connectDB()

const server = express()
const baseUserApiV1 = '/api/v1/users'

server.use(express.json())

server.use(baseUserApiV1, signupRouter)
server.use(baseUserApiV1, currentUserRouter)

export default server
