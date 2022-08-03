import express from 'express'
import userRoutes from './routes/userRoutes.js'

const server = express()

server.use(express.json())

server.use('/api/v1/users', userRoutes)

export default server
