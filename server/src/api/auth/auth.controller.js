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