const express = require("express")
const router = express.Router()

const controller = require ("../controllers/tarefacontroller")


router.get("/", controller.get)
router.get("/concluido", controller.getConcluido)
router.get ("/pendente", controller.getPendente)
router.get("/:id", controller.getById)
router.get("/colaborador/:colaborador", controller.getColaborador)




module.exports = router