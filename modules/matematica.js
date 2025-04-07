const PI = 3.14;

function sumar(x, y) {
    return x + y;
}

function restar(x, y) {
    return x - y;
}

const multiplicar = (a, b) => a * b;
const dividir = (a, b) => (b !== 0 ? a / b : "Error: División por cero");

const numerosTexto = ["dos", "cuatro", "ocho", "diez"];

export { PI, sumar, restar, multiplicar, dividir, numerosTexto };