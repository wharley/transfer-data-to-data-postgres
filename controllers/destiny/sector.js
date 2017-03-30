'user strict'

const sequelize = require('sequelize')
const destinySequelize = require('../../loading/destiny')

exports.processDestinySectors = (sectors) => {

    return new Promise((resolve, reject) => {

        global['startSector'] = Date.now()

        processMap(sectors[0].sector)
            .then((data) => {
                global['endSector'] = Date.now()
                resolve(sectors)
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

function processInsert(sector) {

    return new Promise((resolve, reject) => {

        destinySequelize.Sector.upsert(setObject(sector))
            .then((data) => {
                resolve(true)
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

function setObject(sector) {

    const obj = {
        codigo_setor: sector.codigo_setor,
        descricao_setor: sector.descricao_setor,
        dt_cadastro: sector.dt_cadastro,
        dt_ult_alteracao: sector.dt_ult_alteracao
    }

    return obj
}