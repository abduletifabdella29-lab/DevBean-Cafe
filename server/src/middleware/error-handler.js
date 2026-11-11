export function notFound(req, res) {
    res.status(404).json({
        message: `Route not found: ${req.method} ${req.originalUrl}`
    })
}

export function errorHandler(err, req, res, next) {
    console.error(err)

    const status = err.status || 500
    const message = err.status ? err.message : 'Server error'

    res.status(status).json({ message })
}