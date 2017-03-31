'use strict'

module.exports = (sequelize, DataTypes) => {

    const subGroup = sequelize.define('SubGroup', {
        codigo_subgrupo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'codigo_subgrupo'
        },
        descricao_subgrupo: {
            type: DataTypes.STRING,
            field: 'descricao_subgrupo'
        },
        dt_cadastro: {
            type: DataTypes.DATE,
            field: 'dt_cadastro'
        },
        dt_ult_cadastro: {
            type: DataTypes.DATE,
            field: 'dt_ult_cadastro'
        },
        codigo_grupo: {
            type: DataTypes.INTEGER,
            field: 'codigo_grupo'
        },
        codigo_setor: {
            type: DataTypes.INTEGER,
            field: 'codigo_setor'
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'ek_subgrupo',
        timestamps: false
    });

    return subGroup;
};