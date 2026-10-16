const API_URL = import.meta.env.VITE_API_URL

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