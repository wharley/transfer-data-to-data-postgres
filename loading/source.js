'use strict'

const env = process.env.NODE_ENV || "development"
const config = require('../config/source.json')[env]
const path = require("path")
let Sequelize = require("sequelize")
let sequelize = new Sequelize(config.database, config.username, config.password, config)
let dbOrigem = {}

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
]

let l = models.length

for (let i = 0; i < l; i++) {

    let model = sequelize.import(path.join(models[i]))

    dbOrigem[model.name] = model
}

Object.keys(dbOrigem).forEach((modelName) => {

    if ("associate" in dbOrigem[modelName])
        dbOrigem[modelName].associate(dbOrigem)
})

dbOrigem.sequelize = sequelize
dbOrigem.Sequelize = Sequelize

module.exports = dbOrigem