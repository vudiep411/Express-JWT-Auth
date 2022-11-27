import mongoose from 'mongoose'
// import databasemodel from '../models/<yourModel>'

export const hello = async (req, res) => {
    try {
        console.log("Hello")
        res.json({hello: "Hello World!!"})
    } catch (error) {
        console.log(error)
    }
}