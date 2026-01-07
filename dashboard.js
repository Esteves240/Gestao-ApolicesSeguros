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

    for (i = 0; i < apolice.length; i++) {
        if (apolice[i].estadoId === 1 && !apolice[i].is_deleted) {
            ativas++;
        } else if (apolice[i].estadoId === 2 && !apolice[i].is_deleted) {
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

    for (i = 0; i < seguradora.length; i++) { 
        let contador = 0;
        let somaValores = 0;

        for (j = 0; j < apolice.length; j++) {
            if (apolice[j].seguradoraId === seguradora[i].id &&   //??? pelo id e não pelo length ???
                apolice[j].estadoId === 1 && 
                !apolice[j].is_deleted) {

                contador++;
                somaValores += apolice[j].valorSegurado;
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

    console.log("Apólices ativas por Tipo de Seguro:");

    for (i = 0; i < tipoSeguro.length; i++) {
        let contador = 0;
        let somaValores = 0;

        for (j = 0; j < apolice.length; j++) {
            if (apolice[j].tipoSeguroId === tipoSeguro[i].id &&
                apolice[j].estadoId === 1 
                && !apolice[j].is_deleted) {

                contador++;
                somaValores += apolice[j].valorSegurado;
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

