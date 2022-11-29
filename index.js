import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv"
import userRoute from './routes/user.js'
import auth from "./middleware/auth.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).send("<h2>Welcome to Authenticated JWT with Express Node.js<h2>")
})

app.use('/user', userRoute)

// Test authenticated route
app.get('/test', auth, (req, res) => {
    console.log(req.user)
    res.status(200).json({
        ...req.user,
        auth: true
    })
})


// Connect to MongoDb
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected db')
})


app.listen(PORT, () => console.log(`server started on ${PORT}` ))