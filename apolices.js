const prompt = require('prompt-sync')();
const dados = require('./dados.js');


class Apolice {
    static listaApolices = [];
    static proximoId = 1;
    constructor(id, seguradoraId, tomadorId, seguradoId, tipoSeguroId, valorSegurado, premio, estadoId, periodicidadeId) {
        this.id = id; 
        this.seguradoraId = seguradoraId; 
        this.tomadorId = tomadorId; 
        this.seguradoId = seguradoId;
        this.tipoSeguroId = tipoSeguroId;
        this.valorSegurado = valorSegurado;
        this.premio = premio; 
        this.estadoId = estadoId;
        this.periodicidadeId = periodicidadeId;
        this.is_deleted = false; 
        this.dataInicio = new Date();
    }


//CRUD de apólices
//Read
listarApolices() {
    console.clear();
    console.log("=== LISTA DE APÓLICES ===\n");

    if (dados.apolices.length === 0) {
        console.log("Não existem apólices registadas.");
        return;
    }

    for (let i = 0; i < dados.apolices.length; i++) {
        let ap = dados.apolices[i];

        if (ap.is_deleted) continue;

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
inserirApolice() {
    console.clear();
    console.log("=== INSERIR APÓLICE ===\n");

    let novaApolice = {};

    novaApolice.id = dados.apolices[0].proximoId++; 
    novaApolice.seguradoraId = Number(prompt("ID da Seguradora: "));
    novaApolice.tomadorId = Number(prompt("ID do Tomador: "));
    novaApolice.seguradoId = Number(prompt("ID do Segurado: "));
    console.log("Tipo de Seguro (1 - Saúde || 2 - Vida || 3 - Acidentes de trabalho || 4 - Automóvel || 5 - Habitação || 6 - Animal)")
    novaApolice.tipoSeguroId = Number(prompt("ID do Tipo de Seguro: "));
    novaApolice.valorSegurado = Number(prompt("Valor segurado: "));
    novaApolice.premio = Number(prompt("Prémio: "));
    console.log("Periodicidade (1 - Mensal || 2 - Anual) ")
    novaApolice.periodicidadeId = Number(prompt("Periodicidade ID: "));
    console.log("Estado (1 - Ativa || 2 - Inativa")
    novaApolice.estadoId = Number(prompt("Estado ID: "));
    novaApolice.dataInicio = prompt("Data início (YYYY-MM-DD): ");

    dados.apolices.push(novaApolice);

    console.log("\nApólice inserida com sucesso!");
}


//Delete
removerApolice() {
    console.clear();
    console.log("=== REMOVER APÓLICE ===\n");

    let id = Number(prompt("ID da apólice a remover: "));
    let apolice = null;

    for (let i = 0; i < dados.apolices.length; i++) {
        if (dados.apolices[i].id === id) {
            apolice = dados.apolices[i];
            break;
        }
    }

    if (!apolice) {
        console.log("Apólice não encontrada.");
        return;
    }

    if (apolice.is_deleted) {
        console.log("Esta apólice já foi removida.");
        return;
    }

    apolice.is_deleted = true;

    console.log("Apólice removida com sucesso!");
}


//Update 
atualizarApolice() {
    console.clear();
    console.log("=== ATUALIZAR ESTADO DA APÓLICE ===\n");

    let id = Number(prompt("ID da apólice: "));
    let apolice = null;

    for (let i = 0; i < dados.apolices.length; i++) {
        if (dados.apolices[i].id === id) {
            apolice = dados.apolices[i];
            break;
        }
    }

    if (!apolice) {
        console.log("Apólice não encontrada.");
        return;
    }

    let opcao;

    do {
        console.clear();

        console.log("====================================");
        console.log(" Que campo quer atualizar? ");
        console.log("====================================");
        console.log("1 - Seguradora");
        console.log("2 - Tomador");
        console.log("3 - Segurado");
        console.log("4 - Tipo de Seguro");
        console.log("5 - Valor Segurado");
        console.log("6 - Prémio");
        console.log("7 - Periodicidade");
        console.log("8 - Estado");            
        console.log("9 - Data de Início");
        console.log("0 - Voltar");

        opcao = prompt("Opção: ");
        if (opcao === "1") {
            apolice.seguradoraId = Number(prompt("Nova Seguradora ID: "));
            console.log("Seguradora atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
         else if (opcao === "2") {
            apolice.tomadorId = Number(prompt("Novo Tomador ID: "));
            console.log("Tomador atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
         else if (opcao === "3") {
            apolice.seguradoId = Number(prompt("Novo Segurado ID: "));
            console.log("Segurado atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "4") {
            apolice.tipoSeguroId = Number(prompt("Novo Tipo de Seguro ID: "));
            console.log("Tipo de Seguro atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "5") {
            apolice.valorSegurado = Number(prompt("Novo Valor Segurado: "));
            console.log("Valor Segurado atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "6") {
            apolice.premio = Number(prompt("Novo Premio: "));
            console.log("Prémio atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "7") {
            apolice.periodicidadeId = Number(prompt("Nova Periodicidade ID: "));
            console.log("Periocidade atualizada com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "8") {
            apolice.estadoId = Number(prompt("Novo Estado ID: "));
            console.log("Estado atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "9") {
            apolice.dataInicio = (prompt("Nova Data de Início (yyyy-mm-dd): "));
            console.log("Data de Início atualizada com sucesso!");
            prompt("Prima ENTER para continuar...");
        }

    } while (opcao !== "0");

}
}


//Exportações
module.exports = Apolice;
