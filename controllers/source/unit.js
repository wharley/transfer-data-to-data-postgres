'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processUnits = () => {

    return new Promise((resolve, reject) => {

        global['startUnit'] = Date.now()

        sourceSequelize.Unit.findAll({})
            .then((data) => {
                global['unit'] = data
                global['endUnit'] = Date.now()
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}