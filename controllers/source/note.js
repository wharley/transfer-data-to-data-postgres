'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processNotes = () => {

    return new Promise((resolve, reject) => {

        global['startNote'] = Date.now()

        sourceSequelize.Note.findAll({
                where: {
                    cod_sit: '00',
                    cod_mov: '12',
                    chv_nfe: { $not: null }
                }
            })
            .then((data) => {
                global['note'] = data
                global['endNote'] = Date.now()
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}