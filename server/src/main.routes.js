import { Router } from 'express'
import reviewRoutes from './api/review/review.routes.js'
import authRoutes from './api/auth/auth.routes.js'

const router = Router()

router.use('/reviews', reviewRoutes)
router.use('/auth', authRoutes)

export default router