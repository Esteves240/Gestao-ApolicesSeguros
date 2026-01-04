//CRUD de apólices

const prompt = require('prompt-sync')();
const dados = require('./dados.js');


//Read
function listarApolices() {
    console.clear();
    console.log("=== LISTA DE APÓLICES ===\n");

    if (dados.apolice.length === 0) {
        console.log("Não existem apólices registadas.");
        return;
    }

    for (let i = 0; i < dados.apolice.length; i++) {
        let ap = dados.apolice[i];

        console.log("ID: " + ap.id);
        console.log("Seguradora ID: " + ap.seguradoraId);
        console.log("Tipo Seguro ID: " + ap.tipoSeguroId);
        console.log("Valor Segurado: " + ap.valorSegurado);
        console.log("Prémio: " + ap.premio);
        console.log("Estado ID: " + ap.estadoId);
        console.log("-------------------------");
    }
}


//Create
function inserirApolice() {
    console.clear();
    console.log("=== INSERIR APÓLICE ===\n");

    let novaApolice = {};

    novaApolice.id = dados.apolice.length + 1; 
    novaApolice.seguradoraId = Number(prompt("ID da Seguradora: "));
    novaApolice.tomadorId = Number(prompt("ID do Tomador: "));
    novaApolice.seguradoId = Number(prompt("ID do Segurado: "));
    novaApolice.tipoSeguroId = Number(prompt("ID do Tipo de Seguro: "));
    novaApolice.valorSegurado = Number(prompt("Valor segurado: "));
    novaApolice.premio = Number(prompt("Prémio: "));
    novaApolice.periodicidadeId = Number(prompt("Periodicidade ID: "));
    novaApolice.estadoId = Number(prompt("Estado ID: "));
    novaApolice.dataInicio = prompt("Data início (YYYY-MM-DD): ");

    dados.apolice.push(novaApolice);

    console.log("\nApólice inserida com sucesso!");
}

//Delete
function removerApolice() {
    console.clear();
    console.log("=== REMOVER APÓLICE ===\n");

    let id = Number(prompt("ID da apólice a remover: "));
    let index = -1;

    for (let i = 0; i < dados.apolice.length; i++) {
        if (dados.apolice[i].id === id) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("Apólice não encontrada.");
        return;
    }

    dados.apolice.splice(index, 1);
    console.log("Apólice removida com sucesso!");
}


//Update (AINDA SÓ ESTÁ UM CAMPO)

function atualizarApolice() {
    console.clear();
    console.log("=== ATUALIZAR ESTADO DA APÓLICE ===\n");

    let id = Number(prompt("ID da apólice: "));
    let apolice = null;

    for (let i = 0; i < dados.apolice.length; i++) {
        if (dados.apolice[i].id === id) {
            apolice = dados.apolice[i];
            break;
        }
    }

    if (!apolice) {
        console.log("Apólice não encontrada.");
        return;
    }

    /*
    console.log("====================================");
    console.log(" Que campo quer atualizar? ");
    console.log("====================================");
    console.log("1 - seguradoraId");
    console.log("2 - tomadorId");
    console.log("3 - seguradoId");
    console.log("4 - tipoSeguroId");
    console.log("5 - valorSegurado");
    console.log("6 - premio");
    console.log("7 - periodicidadeId");
    console.log("8 - estadoId");            check
    console.log("9 - dataInicio");
    console.log("0 - Voltar");
*/

    apolice.estadoId = Number(prompt("Novo Estado ID: "));
    console.log("Estado atualizado com sucesso!");
}



//Exportações
module.exports = {
    listarApolices,
    inserirApolice,
    removerApolice,
    atualizarApolice
};
