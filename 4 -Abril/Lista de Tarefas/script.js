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
    label.setAttribute("id", textoTarefa);
    // label.setAttribute('id', textoTarefaLower);
    const alterar = document.createElement("i");
    alterar.setAttribute("class", "fa-solid fa-pen editar");

    //verifica se o checkbox está marcado

    li.appendChild(label);
    li.appendChild(checkbox);
    li.appendChild(alterar);
    li.appendChild(remover);
    ul.appendChild(li);
    
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        label.setAttribute("class", "concluido");
      }
      if (this.checked) {
        // concluidos.push(li);
        concluidos.push(checkbox);
        // alert("Tarefa adicionada. Array(" + concluidos + ")");
      } else {
        removerConcluido(input);
      }

      //  if (checkbox.checked) {
      //   checkboxesConcluidas[input.toLowerCase()] = checkbox.checked = true;
      // }else{
      //   checkboxesConcluidas[input.toLowerCase()] = checkbox.checked = false;
      // }

    });

    alterar.addEventListener("click", (label) => {
      const mudanca = prompt("O que quer alterar?", label.innerHTML);
      label.innerHTML = mudanca;
    });
  });
};

concluidos.forEach((checkbox) => {
  //a variavel checkbox tem toda a li dentro dela
  console.log(checkbox)
  // const elemento = document.getElementById(checkbox);
  // const id = elemento.id;
  // if (id == checkbox) {
  //   // checkbox.setAttribute('class', 'concluido')
  //   checkbox.checked = true;
  //   alert('sim')
  // }

});

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
