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

exports.getTempoDeExecucao = (req, res) => {
  const datas = tarefa.sort(function (a, b) {
    
    let menos = a.dataInclusao - b.conclusao
    let diferenteDias =  Math.ceil (menos / (1000 *60 *60*24))
    return diferenteDias
  })
  console.log(datas)
  res.status(200).send(datas)

  // obs: Fazer 3 funcoes, sendo:
  // 1 string --> data;
  // 2 Achar diferenca de tempo usando o for each
  // 3 ver no git hub do reprograma.
}
// ROTA /nomeSobrenome

exports.getNomeSobrenome = (req, res) => {
  const nome = req.params.nome
  const sobrenome = rq.params.sobrenome
  res.status(200).send(tarefa.filter(tarefa => tarefa.nome == nome))
  res.status(200).send(tarefa.filter(tarefa => tarefa.sobrenome == sobrenome))
}