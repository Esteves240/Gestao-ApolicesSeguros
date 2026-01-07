const dados = require('./dados.js');

const apolice = dados.apolices;
const seguradora = dados.seguradoras;
const tipoSeguro = dados.tipoSeguros;


function mostrarDashboard() {
    console.log("====================================");
    console.log(" DASHBOARD – SURPRESAS EXISTEM! ");
    console.log("====================================\n");

    mostrarResumoApolices();
    mostrarApolicesPorSeguradora();
    mostrarApolicesPorTipoSeguro();
}


//Quantidade de apólices ativas e inativas
function mostrarResumoApolices() {
    let i;
    let ativas = 0;
    let inativas = 0;

    for (i = 0; i < dados.apolices.length; i++) {
        if (dados.apolices[i].estadoId === 1 && !dados.apolices[i].is_deleted) {
            ativas++;
        } else if (dados.apolices[i].estadoId === 2 && !dados.apolices[i].is_deleted) {
            inativas++;
        }
    }

    console.log("Apólices:");
    console.log(" - Ativas: " + ativas);
    console.log(" - Inativas: " + inativas + "\n");
}



//Quantidade de apólices e valor médio segurado por seguradora (apenas apólices ativas);
function mostrarApolicesPorSeguradora() {
    let i, j;
    let existemApolicesAtivas = false;

    console.log("Apólices ativas por Seguradora:");

    for (i = 0; i < dados.seguradoras.length; i++) { 
        let contador = 0;
        let somaValores = 0;

        for (j = 0; j < dados.apolices.length; j++) {
            if (dados.apolices[j].seguradoraId === dados.seguradoras[i].id &&   //??? pelo id e não pelo length ???
                dados.apolices[j].estadoId === 1 && 
                !dados.apolices[j].is_deleted) {

                contador++;
                somaValores += dados.apolices[j].valorSegurado;
                existemApolicesAtivas = true;
            }
        }

        if (contador > 0) {
            let media = somaValores / contador;

            console.log(`- ${seguradora[i].nome}: ${contador} apólice(s), valor médio segurado = ${media.toFixed(2)} €`);
        }
    }

    if (!existemApolicesAtivas) {
        console.log("Não existem apólices ativas!");
    }
}


//Quantidade de apólices e valor médio segurado por tipo de seguro (apenas apólices ativas).
function mostrarApolicesPorTipoSeguro() {
    let i, j;
    let existemApolicesAtivas = false;

    console.log("\nApólices ativas por Tipo de Seguro:");

    for (i = 0; i < dados.tipoSeguros.length; i++) {
        let contador = 0;
        let somaValores = 0;

        for (j = 0; j < dados.apolices.length; j++) {
            if (dados.apolices[j].tipoSeguroId === dados.tipoSeguros[i].id &&
                dados.apolices[j].estadoId === 1 
                && !dados.apolices[j].is_deleted) {

                contador++;
                somaValores += dados.apolices[j].valorSegurado;
                existemApolicesAtivas = true;
            }
        }

        if (contador > 0) {
            let media = somaValores / contador;

            console.log(`- ${tipoSeguro[i].descricao}: ${contador} apólice(s), valor médio segurado = ${media.toFixed(2)}€`);
        }
    }

    if (!existemApolicesAtivas) {
        console.log("Não existem apólices ativas!");
    }
}




//Exportação
module.exports = {
    mostrarDashboard: mostrarDashboard
};

