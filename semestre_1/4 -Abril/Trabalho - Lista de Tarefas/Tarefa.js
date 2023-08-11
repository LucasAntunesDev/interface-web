export class Tarefa {
    constructor(texto, conclusao, array){
        this.texto = texto
        this.conclusao = conclusao
        this.array = array
    }

    salvarNoArray(array){
        array.push({ texto: textoTarefa, conclusao: false })
    }

    salvarNoLocalStorage(array, chave){
        localStorage.setItem(chave, JSON.stringify(array))
    }
}