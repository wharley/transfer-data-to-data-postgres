'user strict'

const sequelize = require('sequelize')
const destinySequelize = require('../../loading/destiny')

exports.processDestinyEanProducts = (eanProducts) => {

    return new Promise((resolve, reject) => {

        global['startEanProduct'] = Date.now()

        processMap(eanProducts[0].eanProduct)
            .then((data) => {
                global['endEanProduct'] = Date.now()
                resolve(eanProducts)
            })
            .catch((err) => {
                reject(err)
            })
    })

}

function processMap(data) {

    const promises = data.map(processInsert)

    return Promise.all(promises)

}

function processInsert(eanProduct) {

    return new Promise((resolve, reject) => {

        destinySequelize.EanProduct.upsert(setObject(eanProduct))
            .then((data) => {
                resolve(true)
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

function setObject(eanProduct) {

    const obj = {
        cod_produto: eanProduct.cod_produto,
        cod_barra: eanProduct.cod_barra,
        dt_cadastro: eanProduct.dt_cadastro,
        dt_ult_alteracao: eanProduct.dt_ult_alteracao
    }

    return obj
}