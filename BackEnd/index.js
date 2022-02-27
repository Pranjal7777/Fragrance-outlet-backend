const express = require('express');
const connect = require('./src/config/db')
const app = express();
const userController = require("./src/controllers/user.controller")
const menController = require("./src/controllers/men.product.controller")
const womenController = require("./src/controllers/women.product.conroller")

const cartController = require("./src/controllers/cart.controller")
// const cartController = require("./src/controllers/cart.controller")
const cors = require("cors")
const { body } = require("express-validator")
app.use(cors())


const { register, login } = require("./src/controllers/authentication.controller")



app.use(express.json())
app.use("/user", userController)
app.use("/men", menController)
app.use("/women", womenController)

app.use("/cart", cartController)


app.post("/register", body("email").isEmail(), body("password").isStrongPassword(), register)

app.post("/login", login)

const port = process.env.PORT || 8080;
const start = async () => {
    await connect()
    app.listen(port, () => {
        console.log(`Connected on port ${port}`);
    })
}
start();