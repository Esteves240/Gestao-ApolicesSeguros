const prompt = require('prompt-sync')();
const Dados = require('./teste/dados.js');
const {validarEstado, validarPeriodicidade, validarTipoSeguro, validarNumeroPositivo, validarPremio} = require('./validacoes.js');


class Apolice {
    static listaApolices = [];
    static proximoId = 1;
    constructor(seguradoraId, tomadorId, seguradoId, tipoSeguroId, valorSegurado, premio, estadoId, periodicidadeId, dataInicio) {
        this.id = Apolice.proximoId++; 
        this.seguradoraId = seguradoraId; 
        this.tomadorId = tomadorId; 
        this.seguradoId = seguradoId;
        this.tipoSeguroId = tipoSeguroId;
        this.valorSegurado = valorSegurado;
        this.premio = premio; 
        this.estadoId = estadoId;
        this.periodicidadeId = periodicidadeId;
        this.is_deleted = false; 
        this.dataInicio = dataInicio;
    }


//CRUD de apólices
//Read
listarApolices() {
    console.clear();
    console.log("=== LISTA DE APÓLICES ===\n");

    if (Dados.apolices.length === 0) {
        console.log("Não existem apólices registadas.");
        return;
    }

    for (let i = 0; i < Dados.apolices.length; i++) {
        let ap = Dados.apolices[i];

        if (ap.is_deleted) continue;

        console.log("ID: " + ap.id);
        console.log("Seguradora ID: " + ap.seguradoraId);
        console.log("Tipo Seguro ID: " + ap.tipoSeguroId);
        console.log("Valor Segurado: " + ap.valorSegurado);
        console.log("Prémio: " + ap.premio);
        console.log("Estado ID: " + ap.estadoId);
        console.log("Data de início: " + ap.dataInicio.split("-").reverse().join("/"));
        console.log("Tomador ID: " + ap.tomadorId);
        console.log("Segurado ID: " + ap.seguradoId);
        console.log("Periodicidade ID: " + ap.periodicidadeId);
        console.log("-------------------------");
    }
}


//Create
inserirApolice() {
    console.clear();
    console.log("=== INSERIR APÓLICE ===\n");

    let seguradoraId;

    while (true) {
        seguradoraId = Number(prompt("ID da Seguradora: ")); 
        let encontrado = false;
        for (let i = 0; i < Dados.seguradoras.length; i++) {
            if (Dados.seguradoras[i].id === seguradoraId) {
                encontrado = true;
                break;
            }
        }

        if (encontrado) 
            break;
        console.log("Seguradora não existe.");
    }

    let tomadorId;

    while (true) {
        tomadorId = Number(prompt("ID do Tomador: "));
        let encontrado = false; 
        for (let i = 0; i < Dados.tomadores.length; i++) {
            if (Dados.tomadores[i].id === tomadorId) {
                encontrado = true;
                break;
            }
        }

        if (encontrado)
            break;
        console.log("Tomador não existe.");
}

    let seguradoId;

    while(true) {
        seguradoId = Number(prompt("ID do Segurado: "));
        let encontrado = false; 
        for (let i = 0; i < Dados.segurados.length; i++) {
            if (Dados.segurados[i].id === seguradoId) {
                encontrado = true; 
                break;
            }
        }

        if (encontrado)
            break; 
        console.log("Segurado não existe.")
    }
    
    const tipoSeguroId = validarTipoSeguro();
    const valorSegurado = validarNumeroPositivo("Valor Segurado: ");
    const premio = validarPremio("Prémio: ");
    const periodicidadeId = validarPeriodicidade();
    const estadoId = validarEstado();
    const dataInicio = prompt("Data de início (yyyy-mm-dd): ")

    // Criar nova apólice usando a classe
    const novaApolice = new Apolice(
        seguradoraId,
        tomadorId,
        seguradoId,
        tipoSeguroId,
        valorSegurado,
        premio,
        estadoId,
        periodicidadeId,
        dataInicio
    );

    Dados.apolices.push(novaApolice);

    console.log("\nApólice inserida com sucesso!");
}


//Delete
removerApolice() {
    console.clear();
    console.log("=== REMOVER APÓLICE ===\n");

    let id = Number(prompt("ID da apólice a remover: "));
    let apolice = null;

    for (let i = 0; i < Dados.apolices.length; i++) {
        if (Dados.apolices[i].id === id) {
            apolice = Dados.apolices[i];
            break;
        }
    }

    if (!apolice) {
        console.log("Apólice não encontrada.");
        return;
    }

    if (apolice.estadoId === 1) {
        console.log("Não é possível remover uma apólice ativa.");
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

    for (let i = 0; i < Dados.apolices.length; i++) {
        if (Dados.apolices[i].id === id) {
            apolice = Dados.apolices[i];
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
            let novoId; 

            while(true) {
                novoId = Number(prompt("Nova Seguradora ID: "));
                let encontrado = false; 

                for (let i = 0; i < Dados.seguradoras.length; i++) {
                    if(Dados.seguradoras[i].id === novoId) {
                        encontrado = true; 
                        break; 
                    }
                }

                if (encontrado)
                    break; 
                console.log("Seguradora não existe."); 
            }
            
            apolice.seguradoraId = novoId; 
            console.log("Seguradora atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
         else if (opcao === "2") {
            let novoId; 

            while(true) {
                novoId = Number(prompt("Novo Tomador ID: "));
                let encontrado = false; 

                for (let i = 0; i < Dados.tomadores.length; i++) {
                    if (Dados.tomadores[i].id === novoId) {
                        encontrado = true;
                        break; 
                    }
                }

                if (encontrado)
                    break; 
                console.log("Tomador não existe.");
        
            }
            apolice.tomadorId = novoId;
            console.log("Tomador atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
         else if (opcao === "3") {
            let novoId; 

            while(true) {
                novoId = Number(prompt("Novo Segurado ID: ")); 
                let encontrado = false; 

                for (let i = 0; i < Dados.segurados.length; i++) {
                    if (Dados.segurados[i].id === novoId) {
                        encontrado = true; 
                        break; 
                    }
                }

            if (encontrado)
                break; 
            console.log("Segurado não existe."); 
            }
            apolice.seguradoId = novoId;
            console.log("Segurado atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "4") {
            apolice.tipoSeguroId = validarTipoSeguro();
            console.log("Tipo de Seguro atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "5") {
            apolice.valorSegurado = validarNumeroPositivo("Novo Valor Segurado: ");
            console.log("Valor Segurado atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "6") {
            apolice.premio = validarPremio();
            console.log("Prémio atualizado com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "7") {
            apolice.periodicidadeId = validarPeriodicidade();
            console.log("Periocidade atualizada com sucesso!");
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "8") {
            apolice.estadoId = validarEstado();
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
