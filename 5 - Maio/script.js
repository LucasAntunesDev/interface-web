criarTabuleiro = (max = 16) => {
  if (max % 2 == 1) {
    console.log("O número tem que ser par");
    return;
  }
  //Cria um array do tabuleiro
  const tab = [];

  let k = 0;
  while (k < max) {
    const n = Math.ceil(Math.random() * (max / 2));
    if (tab.filter((x) => x === n).length >= 2) continue;
    tab.push(n);
    k++;
  }
  return tab;
};

const jogadores = ["Jogador 1", "Jogador 2", "Jogador 3"];
const spans = []
//Qual é o jogador atual
let jogador = 0;
//Histórico de jogadas
let jogadas = [];

const divJ = document.getElementById('jogadores')
jogadores.forEach(j => {
    const span = document.getElementById('span')
    span.innerHTML = j
    divJ.appendChild(span)
    span.appendChild(div)
})

const nome = document.getElementById("nome");
nome.innerHTML = jogadores[jogador];

const tab = criarTabuleiro();
const div = document.getElementById("tabuleiro");

tab.forEach((n) => {
  const btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.addEventListener("click", () => {
    btn.innerHTML = n;
    jogadas.push(btn);

    if (jogadas.length === 2) {
      if (jogadas[0].innerHTML === jogadas[1].innerHTML) {
          jogadas = [];
          alert("Você acertou!");
      } else {
        alert("Você errou!");
        jogador = (jogador + 1) % jogadores.length;
        nome.innerHTML = jogadores[jogador];
        setTimeout(() => {
          jogadas.forEach((b) => (b.innerHTML = ""));
          jogadas = [];
        }, 1000);
      }

    }
  });

  div.appendChild(btn);
});
