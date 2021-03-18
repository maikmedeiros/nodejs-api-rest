//Framework Express - Incluindo
const express = require('express')
//Responsável por agrupar todas as rotas - Necessário ser instalado
const consign = require('consign')
//Responsável por realizar a leitura dos arquivos enviados para a API
const bodyParser = require('body-parser')

module.exports = () => {
    const app = express()

    //Usando os formatos que a API vai entender se form enviados para ela (URLenconded e Json)
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())

    consign()
        .include('controllers')
        .into(app)

    return app
}
