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
  //carrega a ul
  const ul = document.getElementById("tarefas");
  ul.innerHTML = "";
  //Percorre o array tarefas
  tarefas.forEach((input) => {
    //Carrega / cria os elemntos
    const li = document.createElement("li");
    const select = document.getElementById("filtros");
    // filtos.addEventListener('change', filtar())
    //cria um input e o atribui como checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const remover = document.createElement("i");
    remover.setAttribute("class", "fa-solid fa-trash remover");
    //Remove a tarefa
    remover.addEventListener("click", () => removerTarefa(input));
    //Coloca o texto do input no innerHTML da tarefa
    const label = document.createElement("label");
    label.innerHTML = input;
    const textoTarefa = label.innerHTML;
    checkbox.setAttribute("id", textoTarefa);
    // checkbox.addEventListener("click", () => checar(checkbox));
    // label.setAttribute('id', textoTarefaLower);
    const alterar = document.createElement("i");
    alterar.setAttribute("class", "fa-solid fa-pen editar");

    //tem que verificar se o checkbox está marcado

    li.appendChild(label);
    li.appendChild(checkbox);
    li.appendChild(alterar);
    li.appendChild(remover);

    select.addEventListener("change", filtrar());

    ul.appendChild(li);

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        label.setAttribute("class", "concluido");
      }
      if (this.checked) {
        concluidos.push(checkbox);
      } else {
        removerConcluido(input);
      }
    });

    //Qunado eu clico duas vezes, ele substituí, 
    //falta  fazer isso da primeira vez
    alterar.addEventListener("click", () => {
      const input = document.getElementById("input");
      const texto = label.innerHTML;
      
      input.focus();
      
      //Percorre o array de tarefas
      tarefas.forEach((t) => {
        //Coloca o valor do input igual a variável texto
        input.value = texto;
        t = input.value;
        //Filtra o array tarefas para mostar tudo o que
        //não for t
        tarefas = tarefas.filter((e) => e !== t);
      });

      atualizaLista();
    });
  });

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

//Remover a tarefa do array concluidos
const removerConcluido = (tarefa) => {
  const index = concluidos.indexOf(tarefa);
  alert(index);
  if (index != -1) {
    concluidos.splice(index, 1);
    alert("Tarefa removida. Array(" + concluidos + ")");
  }
  atualizaLista();
};

//Função para filtar
const filtrar = (tarefa, l) => {
  const select = document.getElementById("filtros");

  switch (select.value) {
    case "concluidos":
      alert("Concluidos");
      //  tarefas.filter((t) => alert(t.tarefas.includes.class('concluidos')))
      // removerTarefa(l)
      // t = tarefas.filter((t) => t == tarefa)
      break;
    case "nao-concluidos":
      alert("Não concluidos");
      break;
  }
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

const form = document.getElementById("form");

form.addEventListener("submit", adicionarTarefa);
