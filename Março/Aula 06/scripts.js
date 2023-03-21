let itens = [];

const adicionarItem = (e) => {
  //Impede de executar a ação padrão
  //(no caso, enviar os dados para o servidor)
  e.preventDefault();
  //Recupera texto e input
  const input = document.getElementById("item");
  const texto = input.value;
  const itemExiste = itens.some((i) => i.toUpperCase() === texto.toUpperCase());
  //Não deixa adicionar se o input estiver vazio ou o item for repetido
  texto != "" && !itemExiste ? itens.push(texto) : "";
  //Atualiza a lista
  atualizaLista();
  //Limpa o input
  input.value = "";
};

const atualizaLista = () => {
  const ul = document.getElementById("lista");
  ul.innerHTML = "";

  itens.forEach((item) => {
    const li = document.createElement("li");
    li.addEventListener("click", () => removerItem(item));
    li.innerHTML = item;
    ul.appendChild(li);
  });
};

const removerItem = (item) => {
  itens = itens.filter((i) => i !== item);
  atualizaLista();
};

const form = document.getElementById("form");
/*Função que é executada quando se clica no botão*/
form.addEventListener("submit", adicionarItem);
//Primeiro parametro = evento, segundo = função
