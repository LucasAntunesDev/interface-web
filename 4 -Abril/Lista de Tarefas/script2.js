let tarefas = [];
let concluidos = [];
const green = "#059669";
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const adicionarTarefa = (t) => {
 t.preventDefault();
 const input = document.getElementById("input");
 const texto = input.value;
 const tarefaExiste = tarefas.some(
  (i) => i.toUpperCase() === texto.toUpperCase()
 );
 texto != "" && !tarefaExiste ? tarefas.push(texto) : "";
 atualizaLista();
 input.value = "";
};

const atualizaLista = () => {
 const ul = document.getElementById("tarefas");
 ul.innerHTML = "";

 tarefas.forEach((input) => {
  const li = document.createElement("li");
  //cria um input e o atribui como checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  //criação do botão que remove a tarefa
  const remover = document.createElement("i");
  remover.setAttribute("class", "fa-solid fa-trash remover");
  remover.addEventListener("click", () => removerTarefa(input));
  
  const label = document.createElement('label');
  label.innerHTML = input;
  const textoTarefa = label.innerHTML;
  const textoTarefaLower = textoTarefa.toLowerCase()
  checkbox.setAttribute("id", textoTarefaLower);
  label.setAttribute('for', textoTarefaLower);
  const alterar = document.createElement("i");
  alterar.setAttribute("class", "fa-solid fa-pen editar");
  //verifica se o checkbox está marcado
  checkbox.addEventListener("change", function () {
    label.style.textDecoration = this.checked ? "line-through" : "none";
    label.style.color = this.checked ? green : "white";
   if (this.checked) {
    concluidos.push(textoTarefa);
    alert("Tarefa adicionada. Array(" + concluidos + ")");
    // alert(concluidos)
   } else {
    removerConcluido(input)
   }
  });

  li.appendChild(label);
  li.appendChild(checkbox);
  li.appendChild(alterar);
  li.appendChild(remover);
  ul.appendChild(li);
 });
};

const removerTarefa = (tarefa) => {
 tarefas = tarefas.filter((t) => t !== tarefa);
 const index = concluidos.indexOf(tarefa);
 alert(index);
 if (index != -1) {
  concluidos.splice(index, 1);
  alert("removido;", concluidos);
 }
 atualizaLista();
};

const removerConcluido = (tarefa) => {
 const index = concluidos.indexOf(tarefa);
 alert(index);
 if (index != -1) {
  concluidos.splice(index, 1);
  alert("removido;", concluidos);
 }
 atualizaLista();
};

const filtar = () => {
 const select = document.getElementById("filtros");
};

const concluirTarefa = (t) => {
 concluidos.push(t);
 console.log(concluidos);

 console.log(tarefas[input]);
 tarefas = tarefas.slice(t);

 adicionarConcluidos(t);
};

const adicionarConcluidos = (c) => {
 const ul = document.getElementById("tarefas");
 const li = document.createElement("li");
 li.innerHTML = '<p class="concluido"><s>' + c + "<s></p><br>";
 ul.appendChild(li);
};

const form = document.getElementById("form");

form.addEventListener("submit", adicionarTarefa);
