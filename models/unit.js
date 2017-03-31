'use strict'

module.exports = (sequelize, DataTypes) => {

    const unit = sequelize.define('Unit', {
        num_unid_medida: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'num_unid_medida'
        },
        unidade_medida: {
            type: DataTypes.STRING,
            field: 'unidade_medida',
            unique: true
        },
        ft_conv: {
            type: DataTypes.STRING,
            field: 'ft_conv'
        },
        descricao: {
            type: DataTypes.STRING,
            field: 'descricao'
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
        tableName: 'unidade_medida',
        timestamps: false
    });

    return unit;
};