const express = require("express")
const app = express()

const tarefa = require("./routes/tarefaRoute")


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/tarefa", tarefa)



module.exports = app