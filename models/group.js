'use strict'

module.exports = (sequelize, DataTypes) => {

    const group = sequelize.define('Group', {
        codigo_grupo: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'codigo_grupo'
        },
        descricao_grupo: {
            type: DataTypes.STRING,
            field: 'descricao_grupo'
        },
        dt_cadastro: {
            type: DataTypes.DATE,
            field: 'dt_cadastro'
        },
        dt_ult_alteracao: {
            type: DataTypes.DATE,
            field: 'dt_ult_alteracao'
        },
        codigo_setor: {
            type: DataTypes.INTEGER,
            field: 'codigo_setor'
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'grupo',
        timestamps: false,
        classMethods: {
            associate: (model) => {
                group.belongsTo(model.Sector, { foreignKey: 'codigo_setor' })
            }
        }
    });

    return group;
};