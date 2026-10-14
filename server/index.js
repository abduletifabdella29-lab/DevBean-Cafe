import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import pool from './db/db.config.js'
import reviewRoutes from './src/api/review/review.routes.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/reviews', reviewRoutes)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})