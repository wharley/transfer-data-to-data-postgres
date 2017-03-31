'user strict'

const sequelize = require('sequelize')
const destinySequelize = require('../../loading/destiny')

exports.processDestinySubGroups = (subGroups) => {

    return new Promise((resolve, reject) => {

        global['startSubGroup'] = Date.now()

        processMap(subGroups[0].subGroup)
            .then((data) => {
                global['endSubGroup'] = Date.now()
                resolve(subGroups)
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

function processInsert(subGroup) {

    return new Promise((resolve, reject) => {

        destinySequelize.SubGroup.upsert(setObject(subGroup))
            .then((data) => {
                resolve(true)
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

function setObject(subGroup) {

    const obj = {
        codigo_subgrupo: subGroup.codigo_subgrupo,
        descricao_subgrupo: subGroup.descricao_subgrupo,
        dt_cadastro: subGroup.dt_cadastro,
        dt_ult_alteracao: subGroup.dt_ult_alteracao,
        codigo_setor: subGroup.codigo_setor,
        codigo_grupo: subGroup.codigo_grupo
    }

    return obj
}