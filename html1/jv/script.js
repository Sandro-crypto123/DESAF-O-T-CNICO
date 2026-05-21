// EJERCICIO 1: SIMULADOR DE LEY DE ENFRIAMIENTO
function calcularCalor() {
    // Jalamos los valores de la pantalla y los pasamos a números con decimales
    let t0 = parseFloat(document.getElementById('t0').value);
    let ts = parseFloat(document.getElementById('ts').value);
    let k = parseFloat(document.getElementById('k').value);
    let tiempo = parseFloat(document.getElementById('tiempo').value);

    // Armamos la fórmula paso a paso 
    let exponente = -k * tiempo;
    
    // Math.exp calcula el número 'e' elevado al exponente
    let resultadoFinal = ts + (t0 - ts) * Math.exp(exponente);
    
    // El documento pide redondear al entero más cercano, así que usamos Math.round
    let resultadoRedondeado = Math.round(resultadoFinal);

    // Mostramos el resultado final agregándole el símbolo de grados Fahrenheit
    document.getElementById('resultadoCalor').innerText = resultadoRedondeado + " °F";
}

// EJERCICIO 2: CÁLCULO DE COMBINACIONES
// Nuestra función propia para sacar el factorial con un bucle normal (for)
function calcularFactorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado = resultado * i;
    }
    return resultado; // Devolvemos el total acumulado
}

// Función para aplicar la fórmula matemática: n! / (r! * (n-r)!)
function calcularC(n, r) {
    let factorialN = calcularFactorial(n);
    let factorialR = calcularFactorial(r);
    let factorialNR = calcularFactorial(n - r);
    
    // Hacemos la división final de la fórmula de combinaciones
    return factorialN / (factorialR * factorialNR);
}

// Función principal que se activa al darle clic al botón de combinaciones
function calcularCombinaciones() {
    // Obtenemos los datos de ambos grupos (como son enteros usamos parseInt)
    let n1 = parseInt(document.getElementById('n1').value);
    let r1 = parseInt(document.getElementById('r1').value);
    let n2 = parseInt(document.getElementById('n2').value);
    let r2 = parseInt(document.getElementById('r2').value);

    // Validación clave: r jamas puede ser más grande que n (error matemático)
    if (r1 > n1 || r2 > n2) {
        alert("Error: El número de objetos elegidos (r) no puede ser mayor que el total disponible (n).");
        return; // Cortamos la ejecución aquí si metieron mal los datos
    }

    // Sacamos las combinaciones de cada grupo por separado usando la función de arriba
    let combinacionesGrupo1 = calcularC(n1, r1);
    let combinacionesGrupo2 = calcularC(n2, r2);

    // El total del sorteo es multiplicando las posibilidades de ambos grupos independientes
    let totalCombinaciones = combinacionesGrupo1 * combinacionesGrupo2;

    // Ponemos el resultado en la página con puntos de mil para que se lea bien
    document.getElementById('resultadoCombinaciones').innerText = totalCombinaciones.toLocaleString();
}