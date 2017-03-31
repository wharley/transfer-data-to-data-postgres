'user strict'

const sequelize = require('sequelize')
const destinySequelize = require('../../loading/destiny')

exports.processDestinyGroups = (groups) => {

    return new Promise((resolve, reject) => {

        global['startGroup'] = Date.now()

        processMap(groups[0].group)
            .then((data) => {
                global['endGroup'] = Date.now()
                resolve(groups)
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

function processInsert(group) {

    return new Promise((resolve, reject) => {

        destinySequelize.Group.upsert(setObject(group))
            .then((data) => {
                resolve(true)
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

function setObject(group) {

    const obj = {
        codigo_grupo: group.codigo_grupo,
        descricao_grupo: group.descricao_grupo,
        dt_cadastro: group.dt_cadastro,
        dt_ult_alteracao: group.dt_ult_alteracao,
        codigo_setor: group.codigo_setor,
    }

    return obj
}