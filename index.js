import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv"
import helloRoute from './routes/hello.js'
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())


app.use('/hello', helloRoute)


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected db')
})

app.listen(PORT, () => console.log(`server started on ${PORT}` ))