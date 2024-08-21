function cifradoCesar(texto, desplazamiento) {
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        if (char.match(/[a-z]/i)) {
            let code = texto.charCodeAt(i);
            if ((code >= 65) && (code <= 90))
                char = String.fromCharCode(((code - 65 + desplazamiento) % 26) + 65);
            else if ((code >= 97) && (code <= 122))
                char = String.fromCharCode(((code - 97 + desplazamiento) % 26) + 97);
        }
        resultado += char;
    }
    return resultado;
}

function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let shift = 3; // Desplazamiento fijo de 3, puedes ajustarlo según sea necesario
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = cifradoCesar(inputText.toLowerCase().replace(/[áéíóú]/g, match => ({'á':'a','é':'e','í':'i','ó':'o','ú':'u'})[match]), shift);
}

function decryptText() {
    let inputText = document.getElementById('outputText').value;
    let shift = 3; // Desplazamiento fijo de 3, puedes ajustarlo según sea necesario
    document.getElementById('inputText').value;
    document.getElementById('outputText').value = cifradoCesar(inputText, -shift);
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para móviles
    document.execCommand("copy");
    alert("Texto encriptado copiado: " + outputText.value);
    // document.getElementById('outputText').value = '';
    

}
