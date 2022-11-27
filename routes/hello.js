import express from 'express'
import { hello } from '../controllers/hello.js'

const router = express.Router()

// Routes for /hello
router.get('/', hello)




export default router