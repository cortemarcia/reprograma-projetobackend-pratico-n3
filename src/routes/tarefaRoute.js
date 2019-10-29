const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/tarefacontroller")
const tarefa = require('../model/tarefa.json')
router.get("/tarefa", tarefa)




module.exports = router