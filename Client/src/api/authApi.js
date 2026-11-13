const API_URL = import.meta.env.VITE_API_URL

async function request(path, options = {}) {
    const res = await fetch(`${API_URL}${path}`, {
        credentials: 'include',
        headers: {'Content-Type' : 'application/json'},
        ...options,
    })

    const data = await res.json().catch(() => ({}))

    if (!res.ok) {
        const err = new Error(data.message || 'Something went wrong')
        err.status = res.status
        throw err
    }

    return data
}