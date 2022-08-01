import server from './server.js'

const PORT = process.env.PORT || 8000

server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.cyan.underline
      .bold
  )
)
