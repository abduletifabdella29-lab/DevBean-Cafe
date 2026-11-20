import { createContext, useContext, useEffect, useState } from 'react'
import { fetchMe, loginRequest, logoutRequest, registerRequest } from '../api/authApi.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

}

useEffect(() => {
    let ignore = false

    async function loadUser() {
        try {
            const me = await fetchMe()
            if (!ignore) setUser(me)
        } catch {
            if (!ignore) setUser(null)
        } finally {
            if (!ignore) setLoading(false)
        }
    }

    loadUser()

    return () => {
        ignore = true
    }
}, [])

async function login(credentials) {
    const loggedIn = await loginRequest(credentials)
    setUser(loggedIn)
    return loggedIn
}

async function register(data) {
    const created = await registerRequest(data)
    setUser(created)
    return created
}