const express = require("express")

const router = express.Router()

const crudController = require("./crud.controller")

const Women = require("../models/women.model")

router.post("", crudController(Women).post)
router.get("", crudController(Women).getAll)
router.get("/:id", crudController(Women).getOne)
router.patch("/:id", crudController(Women).patch)
router.delete("/:id", crudController(Women).Delete)



module.exports = router