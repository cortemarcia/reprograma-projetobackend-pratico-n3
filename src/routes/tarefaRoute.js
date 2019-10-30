const express = require("express")
const router = express.Router()

const controller = require ("../controllers/tarefacontroller")


router.get("/", controller.get)
router.get("/concluido", controller.getConcluido)
router.get("/:id", controller.getById)





module.exports = router