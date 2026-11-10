import { Router, Router } from 'express'
import { register, login, logout, me } from './auth.controller.js'
import { requireAuth } from '../../middleware/auth.middleware.js'