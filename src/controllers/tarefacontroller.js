const tarefa = require ("../model/tarefa.json")

function ordenar(a,b){
    if (a.dataInclusao > b.dataInclusao){
        return -1;
    } else if (a.dataInclusao < b.dataInclusao) {
         return 1;
    }else{
        return 0;
    }
}
exports.get = (req, res) => {
    console.log (req.url)    

    res.status(200).send(tarefa.sort(ordenar))
}

exports.getById = (req, res)=>{
    const id = req.params.id
    res.status(200).send(tarefa.find(tarefa => tarefa.id == id))
}

exports.getConcluido = (req, res)=>{
    const result =  tarefa.filter( tarefa => tarefa.concluido == "true")
    res.status(200).send(result)
}

exports.getPendente = (req, res) => {
    const result1 = tarefa.filter(tarefa => tarefa.concluido == "false")
    res.status (200).send (result1)
}

exports.getColaborador = (req,res)=>{
    const colaborador = req.params.colaborador
    res.status(200).send(tarefa.filter(tarefa => tarefa.colaborador == colaborador))
}




