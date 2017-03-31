'use strict'

const paramts = require('./config/parameter.json')["parameter"]
const sourceTransfer = require('./controllers/source/note')
const sourceUnit = require('./controllers/source/unit')
const sourceSector = require('./controllers/source/sector')
const sourceGroup = require('./controllers/source/group')
const sourceSubGroup = require('./controllers/source/subGroup')
const sourceProduct = require('./controllers/source/product')
const sourceEanProduct = require('./controllers/source/eanProduct')
const sourcePerson = require('./controllers/source/person')

const destinyTransfer = require('./controllers/destiny/note')
const destinyUnit = require('./controllers/destiny/unit')
const destinySector = require('./controllers/destiny/sector')
const destinyGroup = require('./controllers/destiny/group')
const destinySubGroup = require('./controllers/destiny/subGroup')
const destinyProduct = require('./controllers/destiny/product')
const destinyEanProduct = require('./controllers/destiny/eanProduct')
const destinyPerson = require('./controllers/destiny/person')
global = require('underscore')

processRoutines()






function processRoutines() {

    if (paramts.transfer) {

        const unit = Promise.resolve(sourceUnit.processUnits())
        const sector = Promise.resolve(sourceSector.processSectors())
        const group = Promise.resolve(sourceGroup.processGroups())
        const subGroup = Promise.resolve(sourceSubGroup.processSubGroups())
        const product = Promise.resolve(sourceProduct.processProducts())
        const eanProduct = Promise.resolve(sourceEanProduct.processEanProducts())
        const person = Promise.resolve(sourcePerson.processPersons())
        const note = Promise.resolve(sourceTransfer.processNotes())

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

                destinyUnit.processDestinyUnits(data)
                    .then(destinySector.processDestinySectors)
                    .then(destinyGroup.processDestinyGroups)
                    .then(destinySubGroup.processDestinySubGroups)
                    .then(destinyProduct.processDestinyProducts)
                    .then(destinyEanProduct.processDestinyEanProducts)
                    .then(destinyPerson.processDestinyPersons)
                    .then(destinyTransfer.processDestinyNotes)
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

        const unit = Promise.resolve(sourceUnit.processUnits())
        const sector = Promise.resolve(sourceSector.processSectors())
        const group = Promise.resolve(sourceGroup.processGroups())
        const subGroup = Promise.resolve(sourceSubGroup.processSubGroups())
        const product = Promise.resolve(sourceProduct.processProducts())
        const eanProduct = Promise.resolve(sourceEanProduct.processEanProducts())

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

                destinyUnit.processDestinyUnits(data)
                    .then(destinySector.processDestinySectors)
                    .then(destinyGroup.processDestinyGroups)
                    .then(destinySubGroup.processDestinySubGroups)
                    .then(destinyProduct.processDestinyProducts)
                    .then(destinyEanProduct.processDestinyEanProducts)
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

        const person = Promise.resolve(sourcePerson.processPersons())

        Promise.all(person)
            .then((data) => {

                const menssage = [
                    `Finishing source search Person ${global.endPerson - global.startPerson} ms`
                ]

                printMenssage(menssage)

                destinyPerson.processDestinyPersons(data)
                    .then(destinyPerson.processDestinyPersons)
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