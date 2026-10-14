import { Router } from 'express'
import { getReviews, addReview } from './review.controller.js'

const router = Router()

router.get('/', getReviews)
router.post('/', addReview)

export default router