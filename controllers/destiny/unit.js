'user strict'

const sequelize = require('sequelize')
const destinySequelize = require('../../loading/destiny')

exports.processDestinyUnits = (units) => {

    return new Promise((resolve, reject) => {

        global['startUnit'] = Date.now()

        processMap(units[0].unit)
            .then((data) => {
                global['endUnit'] = Date.now()
                resolve(units)
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

function processInsert(unit) {

    return new Promise((resolve, reject) => {

        destinySequelize.Unit.upsert(setObject(unit))
            .then((data) => {
                resolve(true)
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

function setObject(unit) {

    const obj = {
        num_unid_medida: unit.num_unid_medida,
        unidade_medida: unit.unidade_medida,
        ft_conv: unit.ft_conv,
        descricao: unit.descricao,
        dt_cadastro: unit.dt_cadastro,
        dt_ult_alteracao: unit.dt_ult_alteracao
    }

    return obj
}