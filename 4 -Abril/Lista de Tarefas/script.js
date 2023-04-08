let tarefas = [];
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let concluidos = [];
const green = "#059669";

const adicionarTarefa = (t) => {
 t.preventDefault();
 const input = document.getElementById("input");
 const texto = input.value;
 const tarefaExiste = tarefas.some(
  (i) => i.toUpperCase() === texto.toUpperCase()
 );
 texto != "" && !tarefaExiste ? tarefas.push(texto) : "";
 tarefaExiste ? alert("Essa tarefa já existe!") : "";
 if (input.value == "") {
  input.style.borderColor = "crimson";
  alert("Você precisa digitar algo!");
 }
 input.value = "";
 atualizaLista();
};

const adicionarConcluidos = (c) => {
 //  const input = document.getElementById("input");
 //  const texto = input.value;
 //  texto != "" && !tarefaExiste ?
 concluidos.push(c);
};

const atualizaLista = () => {
 const ul = document.getElementById("tarefas");
 ul.innerHTML = "";

 tarefas.forEach((tarefa) => {
  const li = document.createElement("li");

  alert('tarefa')
  const texto = document.createElement("p");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

//   checkboxes.forEach(function (checkbox) {
   checkbox.addEventListener('change', function (this) {
    texto.style.textDecoration = this.checked ? "line-through" : "none";
    texto.style.color = this.checked ? green : "";

    //    checkboxes.forEach(function(checkbox) {
    // checkbox.addEventListener('change', function() {
    
    // if (this.checked) {
    //  concluidos.push(this);
    //  alert("item adicionado");
    // } else {
    //  const index = concluidos.indexOf(this);
    //  if (index !== -1) {
    //   concluidos.splice(index, 1);
    //   alert("removido");
    //  }
    // }
    // });
   });

   //    const concluidoExiste = tarefas.some(
   //     (t, texto) => t.toUpperCase() === texto
   //    );

      concluidoExiste ? tarefas.push(this) : "";
      concluidoExiste? alert("Esse concluido já existe!") : "";
  });

  const remover = document.createElement("button");
  remover.setAttribute("id", "remover");
  remover.innerHTML = `<i class='fa-solid fa-trash remover'></i>`;
  remover.addEventListener("click", () => removerTarefa(tarefa));

  texto.innerHTML = tarefa;
  texto.setAttribute("class", "tarefa");

  const alterar = document.createElement("i");
  alterar.setAttribute("class", "fa-solid fa-pen editar");

  //   alterar.addEventListener("change", function () {
  //    texto.style.textDecoration = this.checked ? "line-through" : "none";
  //    texto.style.color = this.checked ? green : "";
  //   });
  //   alterar.addEventListener("click", adicionarConcluidos());

  li.appendChild(texto);
  li.appendChild(checkbox);
  li.appendChild(alterar);
  li.appendChild(remover);
  ul.appendChild(li);
//  });
};

const removerTarefa = (tarefa) => {
 tarefas = tarefas.filter((t) => t !== tarefa);
 atualizaLista();
};

const concluirTarefa = (t, li) => {
 // t.style.color = green;
 li.class == "concluido" ? (li.class = "") : (li.class = "concluido");
 li.setAttribute("class", "concluido");
 //  concluidos.push(t);
};

console.log(concluidos);

const form = document.getElementById("form");

form.addEventListener("submit", adicionarTarefa);
