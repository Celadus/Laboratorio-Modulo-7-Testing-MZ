// modello.ts
export type EstadoPartida =
  | "POR_DEBAJO_MAXIMO"
  | "JUSTO_MAXIMA"
  | "TE_HAS_PASADO";

const puntosTotales: number = 0;

interface Partida {
  puntosTotales: number;
  estado: EstadoPartida;
}

export let partida: Partida = { puntosTotales, estado:"POR_DEBAJO_MAXIMO" };

export const setPartida = (nuevosPuntos: number) => {
  partida.puntosTotales = nuevosPuntos;
};