import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'

dotenv.config()

const server = express()

const PORT = process.env.PORT || 8000

server.get('/', (req, res) => res.send('hello'))

server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.cyan.underline
      .bold
  )
)
