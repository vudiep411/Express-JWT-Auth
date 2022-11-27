import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Sign in
export const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if(!existingUser) {
            return res.json({message: "User doesn't exist"})
        }

        const comparePassword = await bcrypt.compare(password, existingUser.password)

        if(!comparePassword) {
            return res.json({message: "Invalid password"})
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id}, 'secret', {expiresIn: "1h"})
        const authData = {
            _id: existingUser._id, 
            name: existingUser.name, 
            email: existingUser.email,
            authenticated: true
        }

        return res.status(200).json({...authData, token})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong.'})
    }
}


// Sign up
export const signup = async (req, res) => {
    const { firstName, lastName, email, password } = req.body
 
    try {
        const existingUser = await User.findOne({ email: email })

        if(existingUser) {
            return res.json({ message:'User already exists'})
        }

        const name = firstName + ' ' + lastName
        const hashPassword = await bcrypt.hash(password, 12)
        const newUser = new User({name: name, email, password: hashPassword})

        // Create token to send it back
        const token = jwt.sign({email: newUser.email, id: newUser._id}, 
                'secret', {expiresIn: "1h"}
        )
        await newUser.save()

        return res.status(200).json({result: newUser, token})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Something went wrong.'})
    }
   
}