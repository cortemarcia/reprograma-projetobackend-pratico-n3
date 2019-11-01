const tarefa = require ("../model/tarefa.json");

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

exports.getPendente = (req, res) => {
    const result1 = tarefa.filter(tarefa => tarefa.concluido == "false")
    res.status (200).send (result1)
}

exports.getColaborador = (req,res)=>{
    const colaborador = req.params.colaborador
    res.status(200).send(tarefa.filter(tarefa => tarefa.colaborador == colaborador))
}

exports.getCompare = (req, res) => {
    const id = req.params.id
    const filtro = tarefa.filter(item => item.id == id)
    const valor = filtro.dataInclusao
    const arrData = valor.split("/")
    const dia = arrData[0]
    const mes = arrData[1]
    const ano = arrData[2]
    const data = converterData(ano, mes, dia)
    res.status(200).send({ data })
  }


  function converterData(ano, mes, dia) {
    const now = new Date()
    const anoAtual = now.getFullYear()
    const mesAtual = now.getMonth() + 1
    const hoje = now.getDate()
  
    let idade = anoAtual - ano
  
    if (mesAtual < mes || (mesAtual == mes && hoje < dia)) {
      idade -= 1
    }
    return idade
  }


// const teste = tarefa.parseInt(dataInclusao)
// console.log(teste)

// function compare(a,b) {
    
//     console.log( parseInt(a.dataInclusao));
//   }
  
//   console.log(compare('12/09/2019'));





// exports.getOrdenar =(req, res)=>{
    
//     res.status (200).send(compare)
/* } */

