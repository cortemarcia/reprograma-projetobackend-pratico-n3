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


// ROTA PARA TAREFA ORDENADA /tarefaOrdenada

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