const prompt = require('prompt-sync')();
const Dados = require('./teste/dados.js');

//import Dados from './teste/dados.js';

class Segurado{
    static proximoId = 6;
    constructor(identificacao, data){
        this.id = 0;
        this.identificacao = identificacao
        this.data = data
       
    }

    
//CRUD de Segurados
//Read
listarSegurados() {
    console.clear();
    console.log("=== LISTA DE SEGURADOS ===\n");

    if (Dados.segurados.length === 0) {
        console.log("Não existem segurados registados.");
        return;
    }

    for (let i = 0; i < Dados.segurados.length; i++) {
        let sg = Dados.segurados[i];

        console.log("ID: " + sg.id);
        console.log("IDENTIFICAÇÃO: " + sg.identificacao);
        console.log("DATA: " + sg.data.split("-").reverse().join("/")); //para a data ficar no formato correto);
        console.log("-------------------------");
    }
}

//Create
inserirSegurado() {
    console.clear();
    console.log("=== INSERIR SEGURADO ===\n");


        this.id = Segurado.proximoId++;
        this.identificacao = prompt("Identificação: ");
        this.data = prompt("Data (yyyy-mm-dd): ");
    console.log(this);   

    Dados.segurados.push(this);

    console.log("\nSegurado inserido com sucesso!");
}


//Delete
removerSegurado() {
    console.clear();
    console.log("=== REMOVER SEGURADO ===\n");

    let id = Number(prompt("ID do Segurado a remover: "));
    let index = -1;
    
     for (let i = 0; i < Dados.apolices.length; i++) { //verificar se existem apolices ativas
        if (Dados.apolices[i].seguradoraId === id) {
            console.log("Não é possível remover: existem apólices associadas.");
            return;
        }
    }

    for (let i = 0; i < Dados.segurados.length; i++) {
        if (Dados.segurados[i].id === id) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("Segurado não encontrado.");
        return;
    }

    Dados.segurados.splice(index, 1);
    console.log("Segurado removido com sucesso!");
}
    

//Update 
atualizarSegurado() {
    console.clear();
    console.log("=== ATUALIZAR SEGURADO ===\n");

    let id = Number(prompt("ID do Segurado: "));
    let segurado = null;

    for (let i = 0; i < Dados.segurados.length; i++) {
        if (Dados.segurados[i].id === id) {
            segurado = Dados.segurados[i];
            break;
        }
    }

    if (!segurado) {
        console.log("Segurado não encontrado.");
        return;
    }

    let opcao;

    do {
        console.clear();

        console.log("====================================");
        console.log(" Que campo quer atualizar? ");
        console.log("====================================");
        console.log("1 - Identificação");
        console.log("2 - Data");
        console.log("0 - Voltar");

        opcao = prompt("Opção: ");

        if (opcao === "1") {
            segurado.identificacao = prompt("Nova identificação: ");
            console.log("Identificação do Segurado atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        } 
        else if(opcao === "2"){
            segurado.data = (prompt("Nova data: "));
            console.log("Data atualizada com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
       


    } while (opcao !== "0");

    
}


}

module.exports = Segurado;



