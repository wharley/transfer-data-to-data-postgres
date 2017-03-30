'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processProducts = () => {

    return new Promise((resolve, reject) => {

        global['startProduct'] = Date.now()

        sourceSequelize.Product.findAll({})
            .then((data) => {
                global['product'] = data
                global['endProduct'] = Date.now()
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}