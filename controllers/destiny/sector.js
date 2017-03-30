'user strict'

var sequelize = require('sequelize')
let modelMongoSetor = require('./../../../models/mongoose/ek_setor')
let modelSequelize = require('./../../../config/db_sequelize_destino')

exports.processSetor = () => {

    searchSetorInsert()
        .then(insertSetores)
        .then(processTransMongo)
        .then(updateTransMongo)
        .then((data) => {
            console.log('Upload: Transferencia de Novos Setores Finalizados.', data)
        })
}

function searchSetorInsert() {

    return new Promise((resolve, reject) => {

        modelMongoSetor.find({
                "transferencia_destino": false,
                "transferencia_origem": true
            },

            "-_id -__v -transferencia_destino -transferencia_origem",

            { limit: 5000 }, (err, result) => {

                if (err) return console.log('ERRO 1 Setor Destino: ', err)

                resolve(result)
            })
    })
}

function insertSetores(result) {

    return new Promise((resolve, reject) => {

        modelSequelize.Setor.bulkCreate(result).then((data, err) => {

            if (err) return console.log('ERRO 2 Setor Destino: ', err)

            resolve(result)
        });
    })
}

function processTransMongo(result) {

    const codes = result.map(code => code.codigo_setor)

    return Promise.all(codes);
}

function updateTransMongo(result) {

    return new Promise((resolve, reject) => {

        let conditions = {
            "codigo_setor": { $in: result },
            "transferencia_destino": false,
            "transferencia_origem": true
        }
        let update = { $set: { "transferencia_destino": true } }
        let options = { multi: true }

        modelMongoSetor.update(conditions, update, options, (err, data) => {

            if (err) return console.log('ERRO 3 Setor Destino: ', err)

            resolve(true)
        })
    })
}