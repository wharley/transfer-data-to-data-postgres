'use strict'

const paramts = require('./config/parameter.json')["parameter"]
const sourceTransfer = require('./controllers/source/note')
const sourceUnit = require('./controllers/source/unit')
const sourceSector = require('./controllers/source/sector')
const sourceProduct = require('./controllers/source/product')
const sourcePerson = require('./controllers/source/person')

const destinyTransfer = require('./controllers/destiny/note')
const destinyUnit = require('./controllers/destiny/unit')
const destinySector = require('./controllers/destiny/sector')
const destinyProduct = require('./controllers/destiny/product')
const destinyPerson = require('./controllers/destiny/person')
global = require('underscore')


if (paramts.transfer) {


    const unit = Promise.resolve(sourceUnit.processUnits())
    const sector = Promise.resolve(sourceSector.processSectors())
    const product = Promise.resolve(sourceProduct.processProducts())
    const person = Promise.resolve(sourcePerson.processPersons())
    const note = Promise.resolve(sourceTransfer.processNotes())

    Promise.all([unit, sector, product, person, note])
        .then((data) => {

            const menssage = [
                `Finalizando busca origem Unit ${global.endUnit - global.startUnit} ms`,
                `Finalizando busca origem Sector ${global.endSector - global.startSector} ms`,
                `Finalizando busca origem Product ${global.endProduct - global.startProduct} ms`,
                `Finalizando busca origem Person ${global.endPerson - global.startPerson} ms`,
                `Finalizando busca origem Note ${global.endNote - global.startNote} ms`
            ]

            printMenssage(menssage)

            destinyUnit.processDestinyUnits(data)
                .then(destinySector.processDestinySectors)
                .then(destinyProduct.processDestinyProducts)
                .then(destinyPerson.processDestinyPersons)
                .then(destinyTransfer.processDestinyNotes)
                .then((data) => {

                    const menssage = [
                        `Finalizando Insert/Update destino Unit ${global.endUnit - global.startUnit} ms`,
                        `Finalizando Insert/Update destino Sector ${global.endSector - global.startSector} ms`,
                        `Finalizando Insert/Update destino Product ${global.endProduct - global.startProduct} ms`,
                        `Finalizando Insert/Update destino Person ${global.endPerson - global.startPerson} ms`,
                        `Finalizando Insert/Update destino Note ${global.endNote - global.startNote} ms`
                    ]

                    printMenssage(menssage)

                    console.log('Finalizado com sucesso')
                })
        })
}
if (paramts.product) {

    const unit = Promise.resolve(sourceUnit.processUnits())
    const sector = Promise.resolve(sourceSector.processSectors())
    const product = Promise.resolve(sourceProduct.processProducts())

    Promise.all([unit, sector, product])
        .then((data) => {

            const menssage = [
                `Finalizando busca origem Unit ${global.endUnit - global.startUnit} ms`,
                `Finalizando busca origem Sector ${global.endSector - global.startSector} ms`,
                `Finalizando busca origem Product ${global.endProduct - global.startProduct} ms`
            ]

            printMenssage(menssage)

            destinyUnit.processDestinyUnits(data)
                .then(destinySector.processDestinySectors)
                .then(destinyProduct.processDestinyProducts)
                .then((data) => {

                    const menssage = [
                        `Finalizando Insert/Update destino Unit ${global.endUnit - global.startUnit} ms`,
                        `Finalizando Insert/Update destino Sector ${global.endSector - global.startSector} ms`,
                        `Finalizando Insert/Update destino Product ${global.endProduct - global.startProduct} ms`
                    ]

                    printMenssage(menssage)

                    console.log('Finalizado com sucesso')

                })
        })
}
if (paramts.person) {

    const person = Promise.resolve(sourcePerson.processPersons())

    Promise.all(person)
        .then((data) => {

            const menssage = [
                `Finalizando busca origem Person ${global.endPerson - global.startPerson} ms`
            ]

            printMenssage(menssage)

            destinyPerson.processDestinyPersons(data)
                .then(destinyPerson.processDestinyPersons)
                .then((data) => {
                    const menssage = [
                        `Finalizando Insert/Update destino Person ${global.endPerson - global.startPerson} ms`
                    ]

                    printMenssage(menssage)
                    console.log('Finalizado com sucesso')
                })
        })
}

function printMenssage(menssage) {

    for (let i = 0; i < menssage.length; i++)
        console.log(menssage[i])

    return true

}