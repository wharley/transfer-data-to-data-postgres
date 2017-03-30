'user strict'

const sequelize = require('sequelize')
const destinySequelize = require('../../loading/destiny')

exports.processDestinyProducts = (products) => {

    return new Promise((resolve, reject) => {

        global['startProduct'] = Date.now()

        processMap(products[0].product)
            .then((data) => {
                global['endProduct'] = Date.now()
                resolve(products)
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

function processInsert(product) {

    return new Promise((resolve, reject) => {

        destinySequelize.Product.upsert(setObject(product))
            .then((data) => {
                resolve(true)
            }).catch((err) => {
                console.log(err)
                reject(err)
            })
    })
}

function setObject(product) {

    const obj = {
        cod_produto: product.cod_produto,
        desc_produto: product.desc_produto,
        desc_prod_resumida: product.desc_prod_resumida,
        unid_compra: product.unid_venda,
        unid_venda: product.unid_venda,
        unid_inv: product.unid_inv,
        peso: product.peso,
        cod_ncm: product.cod_ncm,
        tipo_item: product.tipo_item,
        exp_ipi: product.exp_ipi,
        cod_gen: product.cod_gen,
        cod_lst: product.cod_lst,
        status_prod: product.status_prod,
        dt_cadastro: product.dt_cadastro,
        dt_ult_alteracao: product.dt_ult_alteracao,
        fla_balanca: product.fla_balanca,
        origem: product.origem,
        cod_barra: product.cod_barra,
        codigo_setor: product.codigo_setor,
        codigo_grupo: product.codigo_grupo,
        codigo_subgrupo: product.codigo_subgrupo,
        mva: product.mva,
        aliquota_saida: product.aliquota_saida,
        tributacao_saida: product.tributacao_saida,
        tributacao_entrada: product.tributacao_entrada,
        codigo_fabricante: product.codigo_fabricante,
        aplicacao_produto: product.aplicacao_produto,
        codigo_fabrica: product.codigo_fabrica,
        localizacao_produto: product.localizacao_produto,
        tempo_reposicao: product.tempo_reposicao,
        dias_seguranca: product.dias_seguranca,
        codigo_particao: product.codigo_particao,
        composto: product.composto,
        seq_figura: product.seq_figura,
        aliquota_cupom: product.aliquota_cupom,
        cst_ipi_entrada: product.cst_ipi_entrada,
        cst_ipi_saida: product.cst_ipi_saida,
        cst_pis_produto: product.cst_pis_produto,
        cst_cofins_produto: product.cst_cofins_produto,
        cod_produto_ant: product.cod_produto_ant,
        aliquota_ir: product.aliquota_ir,
        aliquota_inss: product.aliquota_inss,
        aliquota_pis: product.aliquota_pis,
        aliquota_cofins: product.aliquota_cofins,
        aliquota_csll: product.aliquota_csll,
        aliquota_issqn: product.aliquota_issqn,
        codigo_categoria: product.codigo_categoria,
        seq_figura_pis_cofins: null,
        descricao_tecnica: product.descricao_tecnica,
        obs_produto: product.obs_produto,
        fator_conversao: product.fator_conversao,
        seq_figura_ipi: null,
        ident_merc: product.ident_merc,
        cod_produto_princ: product.cod_produto_princ,
        seq_plano_contas: product.seq_plano_contas,
        nr_parc: product.nr_parc,
        seq_desc_recibo: null,
        func: product.func,
        vida_util: product.vida_util,
        cod_anp: product.cod_anp,
        seq_linha: null,
        seq_marca: null,
        medida_interna: product.medida_interna,
        medida_externa: product.medida_externa,
        medida_altura: product.medida_altura
    }

    return obj
}