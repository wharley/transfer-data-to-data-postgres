'use strict'

module.exports = (sequelize, DataTypes) => {

    const eanProduct = sequelize.define('EanProduct', {
        cod_produto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'cod_produto'
        },
        cod_barra: {
            type: DataTypes.STRING,
            field: 'cod_barra'
        },
        dt_cadastro: {
            type: DataTypes.DATE,
            field: 'dt_cadastro'
        },
        dt_ult_alteracao: {
            type: DataTypes.DATE,
            field: 'dt_ult_alteracao'
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'ek_produto_ean',
        timestamps: false
    });

    return eanProduct;
};