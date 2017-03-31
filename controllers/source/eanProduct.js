'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processEanProducts = () => {

    return new Promise((resolve, reject) => {

        global['startEanProduct'] = Date.now()

        sourceSequelize.EanProduct.findAll({})
            .then((data) => {
                global['eanProduct'] = data
                global['endEanProduct'] = Date.now()
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}