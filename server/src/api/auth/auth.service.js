import bcrypt from 'bcryptjs'
import pool from '../../../db/db.config'

const SALT_ROUNDS = 10

// Used to keep the login time the same when the email does not exist
const DUMMY_HUSH = bcrypt.hashSync('dummy-password',SALT_ROUNDS)

function httpError (status, message){
    const err = new Error(message)
    err.status = status
    return err
}

// Never send password_hash out of the server
function toPublicUser(row) {
    return {
        id: row.id,
        firstName: row.first_name,
        lastName: row.last_name,
        email: row.email,
        role: row.role,
    }
}

export async function getUserById(id) {
    const [rows] = await pool.query(
        'SELECT id, first_name, last_name, email, role FROM users WHERE id = ?',
        [id]
    )

    return rows[0] ? toPublicUser(rows[0]) : null
}