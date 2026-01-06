const prompt = require('prompt-sync')();
const Dados = require('./teste/dados.js');

//import Dados from './teste/dados.js';

class Tomador{
    static proximoId = 6;
    constructor(nome, dataNascimento, morada, telefone, email){
        this.id = 0;
        this.nome = nome;
        this.dataNascimento = dataNascimento
        this.morada = morada;
        this.telefone = telefone;
        this.email = email;
    }

    
//CRUD de Tomadores
//Read
listarTomadores() {
    console.clear();
    console.log("=== LISTA DE TOMADORES ===\n");

    if (Dados.tomadores.length === 0) {
        console.log("Não existem tomadores registados.");
        return;
    }

    for (let i = 0; i < Dados.tomadores.length; i++) {
        let tm = Dados.tomadores[i];

        console.log("ID: " + tm.id);
        console.log("NOME: " + tm.nome);
        console.log("DATA DE NASCIMENTO: " + tm.dataNascimento.split("-").reverse().join("/")); //para a data ficar no formato correto
        console.log("MORADA: " + tm.morada);
        console.log("TELEFONE: " + tm.telefone);
        console.log("EMAIL: " + tm.email);
        console.log("-------------------------");
    }
}

//Create
inserirTomador() {
    console.clear();
    console.log("=== INSERIR TOMADOR ===\n");


        this.id = Tomador.proximoId++;
        this.nome = prompt("Nome: ");
        this.dataNascimento = prompt("Data de nascimento (yyyy-mm-dd): ");
        this.morada = prompt("Morada: ");
        this.telefone = prompt("Telefone: ");
        this.email = prompt("Email: ");
    console.log(this);   

    Dados.tomadores.push(this);

    console.log("\nTomador inserido com sucesso!");
}


//Delete
removerTomador() {
    console.clear();
    console.log("=== REMOVER TOMADOR ===\n");

    let id = Number(prompt("ID do Tomador a remover: "));
    let index = -1;
    
     for (let i = 0; i < Dados.apolices.length; i++) { //verificar se existem apolices ativas
        if (Dados.apolices[i].seguradoraId === id) {
            console.log("Não é possível remover: existem apólices associadas.");
            return;
        }
    }

    for (let i = 0; i < Dados.tomadores.length; i++) {
        if (Dados.tomadores[i].id === id) {
            index = i;
            break;
        }
    }

    if (index === -1) {
        console.log("Tomador não encontrado.");
        return;
    }

    Dados.tomadores.splice(index, 1);
    console.log("Tomador removido com sucesso!");
}
    

//Update 
atualizarTomador() {
    console.clear();
    console.log("=== ATUALIZAR TOMADOR ===\n");

    let id = Number(prompt("ID do Tomador: "));
    let tomador = null;

    for (let i = 0; i < Dados.tomadores.length; i++) {
        if (Dados.tomadores[i].id === id) {
            tomador = Dados.tomadores[i];
            break;
        }
    }

    if (!tomador) {
        console.log("Tomador não encontrado.");
        return;
    }


    let opcao;

    do {
        console.clear();

        console.log("====================================");
        console.log(" Que campo quer atualizar? ");
        console.log("====================================");
        console.log("1 - Nome");
        console.log("2 - Data de Nascimento");
        console.log("3 - Morada");
        console.log("4 - Telefone");
        console.log("5 - Email");
        console.log("0 - Voltar");

        opcao = prompt("Opção: ");

        if (opcao === "1") {
            
            tomador.nome = (prompt("Novo nome: "));
            console.log("Nome do Tomador atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        } 
        else if(opcao === "2"){
            tomador.dataNascimento = (prompt("Nova data: "));
            console.log("Data atualizada com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if(opcao === "3"){
            tomador.morada = (prompt("Nova morada: "));
            console.log("Morada atualizada com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if(opcao === "4"){
            tomador.telefone = (prompt("Novo telefone: "));
            console.log("Telefone atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if(opcao === "5"){
            tomador.email = (prompt("Novo email: "));
            console.log("Email atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
       


    } while (opcao !== "0");
    

}


}

module.exports = Tomador;