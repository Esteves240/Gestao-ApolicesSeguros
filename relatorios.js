//Importações
const dados = require('./dados.js');
const Dados = require('./teste/dados.js');
const utils = require('./utils.js');
const prompt = require('prompt-sync')();
const apolice = Dados.apolices;
const seguradora = Dados.seguradoras;
const tipoSeguro = dados.tipoSeguros;


//Relatorio por tipo de seguro.
function relatorioPorTipoSeguro() {
    let i, j;
    let totalGeral = 0;

    console.log("====================================");
    console.log(" RELATÓRIO DE APÓLICES ATIVAS");
    console.log(" POR TIPO DE SEGURO");
    console.log("====================================\n");

    for (i = 0; i < dados.tipoSeguros.length; i++) {
        let totalTipo = 0;
        let existemApolicesAtivas = false;

        console.log("Tipo de Seguro: " + dados.tipoSeguros[i].descricao);
        for (j = 0; j < Dados.apolices.length; j++) {
            if (Dados.apolices[j].tipoSeguroId === dados.tipoSeguros[i].id &&
                Dados.apolices[j].estadoId === 1) {

                let premioAnual = utils.calcularPremioAnual(Dados.apolices[j]); 

                console.log(
                    "  Apólice nº " + Dados.apolices[j].id +
                    " | Prémio anual: " + premioAnual.toFixed(2) + " €"
                );

                totalTipo += premioAnual;
                totalGeral += premioAnual;
                existemApolicesAtivas = true;
            }
        }

        if (!existemApolicesAtivas) {
            console.log("  (Sem apólices ativas)");
        }

        console.log(`Total de prémios anuais deste tipo: ${totalTipo.toFixed(2)}€\n`);  
    }

    console.log("------------------------------------");
    console.log(`TOTAL GERAL DE PRÉMIOS ANUAIS: ${totalGeral.toFixed(2)}€`);           
    console.log("------------------------------------\n");
}



//Relatorio por Seguradoras
function relatorioPorSeguradora() {
    let i, j;
    let totalGeral = 0;

    console.log("====================================");
    console.log(" RELATÓRIO DE APÓLICES ATIVAS");
    console.log(" POR SEGURADORA");
    console.log("====================================\n");

    for (i = 0; i < Dados.seguradoras.length; i++) {
        let totalSeg = 0;
        let encontrou = false;

        console.log("Seguradora: " + Dados.seguradoras[i].nome);
        for (j = 0; j < apolice.length; j++) {
            if (apolice[j].seguradoraId === seguradora[i].id &&
                apolice[j].estadoId === 1) {

                let premioAnual = utils.calcularPremioAnual(apolice[j]);

                console.log(
                    "  Apólice nº " + apolice[j].id +
                    " | Prémio anual: " + premioAnual.toFixed(2) + " €"
                );

                totalSeg += premioAnual;
                totalGeral += premioAnual;
                encontrou = true;
            }
        }

        if (!encontrou) {
            console.log("  (Sem apólices ativas)");
        }

        console.log(
            "  Total de prémios anuais desta seguradora: " +
            totalSeg.toFixed(2) + " €\n"
        );
    }

    console.log("------------------------------------");
    console.log(
        "TOTAL GERAL DE PRÉMIOS ANUAIS: " +
        totalGeral.toFixed(2) + " €"
    );
    console.log("------------------------------------\n");
}




//Relatório de entidades

/*function mostrarEntidade(entidade) { //função auxiliar
    console.log("Nome: " + entidade.nome);
    console.log("Idade: " + utils.calcularIdade(entidade.dataNascimento) + " anos");
    console.log("Morada: " + entidade.morada);
    console.log("Telefone: " + entidade.telefone);
    console.log("Email: " + entidade.email);
    console.log("------------------------------------");
}


function relatorioEntidades() {
    console.log("====================================");
    console.log(" RELATÓRIO DE ENTIDADES (APÓLICES ATIVAS)");
    console.log("====================================\n");

    let entidadesMostradas = [];

    for (let i = 0; i < dados.apolices.length; i++) {
        let ap = dados.apolices[i];

        // Estado ativa
        if (ap.estadoId !== 1) {
            continue; //ignora o resto
        }

        // TOMADOR
        let tomador = dados.tomadores.find(function(t) {  //Procura no array dados.tomadores a pessoa cujo id é igual ao tomadorId da apólice
            return t.id === ap.tomadorId;
        });

        if (tomador && entidadesMostradas.indexOf("T" + tomador.id) === -1) {       //verifica se já foi mostrada
            mostrarEntidade(tomador);                                              //mostra a entidade
            entidadesMostradas.push("T" + tomador.id);                            //regista que já foi mostrada
        }
    }
}*/

function mostrarEntidadeTomador(entidade) { //função auxiliar
    console.log("Nome: " + entidade.nome);
    console.log("Idade: " + utils.calcularIdade(entidade.dataNascimento) + " anos");
    console.log("Morada: " + entidade.morada);
    console.log("Telefone: " + entidade.telefone);
    console.log("------------------------------------");
}

function mostrarEntidadeSegurado(entidade) {
    console.log("Identificação: " + entidade.identificacao);
    console.log("Data: " + entidade.data);
    console.log("------------------------------------");
}


function relatorioEntidades() {
    console.log("====================================");
    console.log(" RELATÓRIO DE ENTIDADES");
    console.log(" (APÓLICES ATIVAS)")
    console.log("====================================\n");
    console.log("1 - Relatório de Entidades (Tomadores)  ||  2 - Relatório de Entidades (Segurados) ");
    let opcao = prompt("Opção: ");
    let entidadesMostradas = [];
    
    if (opcao === "1") {

    	for (let i = 0; i < Dados.apolices.length; i++) {
        let ap = Dados.apolices[i];

        // Estado ativa
        if (ap.estadoId !== 1) {
            continue;
        }

        // TOMADOR
        let tomador = Dados.tomadores.find(function(t) {  //Procura no array listaTomadores a pessoa cujo id é igual ao tomadorId da apólice
            return t.id === ap.tomadorId;
        });

        if (tomador && entidadesMostradas.indexOf("T" + tomador.id) === -1) {       //verifica se já foi mostrada
            mostrarEntidadeTomador(tomador);                                              //mostra a entidade
            entidadesMostradas.push("T" + tomador.id);                            //regista que já foi mostrada
        }
    }
    } else if (opcao === "2") {
        for (let i = 0; i < Dados.apolices.length; i++) {
            let ap = Dados.apolices[i];

            if (ap.estadoId !== 1) {
                continue;
            }
            //SEGURADO
            let segurado = Dados.segurados.find(function(s) {
                return s.id === ap.seguradoId;
            });

            if (segurado && entidadesMostradas.indexOf("S" + segurado.id) === -1) {
                mostrarEntidadeSegurado(segurado);
                entidadesMostradas.push("S" + segurado.id);
            }
        }
    } else {
	console.log("Opção inválida!");
}
}


//Exportações
module.exports = {
    relatorioPorTipoSeguro: relatorioPorTipoSeguro,
    relatorioPorSeguradora: relatorioPorSeguradora,
    relatorioEntidades: relatorioEntidades
};
