const express = require("express")
const router = express.Router()

const controller = require("../controllers/tarefacontroller")


router.get("/", controller.get)
router.get("/tarefaOrdenada", controller.getCompare)
router.get("/concluido/filtrar", controller.getConcluido)
router.get("/pendente/filtrar", controller.getPendente)
router.get("/:id", controller.getById)
router.get("/:colaborador/buscar", controller.getColaborador)
router.get("/data/buscar.", controller.getTempoTarefa)
router.get ("/nomeSobrenome/:nome %20 :sobrenome"), controller.getNomeSobrenome //PRECISA FINALIZAR


module.exports = router