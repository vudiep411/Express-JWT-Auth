import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization 
        jwt.verify(token, 'secret', (err, user) => {
            if(err) 
                return res.sendStatus(403)
            
            req.user = user
            next()
        })
    } catch (error) {
        console.log(error)
    }
}

export default auth