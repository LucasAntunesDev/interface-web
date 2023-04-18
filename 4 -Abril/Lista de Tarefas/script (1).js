let tarefas = [];
let concluidos = [];
const green = "#059669";
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// const checkboxesConcluidas = {};
const checkboxesConcluidas = [];

//Adiciona uma nova tarefa
const adicionarTarefa = (t) => {
 t.preventDefault();
 const input = document.getElementById("input");
 const texto = input.value;
 const tarefaExiste = tarefas.some(
  (i) => i.texto.toUpperCase() === texto.toUpperCase()
 );
 texto != "" && !tarefaExiste ? tarefas.push({texto: texto, concluida: false}) : "";
 atualizaLista();
 input.value = "";
};

//Atualiza a lista de tarefas
const atualizaLista = () => {
 //carrega a ul
 const ul = document.getElementById("tarefas");

 ul.innerHTML = "";
 //Percorre o array tarefas
 tarefas.forEach((input) => {
  //Carrega / cria os elemntos
  const li = document.createElement("li");
  //cria um input e o atribui como checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const remover = document.createElement("i");
  remover.setAttribute("class", "fa-solid fa-trash remover");
  //Remove a tarefa
  remover.addEventListener("click", () => removerTarefa(input));
  //Coloca o texto do input no innerHTML da tarefa
  const label = document.createElement("label");
  label.innerHTML = input.texto;
  const textoTarefa = label.innerHTML;
  checkbox.setAttribute("id", textoTarefa);

  //Verifica se a tarefa já está no array,
  //se verdadeiro, automaticamente marca ela como concluida
  //(está marcando quando adiciona a tarefa pela primeira vez,
  //tem que fazer a partir da segunda)
  tarefas.forEach((t) => {
   concluidos.forEach((c) => {
    // c.concluido == true ? checkbox.setAttribute("checked", true) : "";
    let texto = t
    // let checkbox = c.item
    // c.concluido == true ? checkbox.setAttribute("class", 'concluido') : "";
    c.concluido == true ? c.texto.setAttribute("class", 'concluido') : "";
   });
  });
  // if (concluidos.length > 0) {
  //  tarefas.forEach((t) => {
  // if (t == label.innerHTML) {
  //  label.setAttribute("class", "concluido");
  //  checkbox.checked = true;
  //  checkbox.setAttribute('checked' , true)
  //  concluidos.splice(t, 1);
  //  concluidos.push(checkbox.checked = true);
  // }
  //  });
  // }

  const alterar = document.createElement("i");
  alterar.setAttribute("class", "fa-solid fa-pen editar");

  //tem que verificar se o checkbox está marcado

  li.appendChild(label);
  li.appendChild(checkbox);
  li.appendChild(alterar);
  li.appendChild(remover);

  // select.addEventListener("change", filtrar());

  ul.appendChild(li);

  checkbox.addEventListener("change", function () {
   if (this.checked) {
    label.setAttribute("class", "concluido")
     ? //  ? label.classList.remove
       label.removeAttribute("class", "concluido")
     : label.setAttribute("class", "concluido");
    //  atualizaTarefa();
   }
   if (this.checked) {
    console.log(label.value)
    concluidos.push({ item: checkbox, concluido: true, texto : label });
    concluidos.forEach((e) => {
     console.log(e.item);
     console.log(e.concluido);
     e.concluido == true ? e.item.setAttribute("checked", true) : "";
    });
   } else {
    removerConcluido(input);
   }

   //  checkboxesConcluidas.forEach((c) => {
   //   console.log("classe: " + c.class);
   //  });
  });

  //Permite alterar a tarefa
  alterar.addEventListener("click", () => {
   const input = document.getElementById("input");
   const texto = label.innerHTML;

   input.focus();

   //Percorre o array de tarefas
   tarefas.forEach((tarefa) => {
    //Coloca o valor do input igual a variável texto
    input.value = texto;
    tarefa.texto = input.value;
    //Filtra o array tarefas para mostar tudo o que
    //não for t
    tarefas = tarefas.filter((t) => t.texto !== tarefa);
    //só que quando eu altero a tarefa,
    //a lista não mantém a ordem original
   });

   atualizaLista();
  });
 });
};

const removerTarefa = (tarefa) => {
 tarefas = tarefas.filter((t) => t !== tarefa);
 const index = concluidos.indexOf(tarefa);
 if (index != -1) {
  concluidos.splice(index, 1);
 }
 atualizaLista();
};

//Remover a tarefa do array concluidos
const removerConcluido = (tarefa) => {
 const index = concluidos.indexOf(tarefa);
 if (index != -1) {
  concluidos.splice(index, 1);
 }
 atualizaLista();
};

//Função para concluir a tarefa
const concluirTarefa = (t) => {
 concluidos.push(t);
 console.log(concluidos);

 console.log(tarefas[input]);
 tarefas = tarefas.slice(t);

 adicionarConcluidos(t);
};

//Função para adicionar item concluidos
const adicionarConcluidos = (c) => {
 const ul = document.getElementById("tarefas");
 const li = document.createElement("li");
 li.innerHTML = '<p class="concluido"><s>' + c + "<s></p><br>";
 ul.appendChild(li);
};

//Função para filtar (em desenvolvimento)
const filtrarNome = () => {
 const inputFiltro = document.getElementById("filtar-nomes");
 const texto = this.value;
 tarefas = tarefas.filter((t) => t == texto);
};

//Verifica checkboxes comcluidas
const toggletarefaCompletion = () => {
 tarefas.forEach((t) => {
  t.checked ? console.log("checado") : "";

  // console.log(t)
  t.completed = !t.completed;
 });
 atualizaLista();
};

//Atualiza a tarefa
const atualizaTarefa = (index, concluida) => {
  tarefas[index].concluida = true;
  atualizaLista();
}

const v = (v) => {
  if(v = 'concluidos'){
    // tar = tarefas.concluida;
    tarefas = tarefas.filter((t) => t.concluido == true )
    console.log(tarefas[0].concluido)
    // tarefas = tarefas.concluida.filter((t) => t == true);
  }
  // alert(v);
}
// tarefas = tarefas.filter((t) => t !== tarefa);
const form = document.getElementById("form");

form.addEventListener("submit", adicionarTarefa);
