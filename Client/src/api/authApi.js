const API_URL = import.meta.env.VITE_API_URL

async function request(path, options = {}) {
    const res = await fetch(`${API_URL}${path}`, {
        credentials: 'include',
        headers: {'Content-Type' : 'application/json'},
        ...options,
    })

    const data = await res.json().catch(() => ({}))
}