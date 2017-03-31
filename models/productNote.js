'use strict'

module.exports = (sequelize, DataTypes) => {

    const productNote = sequelize.define('ProductNote', {
        seq_nota: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'seq_nota'
        },
        seq_item: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            field: 'seq_item'
        },
        cod_item: {
            type: DataTypes.INTEGER,
            field: 'cod_item'
        },
        quantidade: {
            type: DataTypes.DOUBLE,
            field: 'quantidade'
        },
        unidade: {
            type: DataTypes.STRING,
            field: 'unidade'
        },
        vl_item: {
            type: DataTypes.DOUBLE,
            field: 'vl_item'
        },
        vl_desc: {
            type: DataTypes.DOUBLE,
            field: 'vl_desc'
        },
        ind_mov: {
            type: DataTypes.STRING,
            field: 'ind_mov'
        },
        cst_icms: {
            type: DataTypes.STRING,
            field: 'cst_icms'
        },
        cfop: {
            type: DataTypes.STRING,
            field: 'cfop'
        },
        cod_nat: {
            type: DataTypes.STRING,
            field: 'cod_nat'
        },
        vl_bc_icms: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_icms'
        },
        aliq_icms: {
            type: DataTypes.DOUBLE,
            field: 'aliq_icms'
        },
        vl_icms: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms'
        },
        vl_bc_icms_st: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_icms_st'
        },
        aliq_st: {
            type: DataTypes.DOUBLE,
            field: 'aliq_st'
        },
        vl_icms_st: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms_st'
        },
        ind_apur: {
            type: DataTypes.STRING,
            field: 'ind_apur'
        },
        cst_ipi: {
            type: DataTypes.STRING,
            field: 'cst_ipi'
        },
        cod_enq: {
            type: DataTypes.STRING,
            field: 'cod_enq'
        },
        vl_bc_ipi: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_ipi'
        },
        vl_ipi: {
            type: DataTypes.DOUBLE,
            field: 'vl_ipi'
        },
        cst_pis: {
            type: DataTypes.STRING,
            field: 'cst_pis'
        },
        vl_bc_pis: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_pis'
        },
        aliq_pis_percentual: {
            type: DataTypes.DOUBLE,
            field: 'aliq_pis_percentual'
        },
        quant_bc_pis: {
            type: DataTypes.DOUBLE,
            field: 'quant_bc_pis'
        },
        aliq_pis_reais: {
            type: DataTypes.DOUBLE,
            field: 'aliq_pis_reais'
        },
        vl_pis: {
            type: DataTypes.DOUBLE,
            field: 'vl_pis'
        },
        cst_cofins: {
            type: DataTypes.DOUBLE,
            field: 'cst_cofins'
        },
        vl_bc_cofins: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_cofins'
        },
        aliq_cofins_percentual: {
            type: DataTypes.DOUBLE,
            field: 'aliq_cofins_percentual'
        },
        quant_bc_cofins: {
            type: DataTypes.DOUBLE,
            field: 'quant_bc_cofins'
        },
        aliq_cofins_reais: {
            type: DataTypes.DOUBLE,
            field: 'aliq_cofins_reais'
        },
        vl_cofins: {
            type: DataTypes.DOUBLE,
            field: 'vl_cofins'
        },
        cod_cta: {
            type: DataTypes.STRING,
            field: 'cod_cta'
        },
        vl_red_bc: {
            type: DataTypes.DOUBLE,
            field: 'vl_red_bc'
        },
        cod_obs: {
            type: DataTypes.INTEGER,
            field: 'cod_obs'
        },
        dt_cadastro: {
            type: DataTypes.DATE,
            field: 'dt_cadastro'
        },
        dt_ult_alteracao: {
            type: DataTypes.DATE,
            field: 'dt_ult_alteracao'
        },
        vl_total_item: {
            type: DataTypes.DOUBLE,
            field: 'vl_total_item'
        },
        complemento: {
            type: DataTypes.STRING,
            field: 'complemento'
        },
        vl_despesa: {
            type: DataTypes.DOUBLE,
            field: 'vl_despesa'
        },
        grade: {
            type: DataTypes.INTEGER,
            field: 'grade'
        },
        vl_frete: {
            type: DataTypes.DOUBLE,
            field: 'vl_frete'
        },
        perc_desconto: {
            type: DataTypes.DOUBLE,
            field: 'perc_desconto'
        },
        preco_custo: {
            type: DataTypes.DOUBLE,
            field: 'preco_custo'
        },
        preco_custo: {
            type: DataTypes.DOUBLE,
            field: 'preco_custo'
        },
        preco_pmz: {
            type: DataTypes.DOUBLE,
            field: 'preco_pmz'
        },
        preco_venda: {
            type: DataTypes.DOUBLE,
            field: 'preco_venda'
        },
        margem_preco: {
            type: DataTypes.DOUBLE,
            field: 'margem_preco'
        },
        preco_final: {
            type: DataTypes.DOUBLE,
            field: 'preco_final'
        },
        peso: {
            type: DataTypes.DOUBLE,
            field: 'peso'
        },
        seq_item_ant: {
            type: DataTypes.INTEGER,
            field: 'seq_item_ant'
        },
        seq_pedido_cli: {
            type: DataTypes.INTEGER,
            field: 'seq_pedido_cli'
        },
        vl_bc_issqn: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_issqn'
        },
        aliq_issqn: {
            type: DataTypes.DOUBLE,
            field: 'aliq_issqn'
        },
        vl_issqn: {
            type: DataTypes.DOUBLE,
            field: 'vl_issqn'
        },
        doc_importacao: {
            type: DataTypes.STRING,
            field: 'doc_importacao'
        },
        data_doc_importacao: {
            type: DataTypes.DATE,
            field: 'data_doc_importacao'
        },
        local_desembaraco_importacao: {
            type: DataTypes.STRING,
            field: 'local_desembaraco_importacao'
        },
        estado_desembaraco_importacao: {
            type: DataTypes.STRING,
            field: 'estado_desembaraco_importacao'
        },
        data_desembaraco_importacao: {
            type: DataTypes.DATE,
            field: 'data_desembaraco_importacao'
        },
        codigo_exportador: {
            type: DataTypes.INTEGER,
            field: 'codigo_exportador'
        },
        vl_bc_importacao: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_importacao'
        },
        vl_imposto_importacao: {
            type: DataTypes.DOUBLE,
            field: 'vl_imposto_importacao'
        },
        vl_desp_adu_importacao: {
            type: DataTypes.DOUBLE,
            field: 'vl_desp_adu_importacao'
        },
        vl_imposto_finan_importacao: {
            type: DataTypes.DOUBLE,
            field: 'vl_imposto_finan_importacao'
        },
        seq_pedido_forn: {
            type: DataTypes.INTEGER,
            field: 'seq_pedido_forn'
        },
        vl_deducoes: {
            type: DataTypes.DOUBLE,
            field: 'vl_deducoes'
        },
        vl_desc_incondicionado: {
            type: DataTypes.DOUBLE,
            field: 'vl_desc_incondicionado'
        },
        vl_inss: {
            type: DataTypes.DOUBLE,
            field: 'vl_inss'
        },
        aliq_inss: {
            type: DataTypes.DOUBLE,
            field: 'aliq_inss'
        },
        vl_ir: {
            type: DataTypes.DOUBLE,
            field: 'vl_ir'
        },
        aliq_ir: {
            type: DataTypes.DOUBLE,
            field: 'aliq_ir'
        },
        vl_outras: {
            type: DataTypes.DOUBLE,
            field: 'vl_outras'
        },
        vl_csll: {
            type: DataTypes.DOUBLE,
            field: 'vl_csll'
        },
        aliq_csll: {
            type: DataTypes.DOUBLE,
            field: 'aliq_csll'
        },
        nat_bc_cred: {
            type: DataTypes.STRING,
            field: 'nat_bc_cred'
        },
        ind_orig_cred: {
            type: DataTypes.STRING,
            field: 'ind_orig_cred'
        },
        desc_item_nota: {
            type: DataTypes.STRING,
            field: 'desc_item_nota'
        },
        num_pedido_compra: {
            type: DataTypes.STRING,
            field: 'num_pedido_compra'
        },
        num_item_pedido_compra: {
            type: DataTypes.STRING,
            field: 'num_item_pedido_compra'
        },
        seq_item_pedido: {
            type: DataTypes.INTEGER,
            field: 'seq_item_pedido'
        },
        vl_seg: {
            type: DataTypes.DOUBLE,
            field: 'vl_seg'
        },
        cod_ncm: {
            type: DataTypes.STRING,
            field: 'cod_ncm'
        },
        vl_ipi_unid: {
            type: DataTypes.DOUBLE,
            field: 'vl_ipi_unid'
        },
        vl_bc_ir: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_ir'
        },
        vl_bc_csll: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_csll'
        },
        vl_bc_icms_uf_dest: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_icms_uf_dest'
        },
        aliq_icms_uf_dest: {
            type: DataTypes.DOUBLE,
            field: 'aliq_icms_uf_dest'
        },
        vl_icms_uf_dest: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms_uf_dest'
        },
        vl_bc_icms_fcp_uf_dest: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_icms_fcp_uf_dest'
        },
        aliq_icms_fpc_uf_dest: {
            type: DataTypes.DOUBLE,
            field: 'aliq_icms_fpc_uf_dest'
        },
        vl_icms_fcp_uf_dest: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms_fcp_uf_dest'
        },
        aliq_icms_interestadual: {
            type: DataTypes.DOUBLE,
            field: 'aliq_icms_interestadual'
        },
        percentual_icms_partilha_uf_dest: {
            type: DataTypes.DOUBLE,
            field: 'percentual_icms_partilha_uf_dest'
        },
        vl_icms_uf_remet: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms_uf_remet'
        },
        cod_lst: {
            type: DataTypes.STRING,
            field: 'cod_lst'
        },
        cnae_fiscal: {
            type: DataTypes.STRING,
            field: 'cnae_fiscal'
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'ek_item_nota',
        timestamps: false,
        classMethods: {
            associate: (model) => {
                productNote.belongsTo(model.Note, { foreignKey: 'seq_nota' })
            }
        }
    });

    return productNote;
};