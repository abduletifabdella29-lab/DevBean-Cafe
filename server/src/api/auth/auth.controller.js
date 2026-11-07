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

export async function register(req, res) {
    const body = req.body ?? {}

    const firstName = cleanText(body.firstName)
    const lastName = cleanText(body.lastName)
    const email = cleanText(body.email).toLowerCase()
    const password = typeof body.password === 'string' ? body.password : ''

    if (firstName === '' || firstName.length > 50) {
        throw badRequest('first name is required (max 50 characters)')
    }
    if (lastName === '' || lastName.length > 50) {
        throw badRequest('last name is required (max 50 characters)')
    }
    if (!EMAIL_REGEX.test(email) || email.length > 150) {
        throw badRequest('a valid email is required')
    }
    // bcrypt only uses the first 72 bytes of a password
    if (password.length < 8 || Buffer.byteLength(password) > 72) {
        throw badRequest('password must be at least 8 characters (max 72 bytes)')
    }

    const user = await registerUser({ 
        firstName, 
        lastName, 
        email, 
        password
    })

    setAuthCookie(res, user)
    res.status(201).json(user)
}

export async function login(req, res) {
    const body = req.body ?? {}

    const email = cleanText(body.email).toLowerCase()
    const password = typeof body.password === 'string' ? body.password : ''
    
    if (email === '' || password === '') {
        throw badRequest('email and password are required')
    }

    const user = await loginUser({email, password})
    
    setAuthCookie(res, user)
    res.json(user)
}

export function logout(req, res) {
    res.clearCookie(COOKIE_NAME, clearOptions)
    res.json({message: 'Logged out'})
}