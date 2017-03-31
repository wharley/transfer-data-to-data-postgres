'use strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processSources = (models) => {

    return new Promise((resolve, reject) => {

        global['start' + models] = Date.now()

        sourceSequelize[models].findAll({})
            .then((data) => {
                global[models.toLowerCase()] = data
                global['end' + models] = Date.now()
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}