'use strict'

const paramts = require('./config/parameter.json')["parameter"]
const sourceProcess = require('./controllers/source/sourceData')
const destinyProcess = require('./controllers/destiny/destinyData')

global = require('underscore')

global = {
    models: [
        'Unit',
        'Sector',
        'Group',
        'SubGroup',
        'Product',
        'EanProduct',
        'Person',
        'Note'
    ]
}

processRoutines()






function processRoutines() {

    if (paramts.transfer) {

        const unit = Promise.resolve(sourceProcess.processSources(global.models[0]))
        const sector = Promise.resolve(sourceProcess.processSources(global.models[1]))
        const group = Promise.resolve(sourceProcess.processSources(global.models[2]))
        const subGroup = Promise.resolve(sourceProcess.processSources(global.models[3]))
        const product = Promise.resolve(sourceProcess.processSources(global.models[4]))
        const eanProduct = Promise.resolve(sourceProcess.processSources(global.models[5]))
        const person = Promise.resolve(sourceProcess.processSources(global.models[6]))
        const note = Promise.resolve(sourceProcess.processSources(global.models[7]))

        Promise.all([unit, sector, group, subGroup, product, eanProduct, person, note])
            .then((data) => {

                serachMenssage(8)

                global['index'] = 0
                destinyProcess.processDestinys(data)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then((data) => {

                        targetMenssage(8)

                        console.log('Finished successfully')
                    })
            })
    }
    if (paramts.product) {

        const unit = Promise.resolve(sourceProcess.processSources(global.models[0]))
        const sector = Promise.resolve(sourceProcess.processSources(global.models[1]))
        const group = Promise.resolve(sourceProcess.processSources(global.models[2]))
        const subGroup = Promise.resolve(sourceProcess.processSources(global.models[3]))
        const product = Promise.resolve(sourceProcess.processSources(global.models[4]))
        const eanProduct = Promise.resolve(sourceProcess.processSources(global.models[5]))

        Promise.all([unit, sector, group, subGroup, product, eanProduct])
            .then((data) => {

                searchMenssage(5)

                global['index'] = 0
                destinyProcess.processDestinys(data)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then((data) => {

                        targetMenssage(menssage)

                        console.log('Finished successfully')

                    })
            })
    }
    if (paramts.person) {

        const person = Promise.resolve(sourceProcess.processSources(global.models[6]))

        Promise.all(person)
            .then((data) => {

                searchMenssage(1)

                global['index'] = 6
                destinyProcess.processDestinys(data)
                    .then((data) => {

                        targetMenssage(1)
                        console.log('Finished successfully')
                    })
            })
    }
}

function searchMenssage(tamanho) {

    for (let i = 0; i < tamanho; i++)
        console.log(`Finishing source search ${global.models[i] } ${global['end' + global.models[i]] - global['start' +global.models[i]]} ms`)

    return true

}

function targetMenssage(tamanho) {

    for (let i = 0; i < tamanho; i++)
        console.log(`Finishing Insert/Update Target ${global.models[i] } ${global['end' + global.models[i]] - global['start' +global.models[i]]} ms`)

    return true

}