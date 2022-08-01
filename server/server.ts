import express from 'express'
import dotenv from 'dotenv'
import { signupRouter } from './routes/users/signup'
import { currentUserRouter } from './routes/users/currentUser'

dotenv.config()

const server = express()
const baseUserApiV1 = '/api/v1/users'

server.use(express.json())

server.use(baseUserApiV1, signupRouter)
server.use(baseUserApiV1, currentUserRouter)

export default server
