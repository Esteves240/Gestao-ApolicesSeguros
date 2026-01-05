//CRUD de Seguradoras

const prompt = require('prompt-sync')();
const dados = require('./dados.js');


//Read
function listarSeguradoras() {
    console.clear();
    console.log("=== LISTA DE SEGURADORAS ===\n");

    if (dados.seguradoras.length === 0) {
        console.log("Não existem seguradoras registadas.");
        return;
    }

    for (let i = 0; i < dados.seguradoras.length; i++) {
        let sg = dados.seguradoras[i];

        console.log("ID: " + sg.id);
        console.log("NOME: " + sg.nome);
        console.log("-------------------------");
    }
}

//Create
function inserirSeguradora() {
    console.clear();
    console.log("=== INSERIR SEGURADORA ===\n");

    let novaSeguradora = {};

    novaSeguradora.id = dados.seguradoras[0].proximoId++; 
    novaSeguradora.nome = prompt("Nome: ");

    dados.seguradoras.push(novaSeguradora);

    console.log("\nSeguradora inserida com sucesso!");
}


//Delete
function removerSeguradora() {
    console.clear();
    console.log("=== REMOVER SEGURADORA ===\n");

    let id = Number(prompt("ID da seguradora a remover: "));
    let index = -1;
    
     for (let i = 0; i < dados.apolices.length; i++) { //verificar se existem apolices ativas
        if (dados.apolices[i].seguradoraId === id) {
            console.log("Não é possível remover: existem apólices associadas.");
            return;
        }
    }

    for (let i = 0; i < dados.seguradoras.length; i++) {
        if (dados.seguradoras[i].id === id) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("Seguradora não encontrada.");
        return;
    }

    dados.seguradoras.splice(index, 1);
    console.log("Seguradora removida com sucesso!");
}
    

//Update 
function atualizarSeguradora() {
    console.clear();
    console.log("=== ATUALIZAR SEGURADORA ===\n");

    let id = Number(prompt("ID da Seguradora: "));
    let seguradora = null;

    for (let i = 0; i < dados.seguradoras.length; i++) {
        if (dados.seguradoras[i].id === id) {
            seguradora = dados.seguradoras[i];
            break;
        }
    }

    if (!seguradora) {
        console.log("Seguradora não encontrada.");
        return;
    }

    seguradora.nome = (prompt("Novo nome: "));
    console.log("Seguradora atualizado com sucesso!");
}



//Exportações
module.exports = {
    listarSeguradoras,
    inserirSeguradora,
    removerSeguradora,
    atualizarSeguradora
};