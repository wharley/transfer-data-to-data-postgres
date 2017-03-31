'user strict'

const sequelize = require('sequelize')
const destinySequelize = require('../../loading/destiny')
const structure = require('../../structure/structure')

let sourceModels = ''

exports.processDestinys = (datas) => {

    return new Promise((resolve, reject) => {

        global['start' + global.models[global.index]] = Date.now()

        processMap(datas[0][global.models[global.index].toLowerCase()])
            .then((data) => {
                global['end' + global.models[global.index]] = Date.now()
                global.index++

                    resolve(datas)
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

function processInsert(source) {

    return new Promise((resolve, reject) => {

        destinySequelize[global.models[global.index]].upsert(structure[global.models[global.index]](source))
            .then((data) => {
                resolve(true)
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}