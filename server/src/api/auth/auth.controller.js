import jwt from 'jsonwebtoken'
import { registerUser, loginUser } from './auth.service'

const COOKIE_NAME = 'token'
const SEVEN_DAYS = 7 * 24 * 60 * 60 * 1000
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const cookieOptions = {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: SEVEN_DAYS, 
}

// clearCookie needs the same options, without maxAge
const { maxAge, ...clearOptions } = cookieOptions

function badRequest (message) {
    const err = new Error (message)
    err.status = 400
    return err
}

function cleanText (value) {
    return typeof value === 'string' ? value.trim('') : ''
}

function setAuthCookie (res, user) {
    const token = jwt.sign(
        {id: user.id},
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
    )
    res.cookie(COOKIE_NAME, token, cookieOptions)
}