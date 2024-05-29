
function convertirTemperatura() {
    let input = prompt("Ingrese la temperatura en grados Celsius:");
    let celsius = parseFloat(input);

    // Verificar si la entrada es un número
    if (isNaN(celsius)) {
        console.error("Error: La entrada no es un número.");
        convertirTemperatura(); // Volver a solicitar los datos
        return;
    }

    let fahrenheit = celsius * 9 / 5 + 32;
    let kelvin = celsius + 273.15;

    console.log(prompt("Grados Fahrenheit:", fahrenheit.toFixed(2)));
    console.log(prompt("Grados Kelvin:", kelvin.toFixed(2)));
}

