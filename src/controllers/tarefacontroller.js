const tarefa = require("../model/tarefa.json");

// ROTA /tarefa
exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(tarefa)
}
// ROTA /:id
exports.getById = (req, res) => {
  const id = req.params.id
  res.status(200).send(tarefa.find(tarefa => tarefa.id == id))

// res.redirect(301 link do http 301) COLOCAR DIRECIONAMENTOS NAS ROTAS PARA O USUARIOS VISUALIZAR 
}

//ROTA /concluido
exports.getConcluido = (req, res) => {
  const result = tarefa.filter(tarefa => tarefa.concluido == "true")
  res.status(200).send(result)
}

// ROTA /pendente
exports.getPendente = (req, res) => {
  const result1 = tarefa.filter(tarefa => tarefa.concluido == "false")
  res.status(200).send(result1)
}
//  ROTA /:colaborador
exports.getColaborador = (req, res) => {
  const colaborador = req.params.colaborador
  res.status(200).send(tarefa.filter(tarefa => tarefa.colaborador == colaborador))
}

<<<<<<< HEAD
exports.getOrdenar = (res) => {
    // const id = req.params.id
    // const filtro = tarefa.find(tarefa => tarefa.id == id)
    // const valor = filtro.dataInclusao
    const arrData = dataInclusao.split("/")
    const dia = arrData[0]
    const mes = arrData[1]
    const ano = arrData[2]
    const data = converterData(ano, mes, dia)
    res.status(200).send(compare)
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

function compare(a,b) {
    
    console.log( parseInt(a.dataInclusao));
  }
  
//   console.log(compare('12/09/2019'));
=======

// ROTA PARA TAREFA ORDENADA /tarefaOrdenada
>>>>>>> 8f4d07239cb319ea21a9b873b35908728d408d4c

// MAQUINA DE CONVERSÃO STRING --> DATA
function stringParaData(data) {
  const split = data.split("/")
  const dataComSeparador = split[1] + "-" + split[0] + "-" + split[2]
  const dataComSeparador = `${split[1]} - ${split[0]} - ${split[2]}`
  const novaData = new Date(dataComSeparador)
  return novaData
}

// ROTA /tarefaOrdenada
exports.getCompare = (req, res) => {
  const dataOrdenadas = tarefa.sort(function (a, b) {
    if (stringParaData(a.dataInclusao) < stringParaData(b.dataInclusao)) {
      return 1;
    } if (stringParaData(a.dataInclusao) > stringParaData(b.dataInclusao)) {
      return -1;
    }
    return 0;
  })
  res.status(200).send(dataOrdenadas)
}