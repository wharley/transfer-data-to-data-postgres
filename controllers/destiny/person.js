'user strict'

const sequelize = require('sequelize')
const destinySequelize = require('../../loading/destiny')

exports.processDestinyPersons = (persons) => {

    return new Promise((resolve, reject) => {

        global['startPerson'] = Date.now()

        processMap(persons[0].person)
            .then((data) => {
                global['endPerson'] = Date.now()
                resolve(persons)
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

function processInsert(person) {

    return new Promise((resolve, reject) => {

        destinySequelize.Person.upsert(setObject(person))
            .then((data) => {
                resolve(true)
            })
            .catch((err) => {
                reject(err)
            })
    })

}

function setObject(person) {

    const obj = {
        cod_pessoa: person.cod_pessoa,
        nome: person.nome,
        endereco: person.endereco,
        num_endereco: person.num_endereco,
        cidade: person.cidade,
        estado: person.estado,
        pais: person.pais,
        suframa: person.suframa,
        compl_endereco: person.compl_endereco,
        bairro: person.bairro,
        dt_cadastro: person.dt_cadastro,
        dt_ult_alteracao: person.dt_ult_alteracao,
        tipo_pessoa: person.tipo_pessoa,
        cnpj: person.cnpj,
        email: person.email,
        sexo: person.sexo,
        cod_rg: person.cod_rg,
        nome_pai: person.nome_pai,
        nome_mae: person.nome_mae,
        dt_nascimento: person.dt_nascimento,
        nome_mae: person.nome_mae,
        insc_municipal: person.insc_municipal,
        insc_estadual: person.insc_estadual,
        cod_atividade: person.cod_atividade,
        status: person.status,
        end_entrega: person.end_entrega,
        num_end_entrega: person.num_end_entrega,
        bairro_entrega: person.bairro_entrega,
        end_cobranca: person.end_cobranca,
        num_end_cobranca: person.num_end_cobranca,
        bairro_cobranca: person.bairro_cobranca,
        cidade_entrega: person.cidade_entrega,
        estado_entrega: person.estado_entrega,
        pais_entrega: person.pais_entrega,
        cidade_cobranca: person.cidade_cobranca,
        estado_cobranca: person.estado_cobranca,
        pais_cobranca: person.pais_cobranca,
        observacao: person.observacao,
        desc_fantasia: person.desc_fantasia,
        cep: person.cep,
        cep_entrega: person.cep_entrega,
        cep_cobranca: person.cep_cobranca,
        cpf: person.cpf,
        cod_ref_fornecedor: person.cod_ref_fornecedor,
        cod_ref_cliente: person.cod_ref_cliente,
        saldo_pessoa: person.saldo_pessoa,
        contato_pessoa: person.contato_pessoa,
        pessoa_fisica_juridica: person.pessoa_fisica_juridica,
        site: person.site,
        compl_endereco_entrega: person.compl_endereco_entrega,
        compl_endereco_cobranca: person.compl_endereco_cobranca,
        insc_pr: person.insc_pr,
        produtor_rural: person.produtor_rural,
        cod_vend_comp: null,
        senha_pessoa: person.senha_pessoa,
        codigo_setor_pessoa: null,
        codigo_grupo_pessoa: null,
        codigo_subgrupo_pessoa: null,
        flag_fatura_servico: person.flag_fatura_servico,
        iss_retido_servico: person.iss_retido_servico,
        cod_inf_obs: person.cod_inf_obs,
        flag_fatura_cupom: person.flag_fatura_cupom,
        crt_fiscal_pessoa: person.crt_fiscal_pessoa,
        imposto_federal_fonte: person.imposto_federal_fonte
    }

    return obj
}