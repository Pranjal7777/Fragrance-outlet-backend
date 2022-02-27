const express = require("express")

const router = express.Router()

const crudController = require("./crud.controller")

const Men = require("../models/men.product")

router.post("", crudController(Men).post)
router.get("", crudController(Men).getAll)
router.get("/:id", crudController(Men).getOne)
router.patch("/:id", crudController(Men).patch)
router.delete("/:id", crudController(Men).Delete)



module.exports = router