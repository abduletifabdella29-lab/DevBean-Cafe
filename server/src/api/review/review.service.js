import pool from '../../../db/db.config.js'

export async function getReviewsByProduct(productId) {
    const [rows] = await pool.query(
        `SELECT id, product_id, name, rating, comment, created_at
        FROM reviews
        WHERE product_id = ?
        ORDER BY created_at ASC, id ASC`,
        [productId]
    )

    return rows
}


export async function createReview({ productId, name, rating, comment }) {
    const [result] = await pool.query(
        `INSERT INTO reviews (product_id, name, rating, comment) VALUES (?, ?, ?, ?)`,
        [productId, name, rating, comment]
    )
    
    const [rows] = await pool.query(
        `SELECT id, product_id, name, rating, comment, created_at
        FROM reviews
        WHERE id = ?`,
        [result.insertId]
    )

    return rows[0]
}