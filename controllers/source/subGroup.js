'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processSubGroups = () => {

    return new Promise((resolve, reject) => {

        global['startSubGroup'] = Date.now()

        sourceSequelize.SubGroup.findAll({})
            .then((data) => {
                global['subGroup'] = data
                global['endSubGroup'] = Date.now()
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}