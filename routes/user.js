import express from 'express'
import { signin, signup } from '../controllers/user.js'

const router = express.Router()

// Routes for user service
router.post('/login', signin)
router.post('/register', signup)



export default router