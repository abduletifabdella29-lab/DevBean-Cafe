import jwt from 'jsonwebtoken'
import { getUserById } from '../api/auth/auth.service.js'

function unauthorized() {
    const err = new Error('Please log in first')
    err.status = 401
    return err
}

export async function requireAuth(req, res, next) {
    const token = req.cookies?.token

    if (!token) {
        return next(unauthorized())
    }

    let payload

    try {
        payload = jwt.verify(token, process.env.JWT.SECRET)
    } catch {
        // wrong signatur or expired token
        return next(unauthorized())
    }  
}