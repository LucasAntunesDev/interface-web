let tarefas = [];

const adicionarTarefa = (t) => {
  t.preventDefault();
  const tarefa = document.getElementById("tarefa");
  const texto = tarefa.value;
  const tarefaExiste = tarefas.some(
    (i) => i.toUpperCase() === texto.toUpperCase()
  );
  texto != "" && !tarefaExiste ? tarefas.push(texto) : "";
  atualizaLista();
  tarefa.innerHTML = "";
};

const atualizaLista = () => {
  const ul = document.getElementById("tarefas");
  ul.innerHTML = "";

  tarefas.forEach((tarefa) => {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    // checkbox.innerHTML = "Concluir tarefa";

    const remover = document.createElement("button");
    remover.setAttribute('id', 'remover');
    remover.innerHTML = "Remover tarefa";

    // const div = document.createElement = "div";

    remover.addEventListener("click", () => removerTarefa(tarefa));

    // tarefas.forEach(
    //   checkbox.addEventListener("click", () => concluirTarefa(tarefa))
    // );
    checkbox.addEventListener("focus", () => concluirTarefa(tarefa));
    li.innerHTML = '<p class="texto">' + tarefa + "</p><br>";
    li.appendChild(remover);
    li.appendChild(checkbox);
    ul.appendChild(li);
  });
};

const removerTarefa = (tarefa) => {
  tarefas = tarefas.filter((t) => t !== tarefa);
  atualizaLista();
};

const concluirTarefa = (tarefa) => {
  // let conclusao = false;

  // document.getElementById("tarefas").style.color = "white" ? 
  // conclusao = true : conclusao = true
  // conclusao == false ? conclusao = true : conclusao = false;
  // conclusao == true ? document.getElementById("tarefas").style.color = "green" :
  document.getElementById("tarefas").style.color = "#10b981"
};

const form = document.getElementById("form");

form.addEventListener("submit", adicionarTarefa);

// btn.addEventListener("click", (this) => {console.log('teste')});
// const teste = () =>{console.log('btn.value')}
// const btn = document.getElementById("btn");
