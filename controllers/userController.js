let User = require('../models/user')
let jwt = require('jsonwebtoken')
let bcrypt = require('bcryptjs')
const user = require('../models/user')

exports.getCurrentUser = (req, res) => {
    //user added at authentication
    res.json(req.user)
}

exports.signup = async (req, res) => {
    let username = req.body.username
    let password = req.body.password


    // checks if user exists
    let tempUser = await user.findOne({ username: username });
    if (tempUser) {
        res.json({
            err: "ERR : username already exists"
        })

        return;
    }

    // encrypts password and saves user
    let encryptedPassword = await bcrypt.hash(password, 10)

    let newUser = new User({
        username: username,
        password: encryptedPassword
    })
    newUser.save()


    // generates token and sends
    let token = await jwt.sign({
        username: username,
        password: password
    }, "aSecretKey")

    res.json({
        success: "Signed up",
        token: token
    })

}

exports.login = async (req, res) => {
    let username = req.body.username
    let password = req.body.password

    //checks if user exists
    let currUser = await user.findOne({ username: username })

    if (!currUser) {
        res.json({
            err: "ERR : user dosent exist,"
        })
        return;
    }

    // checks if password is correct 
    isPassCorrect = await bcrypt.compare(password, currUser.password)

    if (!isPassCorrect) {
        res.json({
            err: "ERR : incorrect password"
        })
        return;
    }

    //generates and sends a token
    let token = await jwt.sign({
        username: username,
        password: password
    }, "aSecretKey")

    res.json({
        success: "Login",
        token: token
    })
}

//checks if auth
exports.isAuth = (req, res, next) => {
    let token = req.headers.auth

    //checks if logged in
    if (!token) {
        res.json({
            err: "Err : not logged in"
        })
        return;
    }

    //validates token
    jwt.verify(token, "aSecretKey", async (err, decoded) => {

        if (err) {
            res.json({
                err: "invalid token : login again"
            })
            return;
        }

        let tempUser = await user.findOne({ username: decoded.username })

        if (!tempUser) {
            res.json({
                err: "Invalid Token : please login again"
            })
            return
        }

        //foreward current user
        tempUser.password = null
        req.user = tempUser
        next()
    })
}