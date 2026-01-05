//(mudar para Classes :´( )


const seguradoras = [
  //new this.seguradora(1, "Fidelidade"),
  { id: 2, nome: "Allianz"},
  { id: 3, nome: "Generali"},
  { id: 4, nome: "Ageas"},
  { id: 5, nome: "Zurich"}
];


const tomadores = [ 
  {
    id: 1,
    nome: "João Silva",
    dataNascimento: "1985-06-12",
    morada: "Lisboa",
    telefone: "912345678",
    email: "joao@email.pt",
  }
];

const segurados = [
  {
    id: 1,
    identificacao: "Opel Astra",
    data: "1995-06-12",
  }
];

//principal
const apolices = [
  {
    id: 1,
    seguradoraId: 1,
    tomadorId: 1,
    seguradoId: 1,
    tipoSeguroId: 1,
    valorSegurado: 100000,
    premio: 25,
    periodicidadeId: 1,
    estadoId: 1,
    dataInicio: "2025-06-12",
    proximoId: 2
  }
];

//dados estáticos
const tipoSeguros = Object.freeze([ 
  { id: 1, descricao: "Saúde" },  
  { id: 2, descricao: "Vida" },
  { id: 3, descricao: "Acidentes de Trabalho" },
  { id: 4, descricao: "Automóvel" },
  { id: 5, descricao: "Habitação" },
  { id: 6, descricao: "Animal" },
]);

const periodicidades = Object.freeze([
  { id: 1, descricao: "Mensal", multiplicadorAnual: 12 },
  { id: 2, descricao: "Anual", multiplicadorAnual: 1 }
]);

const estados = Object.freeze([
  { id: 1, descricao: "Ativa" },
  { id: 2, descricao: "Inativa" }
]);



//exports

module.exports = {
  seguradoras,
  tomadores,
  segurados,
  apolices,
  tipoSeguros,
  periodicidades,
  estados,
};