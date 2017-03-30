'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processProducts = () => {

    return new Promise((resolve, reject) => {

        sourceSequelize.Product.findAll({})
            .then((data) => {
                global['product'] = data
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}