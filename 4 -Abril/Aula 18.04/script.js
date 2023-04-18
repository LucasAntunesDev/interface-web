const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const div = document.getElementById('div');
const MIN = 4;
const MAX = 24;
let num = MIN;
div.innerHTML = MIN;

mais.addEventListener('click', () => {
    atualizar(num + 1);
});

menos.addEventListener('click', () => {
    atualizar(num - 1);
});

const atualizar = (x) => {
    if(x < MIN || x > MAX) return;
    num = x;
    
    menos.disabled = num == MAX
    menos.disabled = num == MIN

    const texto = document.getElementById('texto');
    texto.style.fontSize = `${num}rem`;

    div.innerHTML = `${num<10?'0': ''}${num}`
}

document.body.addEventListener('keydown', (event) =>{
    if(event.key === '-') atualizar(num-1);
    else if(event.key === '+') atualizar(num+1);
})

atualizar(MIN);
