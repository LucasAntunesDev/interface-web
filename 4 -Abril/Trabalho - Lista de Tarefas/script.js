const input = $("#input");
const btn = $("#btn");
const todasRadio = $("#todas");
const completas = $("#concluidas");
const incompletas = $("#nao-completas");
const filtroNome = $("#filtrar-nome");

let tarefas = [];

const adicionarTarefa = () => {
  const textoTarefa = input.val();
  //Verifica se a tarefa já existe
  const tarefaExiste = tarefas.some(
    (i) => i.texto.toUpperCase() === textoTarefa.toUpperCase()
  );

  if (textoTarefa != "" && !tarefaExiste) {
    //Objeto que guarda o nome da tarefa e o estado de conclusão dela
    tarefas.push({ texto: textoTarefa, concluida: false });
  }

  input.val("");
  atualizaLista();
};

//Função para remover a tarefa
const removerTarefa = (index) => {
  //Pergunta para o usuário se ele deseja confirmar a exclusão e,
  //em caso postivio, exclui a tarefa
  const resposta = confirm("Você realmente quer excluir a tarefa?");
  if (resposta == true) {
    tarefas.splice(index, 1);
  }
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
  const ul = $("#ul");
  ul.empty();

  //Atualiza a lista de acordo com os filtros
  let tarefasFiltradas = tarefas.filter((tarefa) => {
    if (completas.is(":checked")) return tarefa.concluida;
    else if (incompletas.is(":checked")) return !tarefa.concluida;
    else return true;
  });

  //Filtra a tarefa pelo nome
  tarefasFiltradas = tarefasFiltradas.filter((tarefa) =>
    tarefa.texto.includes(filtroNome.val())
  );

  tarefasFiltradas.forEach((tarefa, index) => {
    const li = $("<li>");

    const label = $("<label>").addClass("flex-row gap-1");

    const checkbox = $("<input>").attr("type", "checkbox").prop("checked", tarefa.concluida);
    checkbox.on("change", () => mudarCompleto(index));

    label.append(checkbox);
    tarefa.concluida ? label.addClass("concluido") : "";

    const textoTarefa = $("<span>").addClass("texto").text(tarefa.texto);
    label.append(textoTarefa);

    const remover = $("<button>").addClass("fa-solid fa-trash remover");
    remover.on("click", () => removerTarefa(index));

    const alterar = $("<button>").addClass("fa-solid fa-pen editar");

    //Permite alterar a tarefa
    alterar.on("click", () => {
      const novoTexto = prompt("O que deseja alterar?", tarefa.texto);

      atualizaTarefa(index, novoTexto);

      atualizaLista();
    });

    const btnsDiv = $("<div>").addClass("flex-row gap-1");

    btnsDiv.append(alterar);
    btnsDiv.append(remover);
    li.append(label);
    li.append(btnsDiv);
    ul.append(li);
  });
};

$("#btn").click(adicionarTarefa);

//Permite adicionar a tarefa também caso seja apertado o enter
$("#tarefa").keypress(function(event) {
  if (event.key === "Enter") $("#btn").click();
});

$("#filtro-nome").on("input", atualizaLista);

$("#todas, #completas, #incompletas").change(atualizaLista);

atualizaLista();