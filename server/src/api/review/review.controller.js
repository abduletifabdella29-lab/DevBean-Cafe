import { getReviewsByProduct, createReview } from './review.service.js'

function badRequest(message) {
    const err = new Error(message);
    err.status = 400;
    return err;
}

export async function getReviews(req, res) {
    const productId = Number(req.query.productId);

    if (!Number.isInteger(productId) || productId < 1) {
        throw badRequest ("productId must be a positive number")
    };

    const reviews = await getReviewsByProduct(productId);

    res.json(reviews);
} 

export async function addReview(req, res) {
    const body = req.body ?? {}

    const productId = Number(body.productId)
    const rating = Number(body.rating)
    const name = typeof body.name === 'string' ? body.name.trim() : ""
    const comment = typeof body.comment === 'string' ? body.comment.trim() : ""
    
    if (!Number.isInteger(productId) || productId < 1) {
        throw badRequest ('productId must be a positive number')
    }

    if (name === '' || name.length > 100 ) {
        throw badRequest ('name is required (max 100 characters)')
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        throw badRequest ('rating must be a whole number from 1 to 5')
    }

    if (comment === '' || comment.length > 1000 ) {
        throw badRequest ('comment is required (max 1000 characters)')
    }

    const review = await createReview ({ productId, name, rating, comment })

    res.status(201).json(review)
}