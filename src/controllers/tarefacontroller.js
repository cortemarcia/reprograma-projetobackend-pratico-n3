const tarefa = require ("../model/tarefa.json")

exports.get = (req, res) => {
    console.log (req.url)
    res.status(200).send(tarefa)
}