import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import pool from './db/db.config.js'
import cookieParser from 'cookie-parser'
import mainRoutes from './src/main.routes.js'
import { notFound, errorHandler } from './src/middleware/error-handler.js'

const app = express()

if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is missing in .env')
    process.exit(1)
}

app.use
    (cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    }))

app.use(express.json())
app.use(cookieParser())

app.get('/api/health', async (req, res) => {
    const [rows] = await pool.query('SELECT 1 + 1 AS result')
    res.json({ ok: true, result: rows[0].result })
})

app.use('/api', mainRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})