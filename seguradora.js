const prompt = require('prompt-sync')();
const Dados = require('./teste/dados.js');

//import Dados from './teste/dados.js';

class Seguradora{
    static proximoId = 6;
    constructor(nome){
        this.id = 0;
        this.nome = nome
    }

    
//CRUD de Seguradoras
//Read
listarSeguradoras() {
    console.clear();
    console.log("=== LISTA DE SEGURADORAS ===\n");

    if (Dados.seguradoras.length === 0) {
        console.log("Não existem seguradoras registadas.");
        return;
    }

    for (let i = 0; i < Dados.seguradoras.length; i++) {
        let sg = Dados.seguradoras[i];

        console.log("ID: " + sg.id);
        console.log("NOME: " + sg.nome);
        console.log("-------------------------");
    }
}

//Create
inserirSeguradora() {
    console.clear();
    console.log("=== INSERIR SEGURADORA ===\n");


        this.id = Seguradora.proximoId++;
        this.nome = prompt("Nome: ");
    console.log(this);   

    Dados.seguradoras.push(this);

    console.log("\nSeguradora inserida com sucesso!");
}


//Delete
removerSeguradora() {
    console.clear();
    console.log("=== REMOVER SEGURADORA ===\n");

    let id = Number(prompt("ID da seguradora a remover: "));
    let index = -1;
    
     for (let i = 0; i < Dados.apolices.length; i++) { //verificar se existem apolices ativas
        if (Dados.apolices[i].seguradoraId === id) {
            console.log("Não é possível remover: existem apólices associadas.");
            return;
        }
    }

    for (let i = 0; i < Dados.seguradoras.length; i++) {
        if (Dados.seguradoras[i].id === id) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("Seguradora não encontrada.");
        return;
    }

    Dados.seguradoras.splice(index, 1);
    console.log("Seguradora removida com sucesso!");
}
    

//Update 
atualizarSeguradora() {
    console.clear();
    console.log("=== ATUALIZAR SEGURADORA ===\n");

    let id = Number(prompt("ID da Seguradora: "));
    let seguradora = null;

    for (let i = 0; i < Dados.seguradoras.length; i++) {
        if (Dados.seguradoras[i].id === id) {
            seguradora = Dados.seguradoras[i];
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


}

module.exports = Seguradora;





