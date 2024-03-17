const express = require('express')
const dotEnv = require('dotenv')
const cors = require('cors')
//const swaggerUi = require('swagger-ui-express')
//const yaml = require('yamljs')
//const swaggerDocs = yaml.load('./swagger.yaml')
const dbConnection = require('./database/connection')
const path = require('path')

dotEnv.config()

__dirname = path.resolve()

const app = express()

const envir = app. get('env')
console.log('envir : ', envir)

/* if (envir !== 'development') {
  app.use(express.static(path.join(__dirname, '/client/dist')))

  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
  })
} */

const PORT = process.env.PORT || 3001

// Connect to the database
dbConnection()

// Handle CORS issues
app.use(cors())

// Request payload middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// API Documentation
//if (process.env.NODE_ENV !== 'production') {
//  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
//}

app.get('https://p12-server-335r.onrender.com/api/v1/', (req, res, next) => {
  res.send('Hello from my Express server v2!')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})

// Handle custom routes
app.use('/api/v1', require('./routes/epoqueRoutes'))
app.use('/api/v1', require('./routes/projetRoutes'))
