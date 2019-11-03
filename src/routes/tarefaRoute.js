const express = require("express")
const router = express.Router()

const controller = require("../controllers/tarefacontroller")


router.get("/", controller.get)
<<<<<<< HEAD
router.get("/ordenar", controller.getOrdenar)
router.get("/concluido", controller.getConcluido)
router.get ("/pendente", controller.getPendente)
=======
router.get("/tarefaOrdenada", controller.getCompare)
router.get("/concluido/filtrar", controller.getConcluido)
router.get("/pendente/filtrar", controller.getPendente)
>>>>>>> 8f4d07239cb319ea21a9b873b35908728d408d4c
router.get("/:id", controller.getById)
router.get("/:colaborador/buscar", controller.getColaborador)



module.exports = router