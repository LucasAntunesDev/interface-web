let tarefas = [];
let concluidos = [];
var i = 1;

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

 i++;
};

const atualizaLista = () => {
 const ul = document.getElementById("tarefas");
 ul.innerHTML = "";

 tarefas.forEach((tarefa) => {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const remover = document.createElement("button");
  remover.setAttribute("id", "remover");
  remover.innerHTML = `<i class="fa-solid fa-trash">Remover tarefa</i>`;
  remover.addEventListener("click", () => removerTarefa(tarefa));

  const p = document.createElement('p');
  p.innerHTML = tarefa

  

  const alterar = document.createElement("i");
  alterar.setAttribute('class','fa-solid fa-pen')
  alterar.addEventListener('click', ()=>{
    let editavel = true;
    editavel === true ? 
    p.setAttribute('contenteditable', 'true'):
    p.setAttribute('contenteditable', 'false');
    
    editavel == false;

    alterar.addEventListener('focus', () => editavel === false )
    
    // p.setAttribute('contenteditable', 'true'):
    // p.setAttribute('contenteditable', 'false');
    // p.setAttribute('contenteditable', 'false')
  })

  // const elemento = `<p class="texto" id="${i}" "contenteditable="true">` + tarefa + "</p><br>";
  // const elemento = `<p class="texto" id="${i}" "contenteditable="true">` + tarefa + "</p><br>";
  checkbox.addEventListener("focus", () => concluirTarefa(tarefa));
  // li.innerHTML = p;
  li.appendChild(p);
  li.appendChild(alterar);
  li.appendChild(remover);
  li.appendChild(checkbox);
  ul.appendChild(li);
 });
};

const removerTarefa = (tarefa) => {
 tarefas = tarefas.filter((t) => t !== tarefa);
 atualizaLista();
};

const concluirTarefa = (t) => {
 concluidos.push(t);
 console.log(concluidos);

 console.log(tarefas[tarefa]);
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
