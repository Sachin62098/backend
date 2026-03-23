import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './src/db/index.js'
import userRoutes from './src/routes/user.js'
import categoryRoutes from './src/routes/category.js'
import productRoutes from './src/routes/product.js'
import orderRoutes from './src/routes/order.js'

const app = express()
const port = process.env.PORT || 7000
app.use(express.json())
app.use(cors())
dotenv.config()


app.use("/api/v1/user", userRoutes)
app.use("/api/v1/category", categoryRoutes)
app.use("/api/v1/product", productRoutes)
app.use("/api/v1/order", orderRoutes)


connectDB().then(
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`)
    })
)