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