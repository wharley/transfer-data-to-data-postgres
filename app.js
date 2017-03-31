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

                const menssage = [
                    `Finishing source search Unit ${global.endUnit - global.startUnit} ms`,
                    `Finishing source search Sector ${global.endSector - global.startSector} ms`,
                    `Finishing source search Group ${global.endGroup - global.startGroup} ms`,
                    `Finishing source search SubGroup ${global.endSubGroup - global.startSubGroup} ms`,
                    `Finishing source search Product ${global.endProduct - global.startProduct} ms`,
                    `Finishing source search EanProduct ${global.endEanProduct - global.startEanProduct} ms`,
                    `Finishing source search Person ${global.endPerson - global.startPerson} ms`,
                    `Finishing source search Note ${global.endNote - global.startNote} ms`
                ]

                printMenssage(menssage)

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

                        const menssage = [
                            `Finishing Insert/Update Target Unit ${global.endUnit - global.startUnit} ms`,
                            `Finishing Insert/Update Target Sector ${global.endSector - global.startSector} ms`,
                            `Finishing Insert/Update Target Group ${global.endGroup - global.startGroup} ms`,
                            `Finishing Insert/Update Target SubGroup ${global.endSubGroup - global.startSubGroup} ms`,
                            `Finishing Insert/Update Target Product ${global.endProduct - global.startProduct} ms`,
                            `Finishing Insert/Update Target EanProduct ${global.endEanProduct - global.startEanProduct} ms`,
                            `Finishing Insert/Update Target Person ${global.endPerson - global.startPerson} ms`,
                            `Finishing Insert/Update Target Note ${global.endNote - global.startNote} ms`
                        ]

                        printMenssage(menssage)

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

                const menssage = [
                    `Finishing source search Unit ${global.endUnit - global.startUnit} ms`,
                    `Finishing source search Sector ${global.endSector - global.startSector} ms`,
                    `Finishing source search Group ${global.endGroup - global.startGroup} ms`,
                    `Finishing source search SubGroup ${global.endSubGroup - global.startSubGroup} ms`,
                    `Finishing source search Product ${global.endProduct - global.startProduct} ms`,
                    `Finishing source search EanProduct ${global.endEanProduct - global.startEanProduct} ms`
                ]

                printMenssage(menssage)

                global['index'] = 0
                destinyProcess.processDestinys(data)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then(destinyProcess.processDestinys)
                    .then((data) => {

                        const menssage = [
                            `Finishing Insert/Update Target Unit ${global.endUnit - global.startUnit} ms`,
                            `Finishing Insert/Update Target Sector ${global.endSector - global.startSector} ms`,
                            `Finishing Insert/Update Target Sector ${global.endGroup - global.startGroup} ms`,
                            `Finishing Insert/Update Target Sector ${global.endSubGroup - global.startSubGroup} ms`,
                            `Finishing Insert/Update Target Product ${global.endProduct - global.startProduct} ms`,
                            `Finishing Insert/Update Target EanProduct ${global.endEanProduct - global.startEanProduct} ms`
                        ]

                        printMenssage(menssage)

                        console.log('Finished successfully')

                    })
            })
    }
    if (paramts.person) {

        const person = Promise.resolve(sourceProcess.processSources(global.models[6]))

        Promise.all(person)
            .then((data) => {

                const menssage = [
                    `Finishing source search Person ${global.endPerson - global.startPerson} ms`
                ]

                printMenssage(menssage)

                global['index'] = 6
                destinyProcess.processDestinys(data)
                    .then((data) => {
                        const menssage = [
                            `Finishing Insert/Update Target Person ${global.endPerson - global.startPerson} ms`
                        ]

                        printMenssage(menssage)
                        console.log('Finished successfully')
                    })
            })
    }
}

function printMenssage(menssage) {

    for (let i = 0; i < menssage.length; i++)
        console.log(menssage[i])

    return true

}