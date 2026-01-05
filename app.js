const prompt = require('prompt-sync')();
const dashboard = require('./dashboard.js');
const relatorios = require('./relatorios.js');
const apolices = require('./apolices.js');
const seguradoras = require('./seguradoras.js');


let opcao;

do {
    console.clear();
    dashboard.mostrarDashboard();

    console.log("\n1 - Gerir Apólices");
    console.log("2 - Gerir Seguradoras");
    console.log("3 - Gerir Entidades");
    console.log("4 - Relatórios");
    console.log("0 - Sair");
    

    opcao = prompt("Opção: ");

    if (opcao === "1") {
    menuApolices();
    }
    else if (opcao === "2") {
        menuSeguradoras();
    }
    else if (opcao === "4") {
        menuRelatorios();
    }

} while (opcao !== "0");



// 1 Apólices
function menuApolices() {
    let opcao;

    do {
        console.clear();

        console.log("====================================");
        console.log(" GESTÃO DE APÓLICES ");
        console.log("====================================");
        console.log("1 - Listar Apólices");
        console.log("2 - Inserir Apólice");
        console.log("3 - Atualizar Estado da Apólice");
        console.log("4 - Remover Apólice");
        console.log("0 - Voltar");

        opcao = prompt("Opção: ");

        if (opcao === "1") {
            apolices.listarApolices();
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "2") {
            apolices.inserirApolice();
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "3") {
            apolices.atualizarEstadoApolice();
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "4") {
            apolices.removerApolice();
            prompt("Prima ENTER para continuar...");
        }

    } while (opcao !== "0");
}

// 2 Seguradoras
function menuSeguradoras() {
    let opcao;

    do {
        console.clear();

        console.log("====================================");
        console.log(" GESTÃO DE SEGURADORAS ");
        console.log("====================================");
        console.log("1 - Listar Seguradoras");
        console.log("2 - Inserir Seguradora");
        console.log("3 - Atualizar Seguradora");
        console.log("4 - Remover Seguradora");
        console.log("0 - Voltar");

        opcao = prompt("Opção: ");

        if (opcao === "1") {
            seguradoras.listarSeguradoras();
            prompt("Prima ENTER para continuar...");
        }
       else if (opcao === "2") {
            seguradoras.inserirSeguradora();
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "3") {
            seguradoras.atualizarSeguradora();
            prompt("Prima ENTER para continuar...");
        }
        else if (opcao === "4") {
            seguradoras.removerSeguradora();
            prompt("Prima ENTER para continuar...");
        }

    } while (opcao !== "0");
}



// 4 Relatorios
function menuRelatorios() {
    let opcaoRel;

    do {
        console.clear();

        console.log("====================================");
        console.log(" RELATÓRIOS ");
        console.log("====================================");
        console.log("1 - Relatório por Tipo de Seguro");
        console.log("2 - Relatório por Seguradora");
        console.log("3 - Relatório de Entidades");
        console.log("0 - Voltar");

        opcaoRel = prompt("Opção: ");

        if (opcaoRel === "1") {
            console.clear();
            relatorios.relatorioPorTipoSeguro();
            prompt("Prima ENTER para continuar...");
        }
        else if (opcaoRel === "2") {
            console.clear();
            relatorios.relatorioPorSeguradora();
            prompt("Prima ENTER para continuar...");
        }
        else if (opcaoRel === "3") {
            console.clear();
            relatorios.relatorioEntidades();
            prompt("Prima ENTER para continuar...");
        }

    } while (opcaoRel !== "0");
}



