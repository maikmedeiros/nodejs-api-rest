//const fs = require('fs')
// fs.createReadStream("./assets/cachorro.png",(erro, buffer) => {
//
//     console.log('Imagem foi bufferizada')
//     console.log(buffer)
//
//     fs.writeFile('./assets/cachorro2.png', buffer, erro => {
//         console.log('imagem foi escrita')
//     })
// })

const fs = require('fs')
const path = require('path')

module.exports = (caminho,nomeDoArquivo, callbackImagemCriada)  => {


    const tiposValidos = ['jpg', 'png', 'jpeg']
    //extname - Pega o dado que vem após o ponto do arquivo.
    const tipo = path.extname(caminho)
    //Indexof - Retorna a posição da primeira ocorrência de um valor especificado em uma string
    const tipoEhValido = tiposValidos.indexOf(tipo.substring(1)) !== -1

    if(tipoEhValido){

        const novoCaminho = `./assets/imagens/${nomeDoArquivo}${tipo}`

        fs.createReadStream(caminho)
            .pipe(fs.createWriteStream(novoCaminho))
            .on('finish', () => callbackImagemCriada(false, novoCaminho))

    }else {

        const erro = "Tipo é invalido"
        console.log('Erro! Tipo Invalido')
        callbackImagemCriada(erro)

    }


}

