'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processUnits = () => {

    return new Promise((resolve, reject) => {

        sourceSequelize.Unit.findAll({})
            .then((data) => {
                global['unit'] = data
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}