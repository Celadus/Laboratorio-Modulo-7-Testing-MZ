// ui.ts

import {
  dameNumeroAleatorio,
  obtenerNumeroDeCarta,
  obtenerUrlCarta,
  damePuntuacion,
  sumaPuntuacion,
} from "./motor";
import { partida, setPartida } from "./model";

const btnPedir = document.getElementById("btn_pedir");
const btnNuevaPartida = document.getElementById("btn_nueva_partida");
const btnPlantarse = document.getElementById("btn_plantarse");
const btnHistorial = document.getElementById("btn_historial");

function mostrarCarta(carta: number) {
  const urlCarta = obtenerUrlCarta(carta);
  const elementoImg = document.getElementById("card-img");
  if (elementoImg && elementoImg instanceof HTMLImageElement) {
    elementoImg.src = urlCarta;
  }
}

function dameCarta(): void {
  const numeroAleatorio = dameNumeroAleatorio();
  const carta = obtenerNumeroDeCarta(numeroAleatorio);
  mostrarCarta(carta);
  const puntos = damePuntuacion(carta);
  const puntosSumados = sumaPuntuacion(puntos);
  setPartida(puntosSumados);
  finalDeLaMano();
}

function invocarBotones(
  valorHistorial: boolean,
  valorNuevaPartida: boolean,
  valorPedirCarta: boolean,
  valorPlantarse: boolean
) {
  deshabilitarBotonHistorial(valorHistorial);
  deshabilitarBotonNuevaPartida(valorNuevaPartida);
  deshabilitarBotonPedirCarta(valorPedirCarta);
  deshabilitarBotonPlantarse(valorPlantarse);
}

function revisarMano() {
  if (partida.puntosTotales === 7.5) {
    ganarPartida();
  }
  if (partida.puntosTotales > 7.5) {
    gameOver();
  }
}

function ganarPartida() {
  mostrarMensaje(`¡ Lo has clavado! ¡Enhorabuena ! ${partida.puntosTotales}`);
  invocarBotones(true, false, true, true);
}

function gameOver() {
  mostrarMensaje(`Game Over! ${partida.puntosTotales}`);
  invocarBotones(true, false, true, true);
}

function finalDeLaMano() {
  mostrarMensaje(`${partida.puntosTotales}`);
  revisarMano();
}

function plantarse() {
  mostrarResultadoMeèPlantado();
  invocarBotones(false, false, true, false);
}

function mostrarResultadoMeèPlantado(): void {
  if (partida.puntosTotales < 4) {
    mostrarMensaje(
      `¡ Has sido muy conservador! ¡Enhorabuena ! ${partida.puntosTotales}`
    );
  } else if (partida.puntosTotales >= 4 && partida.puntosTotales < 6) {
    mostrarMensaje(`Te ha entrado el canguelo eh? ${partida.puntosTotales}`);
  } else if (partida.puntosTotales >= 6 && partida.puntosTotales <= 7) {
    mostrarMensaje(`Casi casi... ${partida.puntosTotales}`);
  } else if (partida.puntosTotales === 7.5) {
    mostrarMensaje("¡Lo has clavado! ¡Enhorabuena!");
  }
}

export function historial() {
  const numeroAleatorio = dameNumeroAleatorio();
  const carta = obtenerNumeroDeCarta(numeroAleatorio);
  mostrarCarta(carta);
  const puntos = damePuntuacion(carta);
  const puntosSumados = sumaPuntuacion(puntos);
  console.log(puntosSumados);
  setPartida(puntosSumados);
  monstrarMensajeFuturo(partida.puntosTotales);
  invocarBotones(true, false, false, false);
}

export function nuevaPartida() {
  partida.puntosTotales = 0;
  mostrarMensaje("");
  mostrarCarta(0);
  invocarBotones(true, false, false, false);
}

function mostrarMensaje(mensaje: string) {
  const elementoPuntuacion = document.getElementById("score");
  if (
    elementoPuntuacion !== null &&
    elementoPuntuacion !== undefined &&
    elementoPuntuacion instanceof HTMLDivElement
  ) {
    elementoPuntuacion.innerText = mensaje;
  }
}

function monstrarMensajeFuturo(puntosTotales: number) {
  if (puntosTotales === 7.5) {
    mostrarMensaje(`Habrías ganado el juego ${puntosTotales}`);
  }
  if (puntosTotales < 7.5) {
    mostrarMensaje(
      `No habrías ganado pero estarías cerca de ganar ${puntosTotales}`
    );
  } else {
    mostrarMensaje(`Habrias perdido! ${puntosTotales}`);
  }
}

function deshabilitarBotonPedirCarta(estadeshabilitado: boolean) {
  const botonPedir = document.getElementById("btn_pedir");
  if (
    botonPedir !== null &&
    botonPedir !== undefined &&
    botonPedir instanceof HTMLButtonElement
  ) {
    botonPedir.disabled = estadeshabilitado;
  }
}

function deshabilitarBotonNuevaPartida(estadeshabilitado: boolean) {
  const botonNuevaPartida = document.getElementById("btn_nueva_partida");
  if (
    botonNuevaPartida !== null &&
    botonNuevaPartida !== undefined &&
    botonNuevaPartida instanceof HTMLButtonElement
  ) {
    botonNuevaPartida.disabled = estadeshabilitado;
  }
}

function deshabilitarBotonPlantarse(estadeshabilitado: boolean) {
  const botonPlantarse = document.getElementById("btn_plantarse");
  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonPlantarse.disabled = estadeshabilitado;
  }
}

function deshabilitarBotonHistorial(estadeshabilitado: boolean) {
  const botonHistorial = document.getElementById("btn_historial");
  if (
    botonHistorial !== null &&
    botonHistorial !== undefined &&
    botonHistorial instanceof HTMLButtonElement
  ) {
    botonHistorial.disabled = estadeshabilitado;
  }
}

if (
  btnPedir !== null &&
  btnPedir !== undefined &&
  btnPedir instanceof HTMLButtonElement
) {
  btnPedir.addEventListener("click", () => {
    dameCarta();
  });
}

if (
  btnNuevaPartida !== null &&
  btnNuevaPartida !== undefined &&
  btnNuevaPartida instanceof HTMLButtonElement
) {
  btnNuevaPartida.addEventListener("click", () => {
    nuevaPartida();
  });
}

if (
  btnPlantarse !== null &&
  btnPlantarse !== undefined &&
  btnPlantarse instanceof HTMLButtonElement
) {
  btnPlantarse.addEventListener("click", () => {
    plantarse();
  });
}

if (
  btnHistorial !== null &&
  btnHistorial !== undefined &&
  btnHistorial instanceof HTMLButtonElement
) {
  btnHistorial.addEventListener("click", () => {
    historial();
  });
}

if (
  btnNuevaPartida !== null &&
  btnNuevaPartida !== undefined &&
  btnNuevaPartida instanceof HTMLButtonElement
) {
  btnNuevaPartida.addEventListener("click", () => {
    nuevaPartida();
  });
}

if (
  btnPlantarse !== null &&
  btnPlantarse !== undefined &&
  btnPlantarse instanceof HTMLButtonElement
) {
  btnPlantarse.addEventListener("click", () => {
    plantarse();
  });
}

if (
  btnHistorial !== null &&
  btnHistorial !== undefined &&
  btnHistorial instanceof HTMLButtonElement
) {
  btnHistorial.addEventListener("click", () => {
    historial();
  });
}