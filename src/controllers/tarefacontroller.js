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

/// ROTA PARA TAREFA ORDENADA /tarefaOrdenada

// MAQUINA DE CONVERSÃO STRING --> DATA
function stringParaData(data) {
  const splita = data.split("/")
  const dataComSeparador = new Date(splita[2] + "-" + splita[1] + "-" + splita[0]) 
  // const dataComSeparador = `${split[1]} - ${split[0]} - ${split[2]}`
  
  return dataComSeparador
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


//ROTA diferença da data de inclusão com a data de finalização.

exports.getTempoTarefa = (request, response) => {
  tarefa.forEach(tarefa => {
    console.log(tarefa)
    tarefa.tempoDecorrido = diferencaDias(
      conversorData(tarefa.dataInclusao),
      conversorData(tarefa.conclusao)
    )
  })

  response.status(200).send(tarefa)
}
// MAQUINA DE CONVERSÃO STRING --> DATA
const conversorData = (dataString) => {
  const dia = dataString.split("/")[0]
  const mes = dataString.split("/")[1] - 1
  const ano = dataString.split("/")[2]

  const dataFormatada = new Date(ano, mes, dia)
  return dataFormatada
}

//MAQUINA DE IDENTIFICACAO DE DIFERENCA DE DIAS +  STAMPtime
const diferencaDias = (dataInicial, dataFinal) => {
  const diferencaTempo = Math.abs(dataFinal - dataInicial)
  const diferencaDias = Math.ceil(diferencaTempo / (1000 * 60 * 60 * 24))
  return diferencaDias
}


// ROTA /nomeSobrenome

exports.getNomeSobrenome = (req, res) => {
  const nome = req.params.nome
  const sobrenome = rq.params.sobrenome
  res.status(200).send(tarefa.filter(tarefa => tarefa.nome == nome))
  res.status(200).send(tarefa.filter(tarefa => tarefa.sobrenome == sobrenome))
}