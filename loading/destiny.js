'use strict'

const env = process.env.NODE_ENV || "development"
const config = require('../config/destino.json')[env]
const path = require("path")
let Sequelize = require("sequelize")
let sequelize = new Sequelize(config.database, config.username, config.password, config)
let dbDestino = {}

const models = [
    '../models/productNote',
    '../models/note',
    '../models/person',
    '../models/unit',
    '../models/sector',
    '../models/group',
    '../models/subGroup',
    '../models/eanProduct',
    '../models/product'
];

let l = models.length

for (let i = 0; i < l; i++) {

    let model = sequelize.import(path.join(models[i]))

    dbDestino[model.name] = model
}

Object.keys(dbDestino).forEach((modelName) => {

    if ("associate" in dbDestino[modelName])
        dbDestino[modelName].associate(dbDestino)

})

dbDestino.sequelize = sequelize
dbDestino.Sequelize = Sequelize

module.exports = dbDestino