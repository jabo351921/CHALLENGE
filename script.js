const diccionario = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encriptar() {
    let texto = document.getElementById('inputText').value.toLowerCase();
    let resultado = '';
    for (let letra of texto) {
        resultado += diccionario[letra] || letra;
    }
    mostrarResultado(resultado);
}

function desencriptar() {
    let texto = document.getElementById('inputText').value.toLowerCase();
    for (let [key, value] of Object.entries(diccionario)) {
        texto = texto.replace(new RegExp(value, 'g'), key);
    }
    mostrarResultado(texto);
}

function mostrarResultado(texto) {
    document.getElementById('outputContent').style.display = 'none';
    document.getElementById('outputText').style.display = 'block';
    document.getElementById('outputText').value = texto;
    document.querySelector('.copy-button').style.display = 'block';
}

function copiarTexto() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}