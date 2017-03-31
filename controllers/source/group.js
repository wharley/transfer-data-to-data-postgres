'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processGroups = () => {

    return new Promise((resolve, reject) => {

        global['startGroup'] = Date.now()

        sourceSequelize.Group.findAll({})
            .then((data) => {
                global['group'] = data
                global['endGroup'] = Date.now()
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}