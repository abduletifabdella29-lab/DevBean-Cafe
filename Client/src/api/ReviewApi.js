const API_URL = 'http://localhost:3001/api'

export async function fetchReviews(productId) {
    const res = await fetch(`${API_URL}/reviews?productId=${productId}`)

    if (!res.ok) {
        throw new Error('Failed to load reviews')
    }

    return res.json()
}

export async function postReview(review) {
    const res = await fetch(`${API_URL}/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(review),
    })

    const data = await res.json()

    if (!res.ok) {
        throw new Error(data.message || 'Failed to save review')
    }

    return data
}