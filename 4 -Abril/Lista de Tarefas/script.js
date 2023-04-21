const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todasRadio = document.getElementById("todas");
const completas = document.getElementById("concluidas");
const incompletas = document.getElementById("nao-completas");
const filtroNome = document.getElementById("filtrar-nome");
const faltam = document.getElementById("faltam");

let tarefas = [];

const adicionarTarefa = () => {
 const textoTarefa = input.value;
 //Verifica se a tarefa já existe
 const tarefaExiste = tarefas.some(
  (i) => i.texto.toUpperCase() === textoTarefa.toUpperCase()
 );

 if (textoTarefa != "" && !tarefaExiste) {
  //Objeto que guarda o nome da tarefa e o estado de conclusão dela
  tarefas.push({ texto: textoTarefa, concluida: false });
 }

 input.value = "";
 atualizaLista();
};

//Função para remover a tarefa
const removerTarefa = (index) => {
 tarefas.splice(index, 1);
 atualizaLista();
};

//Função para atualizar o valor da tarefa
const atualizaTarefa = (index, texto) => {
 tarefas[index].texto = texto;
 atualizaLista();
};

//Função para mudar o estado de conclusão da tarefa
const mudarCompleto = (index) => {
 tarefas[index].concluida = !tarefas[index].concluida;
 atualizaLista();
};

const atualizaLista = () => {
 const ul = document.getElementById("ul");
 ul.innerHTML = "";

 //Atualiza a lista de acordo com os filtros
 let tarefasFiltradas = tarefas.filter((tarefa) => {
  if (completas.checked) return tarefa.concluida;
  else if (incompletas.checked) return !tarefa.concluida;
  else return true;
 });

 //Filtra a tarefa pelo nome
 tarefasFiltradas = tarefasFiltradas.filter((tarefa) =>
  tarefa.texto.includes(filtroNome.value)
 );

 tarefasFiltradas.forEach((tarefa, index) => {
  const li = document.createElement("li");

  const label = document.createElement("label");
  label.setAttribute("class", "flex-row gap-1");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = tarefa.concluida;
  checkbox.addEventListener("change", () => mudarCompleto(index));

  label.appendChild(checkbox);
  tarefa.concluida ? label.classList.add("concluido") : "";

  const textoTarefa = document.createElement("span");
  textoTarefa.innerHTML = tarefa.texto;
  textoTarefa.classList.add("texto");
  label.appendChild(textoTarefa);

  const remover = document.createElement("button");
  remover.setAttribute("class", "fa-solid fa-trash remover");
  remover.addEventListener("click", () => removerTarefa(index));

  const alterar = document.createElement("button");
  alterar.setAttribute("class", "fa-solid fa-pen editar");

  //Permite alterar a tarefa
  alterar.addEventListener("click", () => {
   const novoTexto = prompt("Editar tarefa", tarefa.texto);

    atualizaTarefa(index, novoTexto);

   atualizaLista();
  });

  const btnsDiv = document.createElement("div");
  btnsDiv.setAttribute("class", "flex-row gap-1");

  btnsDiv.appendChild(alterar);
  btnsDiv.appendChild(remover);
  li.appendChild(label);
  li.appendChild(btnsDiv);
  ul.appendChild(li);
 });
};

btn.addEventListener("click", adicionarTarefa);

input.addEventListener("keypress", (event) => {
 if (event.key === "Enter") {
  event.preventDefault();
  document.getElementById("btn").click();
 }
});

filtroNome.addEventListener("input", atualizaLista);

todasRadio.addEventListener("change", atualizaLista);

completas.addEventListener("change", atualizaLista);

incompletas.addEventListener("change", atualizaLista);

atualizaLista();
