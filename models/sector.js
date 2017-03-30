'use strict'

module.exports = (sequelize, DataTypes) => {

    const sector = sequelize.define('Sector', {
        codigo_setor: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'codigo_setor'
        },
        descricao_setor: {
            type: DataTypes.STRING,
            field: 'descricao_setor'
        },
        dt_cadastro: {
            type: DataTypes.DATE,
            field: 'dt_cadastro'
        },
        dt_ult_alteracao: {
            type: DataTypes.DATE,
            field: 'dt_ult_alteracao'
        },
        margem_preco: {
            type: DataTypes.DOUBLE,
            field: 'margem_preco'
        },
        exporta_site: {
            type: DataTypes.STRING,
            field: 'exporta_site'
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'setor',
        timestamps: false
    });

    return sector;
};