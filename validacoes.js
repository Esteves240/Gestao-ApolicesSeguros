const prompt = require('prompt-sync')();

function validarNumeroPositivo(mensagem) {
    let valor;
    do {
        valor = Number(prompt(mensagem));
        if (isNaN(valor) || valor <= 0) {
            console.log("Valor inválido. Deve ser maior que 0.");
        }
    } while (isNaN(valor) || valor <= 0);

    return valor;
}

//validações da Apólice

function validarEstado() {
    let estadoId;
    do {
        console.log("1 - Ativa | 2 - Inativa")
        estadoId = Number(prompt("Estado: "));
        if (estadoId !== 1 && estadoId !== 2) {
            console.log("Estado inválido.");
        }
    } while (estadoId !== 1 && estadoId !== 2);

    return estadoId;
}


function validarPeriodicidade() {
    let periodicidadeId;
    do {
        console.log("1 - Mensal | 2 - Anual")
        periodicidadeId = Number(prompt("Periodicidade: "));
        if (periodicidadeId !== 1 && periodicidadeId !== 2) {
            console.log("Periodicidade inválida.");
        }
    } while (periodicidadeId !== 1 && periodicidadeId !== 2);

    return periodicidadeId;
}


function validarTipoSeguro() {
    let tipoSeguroId;
    do {
        console.log("1 - Saúde || 2 - Vida || 3 - Acidentes de trabalho || 4 - Automóvel || 5 - Habitação || 6 - Animal");
        tipoSeguroId = Number(prompt("Tipo de Seguro : "));
        if (!Number.isInteger(tipoSeguroId) || tipoSeguroId < 1 || tipoSeguroId > 6) { //isInteger para não aceitar letras ou números decimais 
            console.log("Tipo de Seguro inválido.");
        }
    } while (!Number.isInteger(tipoSeguroId) || tipoSeguroId < 1 || tipoSeguroId > 6);

    return tipoSeguroId;

}

function validarPremio(valorSegurado) {
    let premio;
    do {
        premio = Number(prompt("Prémio: "));
        if (premio <= 0) {
            console.log("Prémio tem que ser número positivo.");
        } else if (premio > valorSegurado) {
            console.log("Prémio não pode ser maior que valor segurado");
        }
    } while (premio <= 0 || premio > valorSegurado);

    return premio;
}


module.exports = {
    validarNumeroPositivo,
    validarEstado,
    validarPeriodicidade,
    validarTipoSeguro,
    validarPremio
};