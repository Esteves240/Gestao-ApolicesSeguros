const dados = require('./dados.js');

const periodicidade = dados.periodicidades;


//Gerar novo ID (para CRUD)
function gerarNovoId(lista) {
    let i;
    let maiorId = 0;

    for (i = 0; i < lista.length; i++) {
        if (lista[i].id > maiorId) {
            maiorId = lista[i].id;
        }
    }

    return maiorId + 1;
}


//Ver se apólice está ativa
function apoliceEstaAtiva(apolice) {
    if (apolice.estadoId === 1) {
        return true;
    }
    return false;
}



//Calcular prémio anual 
//usada para Relatorio por tipo de seguro          
function calcularPremioAnual(apolice) {
    let i;
    let multiplicador = 1;

    for (i = 0; i < periodicidade.length; i++) {
        if (periodicidade[i].id === apolice.periodicidadeId) {
            multiplicador = periodicidade[i].multiplicadorAnual;
            break;
        }
    }

    return apolice.premio * multiplicador;
}


//Calcular idade
//usada no Relatório de entidades
function calcularIdade(dataNascimento) {
    let hoje = new Date();
    let nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();

    let mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    return idade;
}




//Exportações
module.exports = {
    gerarNovoId: gerarNovoId,
    apoliceEstaAtiva: apoliceEstaAtiva,
    calcularPremioAnual: calcularPremioAnual,
    calcularIdade: calcularIdade,
};

