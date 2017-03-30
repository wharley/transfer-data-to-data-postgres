'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processPersons = () => {

    return new Promise((resolve, reject) => {

        global['startPerson'] = Date.now()

        sourceSequelize.Person.findAll({})
            .then((data) => {
                global['person'] = data
                global['endPerson'] = Date.now()
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}