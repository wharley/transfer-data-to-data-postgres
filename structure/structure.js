'use strict'

const setObject = {
    Unit: function(data) {
        const obj = {
            num_unid_medida: data.num_unid_medida,
            unidade_medida: data.unidade_medida,
            ft_conv: data.ft_conv,
            descricao: data.descricao,
            dt_cadastro: data.dt_cadastro,
            dt_ult_alteracao: data.dt_ult_alteracao
        }

        return obj
    },
    Sector: function(data) {
        const obj = {
            codigo_setor: data.codigo_setor,
            descricao_setor: data.descricao_setor,
            dt_cadastro: data.dt_cadastro,
            dt_ult_alteracao: data.dt_ult_alteracao
        }

        return obj
    },
    Group: function(data) {
        const obj = {
            codigo_grupo: data.codigo_grupo,
            descricao_grupo: data.descricao_grupo,
            dt_cadastro: data.dt_cadastro,
            dt_ult_alteracao: data.dt_ult_alteracao,
            codigo_setor: data.codigo_setor,
        }

        return obj
    },
    SubGroup: function(data) {
        const obj = {
            codigo_subgrupo: data.codigo_subgrupo,
            descricao_subgrupo: data.descricao_subgrupo,
            dt_cadastro: data.dt_cadastro,
            dt_ult_alteracao: data.dt_ult_alteracao,
            codigo_setor: data.codigo_setor,
            codigo_grupo: data.codigo_grupo
        }

        return obj
    },
    Product: function(data) {
        const obj = {
            cod_produto: data.cod_produto,
            desc_produto: data.desc_produto,
            desc_prod_resumida: data.desc_prod_resumida,
            unid_compra: data.unid_venda,
            unid_venda: data.unid_venda,
            unid_inv: data.unid_inv,
            peso: data.peso,
            cod_ncm: data.cod_ncm,
            tipo_item: data.tipo_item,
            exp_ipi: data.exp_ipi,
            cod_gen: data.cod_gen,
            cod_lst: data.cod_lst,
            status_prod: data.status_prod,
            dt_cadastro: data.dt_cadastro,
            dt_ult_alteracao: data.dt_ult_alteracao,
            fla_balanca: data.fla_balanca,
            origem: data.origem,
            cod_barra: data.cod_barra,
            codigo_setor: data.codigo_setor,
            codigo_grupo: data.codigo_grupo,
            codigo_subgrupo: data.codigo_subgrupo,
            mva: data.mva,
            aliquota_saida: data.aliquota_saida,
            tributacao_saida: data.tributacao_saida,
            tributacao_entrada: data.tributacao_entrada,
            codigo_fabricante: data.codigo_fabricante,
            aplicacao_produto: data.aplicacao_produto,
            codigo_fabrica: data.codigo_fabrica,
            localizacao_produto: data.localizacao_produto,
            tempo_reposicao: data.tempo_reposicao,
            dias_seguranca: data.dias_seguranca,
            codigo_particao: data.codigo_particao,
            composto: data.composto,
            seq_figura: data.seq_figura,
            aliquota_cupom: data.aliquota_cupom,
            cst_ipi_entrada: data.cst_ipi_entrada,
            cst_ipi_saida: data.cst_ipi_saida,
            cst_pis_produto: data.cst_pis_produto,
            cst_cofins_produto: data.cst_cofins_produto,
            cod_produto_ant: data.cod_produto_ant,
            aliquota_ir: data.aliquota_ir,
            aliquota_inss: data.aliquota_inss,
            aliquota_pis: data.aliquota_pis,
            aliquota_cofins: data.aliquota_cofins,
            aliquota_csll: data.aliquota_csll,
            aliquota_issqn: data.aliquota_issqn,
            codigo_categoria: data.codigo_categoria,
            seq_figura_pis_cofins: null,
            descricao_tecnica: data.descricao_tecnica,
            obs_produto: data.obs_produto,
            fator_conversao: data.fator_conversao,
            seq_figura_ipi: null,
            ident_merc: data.ident_merc,
            cod_produto_princ: data.cod_produto_princ,
            seq_plano_contas: data.seq_plano_contas,
            nr_parc: data.nr_parc,
            seq_desc_recibo: null,
            func: data.func,
            vida_util: data.vida_util,
            cod_anp: data.cod_anp,
            seq_linha: null,
            seq_marca: null,
            medida_interna: data.medida_interna,
            medida_externa: data.medida_externa,
            medida_altura: data.medida_altura
        }

        return obj
    },
    Person: function(data) {
        const obj = {
            cod_pessoa: data.cod_pessoa,
            nome: data.nome,
            endereco: data.endereco,
            num_endereco: data.num_endereco,
            cidade: data.cidade,
            estado: data.estado,
            pais: data.pais,
            suframa: data.suframa,
            compl_endereco: data.compl_endereco,
            bairro: data.bairro,
            dt_cadastro: data.dt_cadastro,
            dt_ult_alteracao: data.dt_ult_alteracao,
            tipo_pessoa: data.tipo_pessoa,
            cnpj: data.cnpj,
            email: data.email,
            sexo: data.sexo,
            cod_rg: data.cod_rg,
            nome_pai: data.nome_pai,
            nome_mae: data.nome_mae,
            dt_nascimento: data.dt_nascimento,
            nome_mae: data.nome_mae,
            insc_municipal: data.insc_municipal,
            insc_estadual: data.insc_estadual,
            cod_atividade: data.cod_atividade,
            status: data.status,
            end_entrega: data.end_entrega,
            num_end_entrega: data.num_end_entrega,
            bairro_entrega: data.bairro_entrega,
            end_cobranca: data.end_cobranca,
            num_end_cobranca: data.num_end_cobranca,
            bairro_cobranca: data.bairro_cobranca,
            cidade_entrega: data.cidade_entrega,
            estado_entrega: data.estado_entrega,
            pais_entrega: data.pais_entrega,
            cidade_cobranca: data.cidade_cobranca,
            estado_cobranca: data.estado_cobranca,
            pais_cobranca: data.pais_cobranca,
            observacao: data.observacao,
            desc_fantasia: data.desc_fantasia,
            cep: data.cep,
            cep_entrega: data.cep_entrega,
            cep_cobranca: data.cep_cobranca,
            cpf: data.cpf,
            cod_ref_fornecedor: data.cod_ref_fornecedor,
            cod_ref_cliente: data.cod_ref_cliente,
            saldo_pessoa: data.saldo_pessoa,
            contato_pessoa: data.contato_pessoa,
            pessoa_fisica_juridica: data.pessoa_fisica_juridica,
            site: data.site,
            compl_endereco_entrega: data.compl_endereco_entrega,
            compl_endereco_cobranca: data.compl_endereco_cobranca,
            insc_pr: data.insc_pr,
            produtor_rural: data.produtor_rural,
            cod_vend_comp: null,
            senha_pessoa: data.senha_pessoa,
            codigo_setor_pessoa: null,
            codigo_grupo_pessoa: null,
            codigo_subgrupo_pessoa: null,
            flag_fatura_servico: data.flag_fatura_servico,
            iss_retido_servico: data.iss_retido_servico,
            cod_inf_obs: data.cod_inf_obs,
            flag_fatura_cupom: data.flag_fatura_cupom,
            crt_fiscal_pessoa: data.crt_fiscal_pessoa,
            imposto_federal_fonte: data.imposto_federal_fonte
        }

        return obj
    },
    EanProduct: function(data) {
        const obj = {
            cod_produto: data.cod_produto,
            cod_barra: data.cod_barra,
            dt_cadastro: data.dt_cadastro,
            dt_ult_alteracao: data.dt_ult_alteracao
        }

        return obj
    },
    Note: function(data) {
        const obj = {
            num_empresa: data.num_empresa,
            ind_oper: data.ind_oper,
            ind_emit: data.ind_emit,
            cod_part: data.cod_part,
            cod_mod: data.cod_mod,
            ser: data.ser,
            num_doc: data.num_doc,
            chv_nfe: data.chv_nfe,
            dt_doc: data.dt_doc,
            dt_e_s: data.dt_e_s,
            vl_doc: data.vl_doc,
            ind_pgto: data.ind_pgto,
            vl_desc: data.vl_desc,
            vl_abat_nt: data.vl_abat_nt,
            vl_merc: data.vl_merc,
            ind_frt: data.ind_frt,
            vl_frt: data.vl_frt,
            vl_seg: data.vl_seg,
            vl_out_da: data.vl_out_da,
            vl_bc_icms: data.vl_bc_icms,
            vl_icms: data.vl_icms,
            vl_bc_icms_st: data.vl_bc_icms_st,
            vl_icms_st: data.vl_icms_st,
            vl_ipi: data.vl_ipi,
            vl_pis: data.vl_pis,
            vl_cofins: data.vl_cofins,
            vl_pis_st: data.vl_pis_st,
            vl_cofins_st: data.vl_cofins_st,
            cod_inf: data.cod_inf,
            num_doc: data.num_doc,
            ind_proc: data.ind_proc,
            vl_isentas: data.vl_isentas,
            vl_icm_retido: data.vl_icm_retido,
            vl_bc_reduz: data.vl_bc_reduz,
            vl_icms_reduz: data.vl_icms_reduz,
            vl_outras: data.vl_outras,
            vl_nao_tribut: data.vl_nao_tribut,
            cod_mov: data.cod_mov,
            dt_cadastro: data.dt_cadastro,
            dt_ult_alteracao: data.dt_ult_alteracao,
            seq_pedido_forn: data.seq_pedido_forn,
            cfop: data.cfop,
            codigo_tipo_pag: data.codigo_tipo_pag,
            seq_forma_pagamento: data.seq_forma_pagamento,
            vl_bc_ipi: data.vl_bc_ipi,
            cod_sit: data.cod_sit,
            desc_complementar: data.desc_complementar,
            seq_portador: data.seq_portador,
            sub: data.sub,
            cod_cons: data.cod_cons,
            vl_forn: data.vl_forn,
            vl_serv_nt: data.vl_serv_nt,
            vl_terc: data.vl_terc,
            tp_ligacao: data.tp_ligacao,
            cod_grupo_tensao: data.cod_grupo_tensao,
            tp_assinante: data.tp_assinante,
            vl_bc_issqn: data.vl_bc_issqn,
            aliq_issqn: data.aliq_issqn,
            vl_issqn: data.vl_issqn,
            doc_importacao: data.doc_importacao,
            data_doc_importacao: data.data_doc_importacao,
            local_desembaraco_importacao: data.local_desembaraco_importacao,
            estado_desembaraco_importacao: data.estado_desembaraco_importacao,
            data_desembaraco_importacao: data.data_desembaraco_importacao,
            codigo_exportador: data.codigo_exportador,
            vl_imposto_importacao: data.vl_imposto_importacao,
            vl_deducoes: data.vl_deducoes,
            vl_desc_incondicionado: data.vl_desc_incondicionado,
            vl_inss: data.vl_inss,
            aliq_inss: data.aliq_inss,
            vl_ir: data.vl_ir,
            aliq_ir: data.aliq_ir,
            aliq_pis: data.aliq_pis,
            aliq_cofins: data.aliq_cofins,
            vl_csll: data.vl_csll,
            aliq_csll: data.aliq_csll,
            vl_bc_pis: data.vl_bc_pis,
            vl_bc_cofins: data.vl_bc_cofins,
            vl_pis_ret: data.vl_pis_ret,
            vl_cofins_ret: data.vl_cofins_ret,
            gnre: data.gnre,
            seq_cupom_fiscal: data.seq_cupom_fiscal,
            tentou_validar: data.tentou_validar,
            vl_faturamento: data.vl_faturamento,
            vl_bc_csll: data.vl_bc_csll,
            vl_bc_ir: data.vl_bc_ir,
            retem_pis: data.retem_pis,
            retem_cofins: data.retem_cofins,
            retem_csll: data.retem_csll,
            retem_ir: data.retem_ir,
            retem_inss: data.retem_inss,
            chv_nfe_validacao: data.chv_nfe_validacao,
            retencao_imposto_servico: data.retencao_imposto_servico,
            num_doc_servico: data.num_doc_servico,
            vl_icms_fcp_uf_dest: data.vl_icms_fcp_uf_dest,
            vl_icms_uf_dest: data.vl_icms_uf_dest,
            vl_icms_uf_remet: data.vl_icms_uf_remet,
            desc_cancelamento: data.desc_cancelamento
        }

        return obj
    }
}

module.exports = setObject