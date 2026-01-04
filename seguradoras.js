


function removerSeguradora() {
    let id = Number(prompt("ID da seguradora: "));

    for (let i = 0; i < dados.apolice.length; i++) { //verificar se existem apolices ativas
        if (dados.apolice[i].seguradoraId === id) {
            console.log("Não é possível remover: existem apólices associadas.");
            return;
        }
    }

    // CONTINUAR...
}
