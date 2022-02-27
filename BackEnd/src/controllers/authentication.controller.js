require("dotenv").config()
//const jwt = require("jsonwebtoken")
const { validationResult } = require('express-validator')

const User = require("../models/user.models")

const register =
    async (req, res) => {
        console.log(req.body)
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).send({ Error: errors.array() });
            }

            let user = await User.findOne({ email: req.body.email }).lean().exec()

            if (user) return res.status(400).send({ message: "email already linked with another account" })

            user = await User.create(req.body)

            console.log("user created sucessfully", user)

            res.send({ user })
        } catch (error) {

            console.log("not working")
            res.status(500).send({ error: error.message })
        }
    }



const login = async (req, res) => {

    try {


        let user = await User.findOne({ email: req.body.email })
        console.log("Found", user)

        if (!user) return res.status(400).send({ message: "email or password is incorrect" })


        const match = user.checkPassword(req.body.password)

        if (!match) return res.status(400).send({ message: "email or password is incorrect" })


        res.send({ status: "ok", user })

    } catch (error) {

        return res.status(500).send(error.message)
    }
}

module.exports = { register, login }