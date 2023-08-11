const DIAS = [
  "DOMINGO",
  "SEGUNDA",
  "TERCA",
  "QUARTA",
  "QUINTA",
  "SEXTA",
  "SABADO",
];

const periodos = [
  {
    inicio: "08:00",
    termino: "12:00",
    dias: ["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA", "SABADO"],
  },
  {
    inicio: "13:30",
    termino: "17:30",
    dias: ["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA"],
  },
];

// const x =DIAS.map(dia => ({dia:dia}))
const x = DIAS.map((dia) => ({
  dia,
  periodos: periodos
    .filter((o) => o.dias.includes(dia))
    .map(({ inicio, termino }) => `${inicio} - ${termino}`),
}));
console.log(x);

x.forEach((d) => {
  const ul = document.getElementById("ul");
  const li = document.createElement("li");
  d.periodos.length === 0
    ? (li.innerHTML = `${d.dia}: Fechado`)
    : (li.innerHTML = `${d.dia}: Perídodos: ${d.periodos}`);
  ul.appendChild(li);

  console.log(
    d.dia,
    d.periodos.length === 0 ? "Fechado" : `Perídodos: ${d.periodos}`
  );
});

const adicionarData = (e) => {
  //Impede de executar a ação padrão
  //(no caso, enviar os dados para o servidor)
  e.preventDefault();
  //Recupera texto e input
  const inicio = document.getElementById("inico").value;
  console.log(inicio)
  const termino = document.getElementById("termino");
  const itemExiste = itens.some((i) => i.toUpperCase() === texto.toUpperCase());
  //Não deixa adicionar se o input estiver vazio ou o item for repetido
  texto != "" && !itemExiste ? itens.push(texto) : "";
  //Atualiza a lista
  atualizaLista();
  //Limpa o input
  input.value = "";
};


const btn = document.getElementById("btn");
// const inicio = document.getElementById('inico')
// const termino = document.getElementById('termino')

btn.addEventListener(
  "click",
  adicionarData
//   btn.value != null ? console.log("teste", btn.value) : ""
);
