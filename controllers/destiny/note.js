'user strict'

const sequelize = require('sequelize')
const destinySequelize = require('../../loading/destiny')

exports.processDestinyNotes = (notes) => {

    return new Promise((resolve, reject) => {
        processMap(notes[0].note)
            .then((data) => {
                resolve(notes)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

function processMap(data) {

    const promises = data.map(processInsert)

    return Promise.all(promises)

}

function processInsert(note) {

    return new Promise((resolve, reject) => {

        destinySequelize.Note.findOrCreate({
                where: {
                    num_empresa: note.num_empresa,
                    ind_oper: note.ind_oper,
                    ser: note.ser,
                    num_doc: note.num_doc
                },
                defaults: setObject(note)
            })
            .then((data) => {
                resolve(true)
            }).catch((err) => {
                reject(err)
            })
    })
}

function setObject(note) {

    const obj = {
        num_empresa: note.num_empresa,
        ind_oper: note.ind_oper,
        ind_emit: note.ind_emit,
        cod_part: note.cod_part,
        cod_mod: note.cod_mod,
        ser: note.ser,
        num_doc: note.num_doc,
        chv_nfe: note.chv_nfe,
        dt_doc: note.dt_doc,
        dt_e_s: note.dt_e_s,
        vl_doc: note.vl_doc,
        ind_pgto: note.ind_pgto,
        vl_desc: note.vl_desc,
        vl_abat_nt: note.vl_abat_nt,
        vl_merc: note.vl_merc,
        ind_frt: note.ind_frt,
        vl_frt: note.vl_frt,
        vl_seg: note.vl_seg,
        vl_out_da: note.vl_out_da,
        vl_bc_icms: note.vl_bc_icms,
        vl_icms: note.vl_icms,
        vl_bc_icms_st: note.vl_bc_icms_st,
        vl_icms_st: note.vl_icms_st,
        vl_ipi: note.vl_ipi,
        vl_pis: note.vl_pis,
        vl_cofins: note.vl_cofins,
        vl_pis_st: note.vl_pis_st,
        vl_cofins_st: note.vl_cofins_st,
        cod_inf: note.cod_inf,
        num_doc: note.num_doc,
        ind_proc: note.ind_proc,
        vl_isentas: note.vl_isentas,
        vl_icm_retido: note.vl_icm_retido,
        vl_bc_reduz: note.vl_bc_reduz,
        vl_icms_reduz: note.vl_icms_reduz,
        vl_outras: note.vl_outras,
        vl_nao_tribut: note.vl_nao_tribut,
        cod_mov: note.cod_mov,
        dt_cadastro: note.dt_cadastro,
        dt_ult_alteracao: note.dt_ult_alteracao,
        seq_pedido_forn: note.seq_pedido_forn,
        cfop: note.cfop,
        codigo_tipo_pag: note.codigo_tipo_pag,
        seq_forma_pagamento: note.seq_forma_pagamento,
        vl_bc_ipi: note.vl_bc_ipi,
        cod_sit: note.cod_sit,
        desc_complementar: note.desc_complementar,
        seq_portador: note.seq_portador,
        sub: note.sub,
        cod_cons: note.cod_cons,
        vl_forn: note.vl_forn,
        vl_serv_nt: note.vl_serv_nt,
        vl_terc: note.vl_terc,
        tp_ligacao: note.tp_ligacao,
        cod_grupo_tensao: note.cod_grupo_tensao,
        tp_assinante: note.tp_assinante,
        vl_bc_issqn: note.vl_bc_issqn,
        aliq_issqn: note.aliq_issqn,
        vl_issqn: note.vl_issqn,
        doc_importacao: note.doc_importacao,
        data_doc_importacao: note.data_doc_importacao,
        local_desembaraco_importacao: note.local_desembaraco_importacao,
        estado_desembaraco_importacao: note.estado_desembaraco_importacao,
        data_desembaraco_importacao: note.data_desembaraco_importacao,
        codigo_exportador: note.codigo_exportador,
        vl_imposto_importacao: note.vl_imposto_importacao,
        vl_deducoes: note.vl_deducoes,
        vl_desc_incondicionado: note.vl_desc_incondicionado,
        vl_inss: note.vl_inss,
        aliq_inss: note.aliq_inss,
        vl_ir: note.vl_ir,
        aliq_ir: note.aliq_ir,
        aliq_pis: note.aliq_pis,
        aliq_cofins: note.aliq_cofins,
        vl_csll: note.vl_csll,
        aliq_csll: note.aliq_csll,
        vl_bc_pis: note.vl_bc_pis,
        vl_bc_cofins: note.vl_bc_cofins,
        vl_pis_ret: note.vl_pis_ret,
        vl_cofins_ret: note.vl_cofins_ret,
        gnre: note.gnre,
        seq_cupom_fiscal: note.seq_cupom_fiscal,
        tentou_validar: note.tentou_validar,
        vl_faturamento: note.vl_faturamento,
        vl_bc_csll: note.vl_bc_csll,
        vl_bc_ir: note.vl_bc_ir,
        retem_pis: note.retem_pis,
        retem_cofins: note.retem_cofins,
        retem_csll: note.retem_csll,
        retem_ir: note.retem_ir,
        retem_inss: note.retem_inss,
        chv_nfe_validacao: note.chv_nfe_validacao,
        retencao_imposto_servico: note.retencao_imposto_servico,
        num_doc_servico: note.num_doc_servico,
        vl_icms_fcp_uf_dest: note.vl_icms_fcp_uf_dest,
        vl_icms_uf_dest: note.vl_icms_uf_dest,
        vl_icms_uf_remet: note.vl_icms_uf_remet,
        desc_cancelamento: note.desc_cancelamento
    }

    return obj
}