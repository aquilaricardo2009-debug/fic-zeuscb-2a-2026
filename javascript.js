function limpar() {
    document.getElementById('tela').value = '';
}

function calcula(resultado) {
    document.getElementById('tela').value += resultado;
}

function resultado() {

    try {
        let resultado = document.getElementById('tela').value;

        document.getElementById('tela').value = eval(resultado);

    } catch {
        document.getElementById('tela').value = 'Erro';
    }
}