'use strict'

const paramts = require('./config/parameter.json')["parameter"]
const sourceTransfer = require('./controllers/source/note')
const sourceUnit = require('./controllers/source/unit')
const sourceProduct = require('./controllers/source/product')
const sourcePerson = require('./controllers/source/person')

const destinyTransfer = require('./controllers/destiny/note')
const destinyUnit = require('./controllers/destiny/unit')
const destinyProduct = require('./controllers/destiny/product')
const destinyPerson = require('./controllers/destiny/person')
global = require('underscore')


if (paramts.transfer) {


    const unit = Promise.resolve(sourceUnit.processUnits())
    const product = Promise.resolve(sourceProduct.processProducts())
    const person = Promise.resolve(sourcePerson.processPersons())
    const note = Promise.resolve(sourceTransfer.processNotes())

    Promise.all([unit, product, person, note])
        .then((data) => {

            console.log(`Finalizando busca origem Unit ${global.endUnit - global.startUnit} ms`)
            console.log(`Finalizando busca origem Product ${global.endProduct - global.startProduct} ms`)
            console.log(`Finalizando busca origem Person ${global.endPerson - global.startPerson} ms`)
            console.log(`Finalizando busca origem Note ${global.endNote - global.startNote} ms`)

            destinyProduct.processDestinyProducts(data)
                .then(destinyPerson.processDestinyPersons)
                .then(destinyTransfer.processDestinyNotes)
                .then((data) => {

                    console.log(`Finalizando Insert/Update destino Unit ${global.endUnit - global.startUnit} ms`)
                    console.log(`Finalizando Insert/Update destino Product ${global.endProduct - global.startProduct} ms`)
                    console.log(`Finalizando Insert/Update destino Person ${global.endPerson - global.startPerson} ms`)
                    console.log(`Finalizando Insert/Update destino Note ${global.endNote - global.startNote} ms`)
                    console.log('Finalizado com sucesso')
                })
        })
}
if (paramts.product) {

    const unit = Promise.resolve(sourceUnit.processUnits())
    const product = Promise.resolve(sourceProduct.processProducts())

    Promise.all([unit, product])
        .then((data) => {

            console.log(`Finalizando busca origem Unit ${global.endUnit - global.startUnit} ms`)
            console.log(`Finalizando busca origem Product ${global.endProduct - global.startProduct} ms`)

            destinyProduct.processDestinyProducts(data)
                //                .then(destinyUnit.processDestinyUnits)
                .then((data) => {

                    console.log(`Finalizando Insert/Update destino Unit ${global.endUnit - global.startUnit} ms`)
                    console.log(`Finalizando Insert/Update destino Product ${global.endProduct - global.startProduct} ms`)
                    console.log('Finalizado com sucesso')

                })
        })
}
if (paramts.person) {

    const person = Promise.resolve(sourcePerson.processPersons())

    Promise.all(person)
        .then((data) => {

            console.log(`Finalizando busca origem Person ${global.endPerson - global.startPerson} ms`)

            destinyPerson.processDestinyPersons(data)
                .then(destinyPerson.processDestinyPersons)
                .then((data) => {
                    console.log(`Finalizando Insert/Update destino Person ${global.endPerson - global.startPerson} ms`)
                    console.log('Finalizado com sucesso')
                })
        })
}