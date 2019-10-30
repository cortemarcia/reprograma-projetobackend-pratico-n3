const tarefa = require ("../model/tarefa.json")

exports.get = (req, res) => {
    console.log (req.url)
    res.status(200).send(tarefa)
}

exports.getById = (req, res)=>{
    const id = req.params.id
    res.status(200).send(tarefa.find(tarefa => tarefa.id == id))
}

exports.getConcluido = (req, res)=>{
    const result =  tarefa.filter( tarefa => tarefa.concluido == "true")
    res.status(200).send(result)
}

exports.getColaborador = (req,res)=>{
    const colaborador = req.params.colaborador
    res.status(200).send(tarefa.find(tarefa => tarefa.colaborador == colaborador))
}




