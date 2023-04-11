let tarefas = [];
let concluidos = [];
const green = "#059669";
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const checkboxesConcluidas = {};

//Adiciona uma nova tarefa
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

//Atualiza a lista de tarefas
const atualizaLista = () => {
 const ul = document.getElementById("tarefas");

 ul.innerHTML = "";

 tarefas.forEach((input) => {
  const li = document.createElement("li");
  const select = document.getElementById("filtros");
  // filtos.addEventListener('change', filtar())
  //cria um input e o atribui como checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  //criação do botão que remove a tarefa
  const remover = document.createElement("i");
  remover.setAttribute("class", "fa-solid fa-trash remover");
  //Remove a tarefa
  remover.addEventListener("click", () => removerTarefa(input));
  //Coloca o texto do input no innerHTML da tarefa
  const label = document.createElement("label");
  label.innerHTML = input;
  const textoTarefa = label.innerHTML;
  const textoTarefaLower = textoTarefa.toLowerCase();
  checkbox.setAttribute("id", textoTarefa);
  // checkbox.addEventListener("click", () => checar(checkbox));
  // label.setAttribute('id', textoTarefaLower);
  const alterar = document.createElement("i");
  alterar.setAttribute("class", "fa-solid fa-pen editar");

  //verifica se o checkbox está marcado

  for (let i = 0; i < concluidos.length; i++) {
   //   console.log(checkbox)
   //   console.log(concluidos[i])
   //  checkbox.id = concluidos[i].id ? console.log("sim") : console.log("não");
   //  checkbox.id = concluidos[i].id ? this.setAttribute('checked', 'true'): this.checked;
   //  if(concluidos[i].checked){
   //   alert ('éeee')
   //  }
   // //  document.getElementById(checkbox.id).id
   //  document.getElementById('tarefa').checked
  }

  li.appendChild(label);
  li.appendChild(checkbox);
  li.appendChild(alterar);
  li.appendChild(remover);
  
  select.addEventListener('change', filtrar())

  ul.appendChild(li);

  // concluidos.forEach(checkbox){
  //   li.innerHTML = checkbox
  // }

  // checkbox.addEventListener("change", function (c) {
  const checar = () => {
   //  if (this.checked) {
   // }
   if (this.checked) {
    c.setAttribute("checked", true);
    label.setAttribute("class", "concluido");
    // concluidos.push(li);
    concluidos.push(checkbox);
    // alert("Tarefa adicionada. Array(" + concluidos + ")");
   } else {
    removerConcluido(input);
   }
  };

  //  if (checkbox.checked) {
  //   checkboxesConcluidas[input.toLowerCase()] = checkbox.checked = true;
  // }else{
  //   checkboxesConcluidas[input.toLowerCase()] = checkbox.checked = false;
  // }
 });

 alterar.addEventListener("click", (label) => {
  const input = document.getElementById("input");
  input.focus();
  label.innerHTML = input.value;
  // input.value = this.innerHTML
  // const mudanca = prompt("O que quer alterar?", label.innerHTML);
  // label.innerHTML = mudanca;
  // alert(textoTarefa)
 });
 //  });
};

const removerTarefa = (tarefa) => {
 tarefas = tarefas.filter((t) => t !== tarefa);
 const index = concluidos.indexOf(tarefa);
 alert(index);
 if (index != -1) {
  concluidos.splice(index, 1);
  alert("Tarefa removida. Array(" + concluidos + ")");
 }
 atualizaLista();
};

const removerConcluido = (tarefa) => {
 const index = concluidos.indexOf(tarefa);
 alert(index);
 if (index != -1) {
  concluidos.splice(index, 1);
  alert("Tarefa removida. Array(" + concluidos + ")");
 }
 atualizaLista();
};

const filtrar = (tarefa, l) => {
 const select = document.getElementById("filtros");
 const opcao = document.querySelectorAll("option");
 const concluidos = document.getElementById("concluidos");
 const naoConcluidos = document.getElementById("nao-concluidos");
 //  const opcao = document.getElementById('concluidos');
 //  const opcao = document.getElementsByTagName('option');
 switch (select.value) {
  case 'concluidos':
   alert("Concluidos");
  //  tarefas.filter((t) => alert(t.tarefas.includes.class('concluidos')))
  // removerTarefa(l)
  // t = tarefas.filter((t) => t == tarefa)
   break;
  case 'nao-concluidos':
   alert("Não concluidos");
   break;
  // case pr:
  //  alert("Bem vindos ao PR");
 }
//  select.id == concluidos ? alert("Concluidos") : alert("Não concluidos");
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

concluidos.forEach((checkbox) => {
 //a variavel checkbox tem toda a li dentro dela
 console.log(checkbox);
 // const elemento = document.getElementById(checkbox);
 // const id = elemento.id;
 // if (id == checkbox) {
 //   // checkbox.setAttribute('class', 'concluido')
 //   checkbox.checked = true;
 //   alert('sim')
 // }
});
