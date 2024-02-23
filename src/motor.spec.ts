// motor.spec.ts
import {
    obtenerNumeroDeCarta,
    damePuntuacion,
} from "./motor";

it("obtenerNumeroDeCarta suma +2 a númeroAleatorio si es mayor que 7, de lo contrario el valor de númeroAleatorio permanece sin cambios.", () => {
    //Arrange
    const numeroAleatorio = 8;
    const resultadoEsperado = 10;
    // Act: impostiamo numero aleatorio a 8
    const resultado = obtenerNumeroDeCarta(numeroAleatorio);
    // Act y Assert: chiamiamo il metodo da testare con diversi input e verifichiamo che restituisca la somma corretta per ogni input
    expect(resultado).toBe(resultadoEsperado);
});

it("damePunctuacion Comprueba si el valor de la carta es menor o igual a 7. Si esta condición es verdadera, la función devuelve el valor de la carta misma. De lo contrario, si la carta es mayor que 7, devuelve 0.5.", () => {
//Arrange
const carta = 8;
const resultadoEsperado = 0.5;
// Act: impostiamo il valore della carta a 8
const resultado = damePuntuacion(carta);
//Expect: Il valora della carta resta uguale se inferiore a 7, altrimenti vale 0.5 per le figure (numeri maggiori di 7)
expect(resultado).toBe(resultadoEsperado);
});