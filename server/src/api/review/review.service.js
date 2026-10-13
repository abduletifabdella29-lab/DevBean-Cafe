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