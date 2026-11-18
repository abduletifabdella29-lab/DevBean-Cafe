import { createContext, useContext, useEffect, useState } from 'react'
import { fetchMe, loginRequest, logoutRequest, registerRequest } from '../api/authApi.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
}

useEffect(() => {
  let ignore = false 
}
}, [])
