'use strict'

module.exports = (sequelize, DataTypes) => {

    const person = sequelize.define('Person', {
        cod_pessoa: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'cod_pessoa'
        },
        nome: {
            type: DataTypes.STRING,
            field: 'nome'
        },
        endereco: {
            type: DataTypes.STRING,
            field: 'endereco'
        },
        num_endereco: {
            type: DataTypes.STRING,
            field: 'num_endereco'
        },
        cidade: {
            type: DataTypes.STRING,
            field: 'cidade'
        },
        estado: {
            type: DataTypes.STRING,
            field: 'estado'
        },
        pais: {
            type: DataTypes.STRING,
            field: 'pais'
        },
        suframa: {
            type: DataTypes.STRING,
            field: 'suframa'
        },
        compl_endereco: {
            type: DataTypes.STRING,
            field: 'compl_endereco'
        },
        bairro: {
            type: DataTypes.STRING,
            field: 'bairro'
        },
        dt_cadastro: {
            type: DataTypes.DATE,
            field: 'dt_cadastro'
        },
        dt_ult_alteracao: {
            type: DataTypes.DATE,
            field: 'dt_ult_alteracao'
        },
        tipo_pessoa: {
            type: DataTypes.STRING,
            field: 'tipo_pessoa'
        },
        cnpj: {
            type: DataTypes.STRING,
            field: 'cnpj'
        },
        email: {
            type: DataTypes.STRING,
            field: 'email'
        },
        sexo: {
            type: DataTypes.STRING,
            field: 'sexo'
        },
        cod_rg: {
            type: DataTypes.STRING,
            field: 'cod_rg'
        },
        nome_pai: {
            type: DataTypes.STRING,
            field: 'nome_pai'
        },
        nome_mae: {
            type: DataTypes.STRING,
            field: 'nome_mae'
        },
        dt_nascimento: {
            type: DataTypes.DATE,
            field: 'dt_nascimento'
        },
        nome_mae: {
            type: DataTypes.STRING,
            field: 'nome_mae'
        },
        insc_municipal: {
            type: DataTypes.STRING,
            field: 'insc_municipal'
        },
        insc_estadual: {
            type: DataTypes.STRING,
            field: 'insc_estadual'
        },
        cod_atividade: {
            type: DataTypes.INTEGER,
            field: 'cod_atividade'
        },
        status: {
            type: DataTypes.STRING,
            field: 'status'
        },
        end_entrega: {
            type: DataTypes.STRING,
            field: 'end_entrega'
        },
        num_end_entrega: {
            type: DataTypes.STRING,
            field: 'num_end_entrega'
        },
        bairro_entrega: {
            type: DataTypes.STRING,
            field: 'bairro_entrega'
        },
        end_cobranca: {
            type: DataTypes.STRING,
            field: 'end_cobranca'
        },
        num_end_cobranca: {
            type: DataTypes.STRING,
            field: 'num_end_cobranca'
        },
        bairro_cobranca: {
            type: DataTypes.STRING,
            field: 'bairro_cobranca'
        },
        cidade_entrega: {
            type: DataTypes.STRING,
            field: 'cidade_entrega'
        },
        estado_entrega: {
            type: DataTypes.STRING,
            field: 'estado_entrega'
        },
        pais_entrega: {
            type: DataTypes.STRING,
            field: 'pais_entrega'
        },
        cidade_cobranca: {
            type: DataTypes.STRING,
            field: 'cidade_cobranca'
        },
        estado_cobranca: {
            type: DataTypes.STRING,
            field: 'estado_cobranca'
        },
        pais_cobranca: {
            type: DataTypes.STRING,
            field: 'pais_cobranca'
        },
        observacao: {
            type: DataTypes.STRING,
            field: 'observacao'
        },
        desc_fantasia: {
            type: DataTypes.STRING,
            field: 'desc_fantasia'
        },
        cep: {
            type: DataTypes.STRING,
            field: 'cep'
        },
        cep_entrega: {
            type: DataTypes.STRING,
            field: 'cep_entrega'
        },
        cep_cobranca: {
            type: DataTypes.STRING,
            field: 'cep_cobranca'
        },
        cpf: {
            type: DataTypes.STRING,
            field: 'cpf'
        },
        cod_ref_fornecedor: {
            type: DataTypes.STRING,
            field: 'cod_ref_fornecedor'
        },
        cod_ref_cliente: {
            type: DataTypes.STRING,
            field: 'cod_ref_cliente'
        },
        saldo_pessoa: {
            type: DataTypes.DOUBLE,
            field: 'saldo_pessoa'
        },
        contato_pessoa: {
            type: DataTypes.STRING,
            field: 'contato_pessoa'
        },
        pessoa_fisica_juridica: {
            type: DataTypes.STRING,
            field: 'pessoa_fisica_juridica'
        },
        site: {
            type: DataTypes.STRING,
            field: 'site'
        },
        compl_endereco_entrega: {
            type: DataTypes.STRING,
            field: 'compl_endereco_entrega'
        },
        compl_endereco_cobranca: {
            type: DataTypes.STRING,
            field: 'compl_endereco_cobranca'
        },
        insc_pr: {
            type: DataTypes.STRING,
            field: 'insc_pr'
        },
        produtor_rural: {
            type: DataTypes.STRING,
            field: 'produtor_rural'
        },
        cod_vend_comp: {
            type: DataTypes.INTEGER,
            field: 'cod_vend_comp'
        },
        senha_pessoa: {
            type: DataTypes.STRING,
            field: 'senha_pessoa'
        },
        codigo_setor_pessoa: {
            type: DataTypes.INTEGER,
            field: 'codigo_setor_pessoa'
        },
        codigo_grupo_pessoa: {
            type: DataTypes.INTEGER,
            field: 'codigo_grupo_pessoa'
        },
        codigo_subgrupo_pessoa: {
            type: DataTypes.INTEGER,
            field: 'codigo_subgrupo_pessoa'
        },
        flag_fatura_servico: {
            type: DataTypes.STRING,
            field: 'flag_fatura_servico'
        },
        iss_retido_servico: {
            type: DataTypes.STRING,
            field: 'iss_retido_servico'
        },
        cod_inf_obs: {
            type: DataTypes.INTEGER,
            field: 'cod_inf_obs'
        },
        flag_fatura_cupom: {
            type: DataTypes.STRING,
            field: 'flag_fatura_cupom'
        },
        crt_fiscal_pessoa: {
            type: DataTypes.STRING,
            field: 'crt_fiscal_pessoa'
        },
        imposto_federal_fonte: {
            type: DataTypes.STRING,
            field: 'imposto_federal_fonte'
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'pessoa',
        timestamps: false
    });

    return person;
};