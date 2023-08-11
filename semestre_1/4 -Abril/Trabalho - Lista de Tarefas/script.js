const input = document.getElementById("input");
const btn = document.getElementById("btn");
const todasRadio = document.getElementById("todas");
const completas = document.getElementById("concluidas");
const incompletas = document.getElementById("nao-completas");
const filtroNome = document.getElementById("filtrar-nome");

let tarefas = [];

const adicionarTarefa = () => {
    const textoTarefa = input.value;

    const tarefaExiste = tarefas.some(
        (i) => i.texto.toUpperCase() === textoTarefa.toUpperCase()
    );

    if (textoTarefa != "" && !tarefaExiste) {
        tarefas.push({ texto: textoTarefa, concluida: false });
        localStorage.setItem('tarefa', JSON.stringify(tarefas));
    }

    input.value = "";
    atualizaLista();
    console.log(JSON.parse(localStorage.getItem('tarefa')))
};

//Função para remover a tarefa
const removerTarefa = (index) => {

    const resposta = confirm("Você realmente quer excluir a tarefa?");
    if (resposta == true) {
        tarefas.splice(index, 1);
    }
    atualizaLista();
};

const atualizaTarefa = (index, texto) => {
    tarefas[index].texto = texto;
    atualizaLista();
};

const mudarCompleto = (index) => {
    tarefas[index].concluida = !tarefas[index].concluida;
    atualizaLista();
};

const atualizaLista = () => {
    const ul = document.getElementById("ul");
    ul.innerHTML = "";


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


        alterar.addEventListener("click", () => {
            const novoTexto = prompt("O que deseja alterar?", tarefa.texto);

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
    if (event.key === "Enter") document.getElementById("btn").click();
});

filtroNome.addEventListener("input", atualizaLista);

todasRadio.addEventListener("change", atualizaLista);

completas.addEventListener("change", atualizaLista);

incompletas.addEventListener("change", atualizaLista);

atualizaLista();