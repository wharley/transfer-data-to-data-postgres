'use strict'

module.exports = (sequelize, DataTypes) => {

    const product = sequelize.define('Product', {
        cod_produto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'cod_produto'
        },
        desc_produto: {
            type: DataTypes.STRING,
            field: 'desc_produto'
        },
        desc_prod_resumida: {
            type: DataTypes.STRING,
            field: 'desc_prod_resumida'
        },
        unid_compra: {
            type: DataTypes.STRING,
            field: 'unid_compra'
        },
        unid_venda: {
            type: DataTypes.STRING,
            field: 'unid_venda'
        },
        unid_inv: {
            type: DataTypes.STRING,
            field: 'unid_inv'
        },
        peso: {
            type: DataTypes.DOUBLE,
            field: 'peso'
        },
        cod_ncm: {
            type: DataTypes.STRING,
            field: 'cod_ncm'
        },
        tipo_item: {
            type: DataTypes.INTEGER,
            field: 'tipo_item'
        },
        exp_ipi: {
            type: DataTypes.STRING,
            field: 'exp_ipi'
        },
        cod_gen: {
            type: DataTypes.STRING,
            field: 'cod_gen'
        },
        cod_lst: {
            type: DataTypes.STRING,
            field: 'cod_lst'
        },
        status_prod: {
            type: DataTypes.STRING,
            field: 'status_prod'
        },
        dt_cadastro: {
            type: DataTypes.DATE,
            field: 'dt_cadastro'
        },
        dt_ult_alteracao: {
            type: DataTypes.DATE,
            field: 'dt_ult_alteracao'
        },
        fla_balanca: {
            type: DataTypes.STRING,
            field: 'fla_balanca'
        },
        origem: {
            type: DataTypes.INTEGER,
            field: 'origem'
        },
        cod_barra: {
            type: DataTypes.STRING,
            field: 'cod_barra'
        },
        codigo_setor: {
            type: DataTypes.INTEGER,
            field: 'codigo_setor'
        },
        codigo_grupo: {
            type: DataTypes.INTEGER,
            field: 'codigo_grupo'
        },
        codigo_subgrupo: {
            type: DataTypes.INTEGER,
            field: 'codigo_subgrupo'
        },
        mva: {
            type: DataTypes.STRING,
            field: 'mva'
        },
        aliquota_saida: {
            type: DataTypes.INTEGER,
            field: 'aliquota_saida'
        },
        tributacao_saida: {
            type: DataTypes.STRING,
            field: 'tributacao_saida'
        },
        tributacao_entrada: {
            type: DataTypes.STRING,
            field: 'tributacao_entrada'
        },
        codigo_fabricante: {
            type: DataTypes.STRING,
            field: 'codigo_fabricante'
        },
        aplicacao_produto: {
            type: DataTypes.STRING,
            field: 'aplicacao_produto'
        },
        codigo_fabrica: {
            type: DataTypes.STRING,
            field: 'codigo_fabrica'
        },
        localizacao_produto: { //--------------------------------------------------------------------------------
            type: DataTypes.STRING,
            field: 'localizacao_produto'
        },
        tempo_reposicao: {
            type: DataTypes.INTEGER,
            field: 'tempo_reposicao'
        },
        dias_seguranca: {
            type: DataTypes.INTEGER,
            field: 'dias_seguranca'
        },
        codigo_particao: {
            type: DataTypes.INTEGER,
            field: 'codigo_particao'
        },
        composto: {
            type: DataTypes.STRING,
            field: 'composto'
        },
        seq_figura: {
            type: DataTypes.INTEGER,
            field: 'seq_figura'
        },
        aliquota_cupom: {
            type: DataTypes.INTEGER,
            field: 'aliquota_cupom'
        },
        cst_ipi_entrada: {
            type: DataTypes.STRING,
            field: 'cst_ipi_entrada'
        },
        cst_ipi_saida: {
            type: DataTypes.STRING,
            field: 'cst_ipi_saida'
        },
        cst_pis_produto: {
            type: DataTypes.STRING,
            field: 'cst_pis_produto'
        },
        cst_cofins_produto: {
            type: DataTypes.STRING,
            field: 'cst_cofins_produto'
        },
        cod_produto_ant: {
            type: DataTypes.STRING,
            field: 'cod_produto_ant'
        },
        aliquota_ir: {
            type: DataTypes.DOUBLE,
            field: 'aliquota_ir'
        },
        aliquota_inss: {
            type: DataTypes.DOUBLE,
            field: 'aliquota_inss'
        },
        aliquota_pis: {
            type: DataTypes.DOUBLE,
            field: 'aliquota_pis'
        },
        aliquota_cofins: {
            type: DataTypes.DOUBLE,
            field: 'aliquota_cofins'
        },
        aliquota_csll: {
            type: DataTypes.DOUBLE,
            field: 'aliquota_csll'
        },
        aliquota_issqn: {
            type: DataTypes.DOUBLE,
            field: 'aliquota_issqn'
        },
        codigo_categoria: {
            type: DataTypes.INTEGER,
            field: 'codigo_categoria'
        },
        seq_figura_pis_cofins: {
            type: DataTypes.INTEGER,
            field: 'seq_figura_pis_cofins'
        },
        descricao_tecnica: {
            type: DataTypes.STRING,
            field: 'descricao_tecnica'
        },
        // foto_produto: Number,         //bytea
        obs_produto: {
            type: DataTypes.STRING,
            field: 'obs_produto'
        },
        fator_conversao: {
            type: DataTypes.DOUBLE,
            field: 'fator_conversao'
        },
        seq_figura_ipi: {
            type: DataTypes.INTEGER,
            field: 'seq_figura_ipi'
        },
        ident_merc: {
            type: DataTypes.STRING,
            field: 'ident_merc'
        },
        cod_produto_princ: {
            type: DataTypes.STRING,
            field: 'cod_produto_princ'
        },
        seq_plano_contas: {
            type: DataTypes.INTEGER,
            field: 'seq_plano_contas'
        },
        nr_parc: {
            type: DataTypes.DOUBLE,
            field: 'nr_parc'
        },
        seq_desc_recibo: {
            type: DataTypes.INTEGER,
            field: 'seq_desc_recibo'
        },
        func: {
            type: DataTypes.STRING,
            field: 'func'
        },
        vida_util: {
            type: DataTypes.DOUBLE,
            field: 'vida_util'
        },
        cod_anp: {
            type: DataTypes.STRING,
            field: 'cod_anp'
        },
        seq_linha: {
            type: DataTypes.INTEGER,
            field: 'seq_linha'
        },
        seq_marca: {
            type: DataTypes.INTEGER,
            field: 'seq_marca'
        },
        medida_interna: {
            type: DataTypes.DOUBLE,
            field: 'medida_interna'
        },
        medida_externa: {
            type: DataTypes.DOUBLE,
            field: 'medida_externa'
        },
        medida_altura: {
            type: DataTypes.DOUBLE,
            field: 'medida_altura'
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'produto',
        timestamps: false
    });

    return product;
};