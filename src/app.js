const express = require("express")
const app = express()

const tarefa = require("./routes/tarefaRoute")

app.use("/tarefa", tarefa)

module.exports = app