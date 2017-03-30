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

            destinyProduct.processDestinyProducts(data)
                .then(destinyPerson.processDestinyPersons)
                .then(destinyTransfer.processDestinyNotes)
                .then((data) => {
                    console.log('Finalizado com sucesso')
                })
        })
}
if (paramts.product) {

    const unit = Promise.resolve(sourceUnit.processUnits())
    const product = Promise.resolve(sourceProduct.processProducts())

    Promise.all([unit, product])
        .then((data) => {

            destinyProduct.processDestinyProducts(data)
                .then((data) => {
                    console.log('Finalizado com sucesso')
                })
        })
}
if (paramts.person) {

    const person = Promise.resolve(sourcePerson.processPersons())

    Promise.all(person)
        .then((data) => {

            destinyPerson.processDestinyPersons(data)
                .then(destinyPerson.processDestinyPersons)
                .then((data) => {
                    console.log('Finalizado com sucesso')
                })
        })
}