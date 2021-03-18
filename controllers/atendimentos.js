const Atendimento = require('../models/atendimentos')

module.exports = app =>{

    //Buscar dados da API
    app.get('/atendimentos', (req,  res) => {

        Atendimento.lista()
            .then(resultados => res.status(200).json(resultados))
            .catch(erros => res.status(400).json(erros))
    } )
    //Busca dados por ID
    app.get('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)
        Atendimento.buscaPorId(id, res)

    })
    //Mandar dados para a API
    app.post('/atendimentos', (req, res) => {

        //console.log(req.body)
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
            .then(atendimentoCadastrado => res.status(201).json(atendimentoCadastrado))
            .catch(erros => res.status(400).json(erros))
    })
    //Alterar dados da API
    app.patch('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)

    })
    //Deletar dados da API
    app.delete('/atendimentos/:id', (req, res) => {

        const id = parseInt(req.params.id)
        Atendimento.deleta(id, res)

    })

}



