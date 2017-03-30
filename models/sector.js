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
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'ek_setor',
        timestamps: false
    });

    return sector;
};