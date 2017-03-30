'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processSectors = () => {

    return new Promise((resolve, reject) => {

        global['startSector'] = Date.now()

        sourceSequelize.Sector.findAll({})
            .then((data) => {
                global['sector'] = data
                global['endSector'] = Date.now()
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}