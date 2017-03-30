'use strict'

module.exports = (sequelize, DataTypes) => {

    const note = sequelize.define('Note', {
        seq_nota: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            field: 'seq_nota'
        },
        num_empresa: {
            type: DataTypes.INTEGER,
            field: 'num_empresa'
        },
        ind_oper: {
            type: DataTypes.STRING,
            field: 'ind_oper'
        },
        ind_emit: {
            type: DataTypes.STRING,
            field: 'ind_emit'
        },
        cod_part: {
            type: DataTypes.INTEGER,
            field: 'cod_part'
        },
        cod_mod: {
            type: DataTypes.STRING,
            field: 'cod_mod'
        },
        ser: {
            type: DataTypes.STRING,
            field: 'ser'
        },
        num_doc: {
            type: DataTypes.STRING,
            field: 'num_doc'
        },
        chv_nfe: {
            type: DataTypes.STRING,
            field: 'chv_nfe'
        },
        dt_doc: {
            type: DataTypes.DATE,
            field: 'dt_doc'
        },
        dt_e_s: {
            type: DataTypes.DATE,
            field: 'dt_e_s'
        },
        vl_doc: {
            type: DataTypes.DOUBLE,
            field: 'vl_doc'
        },
        ind_pgto: {
            type: DataTypes.STRING,
            field: 'ind_pgto'
        },
        vl_desc: {
            type: DataTypes.DOUBLE,
            field: 'vl_desc'
        },
        vl_abat_nt: {
            type: DataTypes.DOUBLE,
            field: 'vl_abat_nt'
        },
        vl_merc: {
            type: DataTypes.DOUBLE,
            field: 'vl_merc'
        },
        ind_frt: {
            type: DataTypes.STRING,
            field: 'ind_frt'
        },
        vl_frt: {
            type: DataTypes.DOUBLE,
            field: 'vl_frt'
        },
        vl_seg: {
            type: DataTypes.DOUBLE,
            field: 'vl_seg'
        },
        vl_out_da: {
            type: DataTypes.DOUBLE,
            field: 'vl_out_da'
        },
        vl_bc_icms: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_icms'
        },
        vl_icms: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms'
        },
        vl_bc_icms_st: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_icms_st'
        },
        vl_icms_st: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms_st'
        },
        vl_ipi: {
            type: DataTypes.DOUBLE,
            field: 'vl_ipi'
        },
        vl_pis: {
            type: DataTypes.DOUBLE,
            field: 'vl_pis'
        },
        vl_cofins: {
            type: DataTypes.DOUBLE,
            field: 'vl_cofins'
        },
        vl_pis_st: {
            type: DataTypes.DOUBLE,
            field: 'vl_pis_st'
        },
        vl_cofins_st: {
            type: DataTypes.DOUBLE,
            field: 'vl_cofins_st'
        },
        cod_inf: {
            type: DataTypes.INTEGER,
            field: 'cod_inf'
        },
        num_doc: {
            type: DataTypes.STRING,
            field: 'num_doc'
        },
        ind_proc: {
            type: DataTypes.STRING,
            field: 'ind_proc'
        },
        vl_isentas: {
            type: DataTypes.DOUBLE,
            field: 'vl_isentas'
        },
        vl_icm_retido: {
            type: DataTypes.DOUBLE,
            field: 'vl_icm_retido'
        },
        vl_bc_reduz: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_reduz'
        },
        vl_icms_reduz: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms_reduz'
        },
        vl_outras: {
            type: DataTypes.DOUBLE,
            field: 'vl_outras'
        },
        vl_nao_tribut: {
            type: DataTypes.DOUBLE,
            field: 'vl_nao_tribut'
        },
        cod_mov: {
            type: DataTypes.INTEGER,
            field: 'cod_mov'
        },
        dt_cadastro: {
            type: DataTypes.DATE,
            field: 'dt_cadastro'
        },
        dt_ult_alteracao: {
            type: DataTypes.DATE,
            field: 'dt_ult_alteracao'
        },
        seq_pedido_forn: {
            type: DataTypes.INTEGER,
            field: 'seq_pedido_forn'
        },
        cfop: {
            type: DataTypes.STRING,
            field: 'cfop'
        },
        codigo_tipo_pag: {
            type: DataTypes.INTEGER,
            field: 'codigo_tipo_pag'
        },
        seq_forma_pagamento: {
            type: DataTypes.INTEGER,
            field: 'seq_forma_pagamento'
        },
        vl_bc_ipi: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_ipi'
        },
        cod_sit: {
            type: DataTypes.STRING,
            field: 'cod_sit'
        },
        desc_complementar: {
            type: DataTypes.STRING,
            field: 'desc_complementar'
        },
        seq_portador: {
            type: DataTypes.INTEGER,
            field: 'seq_portador'
        },
        sub: {
            type: DataTypes.INTEGER,
            field: 'sub'
        },
        cod_cons: {
            type: DataTypes.STRING,
            field: 'cod_cons'
        },
        vl_forn: {
            type: DataTypes.DOUBLE,
            field: 'vl_forn'
        },
        vl_serv_nt: {
            type: DataTypes.DOUBLE,
            field: 'vl_serv_nt'
        },
        vl_terc: {
            type: DataTypes.DOUBLE,
            field: 'vl_terc'
        },
        tp_ligacao: {
            type: DataTypes.INTEGER,
            field: 'tp_ligacao'
        },
        cod_grupo_tensao: {
            type: DataTypes.STRING,
            field: 'cod_grupo_tensao'
        },
        tp_assinante: {
            type: DataTypes.INTEGER,
            field: 'tp_assinante'
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
        vl_imposto_importacao: {
            type: DataTypes.DOUBLE,
            field: 'vl_imposto_importacao'
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
        aliq_pis: {
            type: DataTypes.DOUBLE,
            field: 'aliq_pis'
        },
        aliq_cofins: {
            type: DataTypes.DOUBLE,
            field: 'aliq_cofins'
        },
        vl_csll: {
            type: DataTypes.DOUBLE,
            field: 'vl_csll'
        },
        aliq_csll: {
            type: DataTypes.DOUBLE,
            field: 'aliq_csll'
        },
        vl_bc_pis: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_pis'
        },
        vl_bc_cofins: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_cofins'
        },
        vl_pis_ret: {
            type: DataTypes.DOUBLE,
            field: 'vl_pis_ret'
        },
        vl_cofins_ret: {
            type: DataTypes.DOUBLE,
            field: 'vl_cofins_ret'
        },
        gnre: {
            type: DataTypes.STRING,
            field: 'gnre'
        },
        seq_cupom_fiscal: {
            type: DataTypes.BIGINT,
            field: 'seq_cupom_fiscal'
        },
        tentou_validar: {
            type: DataTypes.STRING,
            field: 'tentou_validar'
        },
        vl_faturamento: {
            type: DataTypes.DOUBLE,
            field: 'vl_faturamento'
        },
        vl_bc_csll: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_csll'
        },
        vl_bc_ir: {
            type: DataTypes.DOUBLE,
            field: 'vl_bc_ir'
        },
        retem_pis: {
            type: DataTypes.STRING,
            field: 'retem_pis'
        },
        retem_cofins: {
            type: DataTypes.STRING,
            field: 'retem_cofins'
        },
        retem_csll: {
            type: DataTypes.STRING,
            field: 'retem_csll'
        },
        retem_ir: {
            type: DataTypes.STRING,
            field: 'retem_ir'
        },
        retem_inss: {
            type: DataTypes.STRING,
            field: 'retem_inss'
        },
        chv_nfe_validacao: {
            type: DataTypes.STRING,
            field: 'chv_nfe_validacao'
        },
        retencao_imposto_servico: {
            type: DataTypes.STRING,
            field: 'retencao_imposto_servico'
        },
        num_doc_servico: {
            type: DataTypes.STRING,
            field: 'num_doc_servico'
        },
        vl_icms_fcp_uf_dest: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms_fcp_uf_dest'
        },
        vl_icms_uf_dest: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms_uf_dest'
        },
        vl_icms_uf_remet: {
            type: DataTypes.DOUBLE,
            field: 'vl_icms_uf_remet'
        },
        desc_cancelamento: {
            type: DataTypes.STRING,
            field: 'desc_cancelamento'
        }
    }, {
        freezeTableName: true,
        schema: 'public',
        tableName: 'nota',
        timestamps: false
    });

    return note;
};