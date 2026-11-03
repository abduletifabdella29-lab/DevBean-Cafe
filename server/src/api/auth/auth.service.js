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

export async function registerUser({firstName, lastName, email, password}) {
    const [existing] = await pool.query (
        'SELECT id from users WHERE email = ?',
        [email]
    )

    if (existing.length > 0) {
        throw httpError (409, "An account with this email already exists")
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)

    try {
        const [result] = pool.query(
            'INSERT INTO users (first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?)',
            [firstName, lastName, email, passwordHash]
        )

        return getUserById(result.insertId)

    } catch (err) {
         // Two people registering with the same email at the same moment
        if (err.code === 'ER_DUP_ENTRY') {
            throw httpError (409, 'An account with this email already exists')
        }
        throw err
    }
}

export async function loginUser({email, password}) {
    const [rows] = await pool.query (
        'SELECT * FROM users WHERE email = ?',
        [email]
    )
    const user = rows[0]
}