// modello.ts

const puntosTotales: number = 0;

interface Partida {
  puntosTotales: number;
}

export let partida: Partida = { puntosTotales };

export const setPartida = (nuevosPuntos: number) => {
  partida.puntosTotales = nuevosPuntos;
};