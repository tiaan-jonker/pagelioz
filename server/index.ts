import connectDB from './config/db'
import server from './server'
const colors = require('colors')

const startServer = async () => {
  try {
    connectDB()
  } catch (error) {
    console.error(error)
  }

  // Port config
  const PORT = process.env.PORT || 5000

  server.listen(PORT, () => {
    console.log(colors.green.bold(`Server listening on port: ${PORT}`))
  })
}

startServer()
