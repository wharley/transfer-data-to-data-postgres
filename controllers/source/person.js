'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processPersons = () => {

    return new Promise((resolve, reject) => {

        sourceSequelize.Person.findAll({})
            .then((data) => {
                global['person'] = data
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}