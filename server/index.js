import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import pool from './db/db.config.js'

const app = express()

app.use(cors())
app.use(express.json())

// Health check: confirms the server can talk to MySQL
app.get('/api/health', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT 1 + 1 AS result')
        res.json({ ok: true, result: rows[0].result })
    } catch (err) {
        console.error(err)
        res.status(500).json({ ok: false, message: 'Database connection failed!!' })
    }
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})