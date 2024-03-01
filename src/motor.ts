// motore.ts
import { partida, EstadoPartida} from "./model";

export function dameNumeroAleatorio(): number {
  return Math.floor(Math.random() * 10) + 1;
}
export function obtenerNumeroDeCarta(numeroaleatorio: number): number {
  return numeroaleatorio > 7 ? numeroaleatorio + 2 : numeroaleatorio;
}
export function obtenerUrlCarta(carta: number): string {
  let imgUrl: string =
    "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas";
  switch (carta) {
    case 1:
      imgUrl += "/copas/1_as-copas.jpg";
      break;
    case 2:
      imgUrl += "/copas/2_dos-copas.jpg";
      break;
    case 3:
      imgUrl += "/copas/3_tres-copas.jpg";
      break;
    case 4:
      imgUrl += "/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      imgUrl += "/copas/5_cinco-copas.jpg";
      break;
    case 6:
      imgUrl += "/copas/6_seis-copas.jpg";
      break;
    case 7:
      imgUrl += "/copas/7_siete-copas.jpg";
      break;
    case 10:
      imgUrl += "/copas/10_sota-copas.jpg";
      break;
    case 11:
      imgUrl += "/copas/11_caballo-copas.jpg";
      break;
    case 12:
      imgUrl += "/copas/12_rey-copas.jpg";
      break;
    default:
      imgUrl += "/back.jpg";
      break;
  }
  return imgUrl;
}
export function damePuntuacion(carta: number) {
  return carta <= 7 ? carta : 0.5;
}
export function sumaPuntuacion(carta: number): number {
  return partida.puntosTotales += carta;
}

export function obtenerEstadoPartida(): EstadoPartida {
  if (partida.puntosTotales === 7.5){
    return "JUSTO_MAXIMA"
  };
  if (partida.puntosTotales > 7.5){
    return "TE_HAS_PASADO"
  };
  return "POR_DEBAJO_MAXIMO";
}