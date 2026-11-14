import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import pool from './db/db.config.js'
import cookieParser from 'cookie-parser'
import mainRoutes from './src/main.routes.js'
import { notFound, errorHandler } from './src/middleware/error-handler.js'

const app = express()

// Do not start without the secret (it would be unsafe)
if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET is missing in .env')
    process.exit(1)
}

// 1. Middleware (before the routes)
app.use
    (cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    }))

app.use(express.json())
app.use(cookieParser())

// 2. Routes
app.get('/api/health', async (req, res) => {
    const [rows] = await pool.query('SELECT 1 + 1 AS result')
    res.json({ ok: true, result: rows[0].result })
})

app.use('/api', mainRoutes)

// 3. Handlers (after all routes)
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
