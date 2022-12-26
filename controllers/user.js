import User from '../models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { generateAccessToken, generateRefreshtoken } from './token.js'

let refreshTokens = []

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

        const authData = {
            _id: existingUser._id, 
            name: existingUser.name, 
            email: existingUser.email,
            authenticated: true
        }

        const token = generateAccessToken(authData)
        const refreshToken = generateRefreshtoken(authData)

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure:false,
            path: "/",
            sameSite: "strict",            
        })

        return res.status(200).json({...authData, token, refreshToken})
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
        const token = generateAccessToken(newUser)
        const refreshToken = generateRefreshtoken(newUser)

        await newUser.save()

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure:false,
            path: "/",
            sameSite: "strict",            
        })

        return res.status(200).json({result: newUser, token, refreshToken})

    } catch (error) {
        console.log(error)
        return res.status(500).json({message: 'Something went wrong.'})
    }
   
}


// refresh token
export const refresh = async (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if(!refreshToken)
        return res.status(401).json("Unauthenticated")

    if(!refreshTokens.includes(refreshToken))
        return res.status(403).json("Forbidden, refresh token is invalid")

    jwt.verify(refreshToken, process.env.SECRET, (err, user) => {
        if(err) {
            console.log(err)
        }

        refreshTokens.filter(token => token !== refreshToken)

        const newRefreshToken = generateRefreshtoken(user)
        const newAccessToken = generateAccessToken(user)

        refreshTokens(newRefreshToken)

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure:false,
            path: "/",
            sameSite: "strict",
        });

        res.status(200).json({
            token: newAccessToken,
            refreshToken: newRefreshToken
        })        
        
    })
}