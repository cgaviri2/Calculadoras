
let operacion = '';
let resultado = '';

function agregarNumero(numero) {
    operacion += numero;    
    document.getElementById('pantalla').value = operacion;
}

function agregarOperador(operador) {
    operacion += operador;
    document.getElementById('pantalla').value = operacion;
}

function calcularResultados() {
    resultado = eval(operacion);
    document.getElementById('pantalla').value = resultado;
    operacion = '';
}
///// calculadora de distancia 
function calcularDistancia() {
	const x1 = document.getElementById('x1').value;
	const y1 = document.getElementById('y1').value;
	
	
	const distancia = Math.sqrt(Math.pow(x1 - y1, 2) );
	document.getElementById('distancia').innerText = distancia;
}

function evaluarPolinomio(polinomio, x) {
    return eval(polinomio.replace(/x/g, `(${x})`));
}

function metodoBiseccion(polinomio, a, b, tolerancia) {
    let c;
    while ((b - a) >= tolerancia) {
        c = (a + b) / 2;
        if (evaluarPolinomio(polinomio, c) === 0.0) {
            break;
        } else if (evaluarPolinomio(polinomio, c) * evaluarPolinomio(polinomio, a) < 0) {
            b = c;
        } else {
            a = c;
        }
    }
    return c;
}
///// calcular por bisepcion 
function evaluarPolinomio(polinomio, x) {
    return eval(polinomio.replace(/x/g, `(${x})`));
}

function metodoBiseccion(polinomio, a, b, tolerancia) {
    let c;
    while ((b - a) >= tolerancia) {
        c = (a + b) / 2;
        if (evaluarPolinomio(polinomio, c) === 0.0) {
            break;
        } else if (evaluarPolinomio(polinomio, c) * evaluarPolinomio(polinomio, a) < 0) {
            b = c;
        } else {
            a = c;
        }
    }
    return c;
}

function calcular() {
    const polinomio = document.getElementById('polinomio').value;
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const tolerancia = parseFloat(document.getElementById('tolerancia').value);
    const resultado = metodoBiseccion(polinomio, a, b, tolerancia);
    document.getElementById('resultado').innerText = `La raíz aproximada es: ${resultado}`;
}