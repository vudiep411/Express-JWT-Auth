import express from 'express'
import { refresh, signin, signup } from '../controllers/user.js'

const router = express.Router()

// Routes for user service
router.post('/login', signin)
router.post('/register', signup)
router.post('/refresh', refresh)


export default router