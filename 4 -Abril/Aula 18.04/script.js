const mais = document.getElementById('mais');
const menos = document.getElementById('menos');
const div = document.getElementById('div');
let num = 0;

const aumentar = () => {
    num += 1;
    atualizar();
}

const diminuir = () => {
    num -= 1;
    atualizar();
}

const atualizar = () => {
    div.innerHTML = num;
}

mais.addEventListener('click', aumentar);
menos.addEventListener('click', diminuir);