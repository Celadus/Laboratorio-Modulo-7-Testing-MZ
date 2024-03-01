// motor.spec.ts
import {vi} from "vitest";
import { EstadoPartida, partida } from "./model";
import {
    obtenerNumeroDeCarta,
    damePuntuacion,
    obtenerEstadoPartida,
} from "./motor";

describe("obtenerNumeroDeCarta", () => {
    it ("deberia devolver 5 cuando el numero aleatorio generado es un 5", () => {
        //Assert
        const numeroAleatorio = 5 ;
        const valorEsperado = 5 ;
        //Act
        const resultado = obtenerNumeroDeCarta(numeroAleatorio) ;
        //Arrange
        expect(resultado).toBe(valorEsperado) ;
    });

    it("deberia devolver 11 cuando el numero aleatorio generado es un 9", () => {
        // Assert
        const numeroAleatorio = 9 ;
        const valorEsperado = 11 ;
        // Act
        const resultado = obtenerNumeroDeCarta(numeroAleatorio) ;
        // Arrange
        expect(resultado).toBe(valorEsperado) ;
    }) ;
})

describe("damePunctuacion", () => {
    it ("deberia devolver 5 cuando la carta es 5", () => {
        //Assert
        const carta = 5 ;
        const valorEsperado = 5 ;
        //Act
        const resultado = damePuntuacion(carta) ;
        // Arrange
        expect(resultado).toBe(valorEsperado);
    });

    it ("deberia devolver 0.5 cuando la carta es 11", () => {
        //Assert
        const carta = 11 ;
        const valorEsperado = 0.5 ;
        //Act
        const resultado = damePuntuacion(carta) ;
        // Arrange
        expect(resultado).toBe(valorEsperado);
    });
})

describe("obtenerEstadoPartida", () => {
    it ("deberia devolver POR_DEBAJO_MAXIMO cuando puntosTotales  menor de 7.5", () => {
        //Arrange
        const estadoEsperado: EstadoPartida = "POR_DEBAJO_MAXIMO";
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(4);
        //Act
        const resultado = obtenerEstadoPartida();
        //Arrange
        expect(resultado).toBe(estadoEsperado);
    });

    it ("deberia devolver TE_HAS_PASADO cuando puntosTotales es mayor de 7.5", () => {
        //Arrange
        const estadoEsperado: EstadoPartida = "TE_HAS_PASADO";
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(8);
        //Act
        const resultado = obtenerEstadoPartida();
        //Arrange
        expect(resultado).toBe(estadoEsperado);
    });

    it ("deberia devolver JUSTO_MAXIMA cuando puntosTotales es igual de 7.5", () => {
        //Arrange
        const estadoEsperado: EstadoPartida = "JUSTO_MAXIMA";
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(7.5);
        //Act
        const resultado = obtenerEstadoPartida();
        //Arrange
        expect(resultado).toBe(estadoEsperado);
    });
})