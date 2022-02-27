const express = require("express")

const User = require("../models/user.models")

const router = express.Router()


router.post("", async (req, res) => {

    try {
        const user = await User.create(req.body)
        res.send("working")
        return res.status(201).send(user)
    } catch (error) {

        return res.status(500).send(error.message)
    }

})

//router.get("", async (req, res) => {

//})
router.get((""), async (req, res) => {
    try {
        const users = await User.find().lean().exec()
        return res.status(201).send(users)
    } catch (error) {

        return res.status(500).send(error.message)
    }
})

router.get("/:id", async (req, res) => {

    try {
        const user = await User.findById(req.params.id).lean().exec()
        return res.status(201).send(user)
    } catch (error) {

        return res.status(500).send(error.message)
    }

})


router.patch("/:id", async (req, res) => {

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.status(201).send(user)
    } catch (error) {

        return res.status(500).send(error.message)
    }

})

router.delete("/:id", async (req, res) => {

    try {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.status(201).send(user)
    } catch (error) {

        return res.status(500).send(error.message)
    }

})





module.exports = router