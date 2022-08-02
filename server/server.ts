import express from 'express'
import { signupRouter } from './routes/users/signup'
import { signinRouter } from './routes/users/signin'
import { currentUserRouter } from './routes/users/currentUser'
import { addBookRouter } from './routes/books/addBook'
import { allUserBooksRouter } from './routes/books/allBooks'

const server = express()
const baseUserApiV1 = '/api/v1/users'

server.use(express.json())

server.use(baseUserApiV1, signupRouter)
server.use(baseUserApiV1, signinRouter)
server.use(baseUserApiV1, currentUserRouter)

server.use('/api/v1', addBookRouter)
server.use('/api/v1', allUserBooksRouter)

export default server
