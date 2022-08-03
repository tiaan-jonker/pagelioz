import connectDB from './config/db.js'
import server from './server.js'
import colors from 'colors'

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
