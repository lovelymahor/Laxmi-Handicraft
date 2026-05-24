import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import dotenv from 'dotenv'

dotenv.config()
console.log("Mongo URI:", process.env.MONGO_URI ? "Loaded ✅" : "Missing ❌");

const app = express()
const PORT = process.env.PORT || 4000

// Connect DB & Cloudinary
connectDB()
connectCloudinary()

// Middlewares
app.use(express.json())
app.use(cors())

// API endpoints
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

// Test route
app.get('/', (req, res) => {
  res.status(200).send('Hello World')
})

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
