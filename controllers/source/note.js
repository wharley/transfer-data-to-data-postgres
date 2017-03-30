'user strict'

const sequelize = require('sequelize')
const sourceSequelize = require('../../loading/source')

exports.processNotes = () => {

    return new Promise((resolve, reject) => {

        sourceSequelize.Note.findAll({
                where: {
                    cod_sit: '00',
                    cod_mov: '12',
                    chv_nfe: { $not: null }
                }
            })
            .then((data) => {
                global['note'] = data
                resolve(global)
            }).catch((err) => {
                reject(err)
            })
    })

}