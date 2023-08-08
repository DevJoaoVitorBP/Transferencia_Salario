//Creating variables
const entradas = [2000, 250];
let i = 0;

//Creating function "gets"
function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

//Creating function print
function print(texto) {
    console.log(texto);
}

//Creating module exports
module.exports = { gets, print };