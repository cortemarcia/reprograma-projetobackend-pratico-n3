const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/tarefacontroller")

router.get ("/tarefa", controller.get)




module.exports = router