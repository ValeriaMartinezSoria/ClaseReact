"use strict";
class Celda {
    valor;
    boton;

    constructor(valor) {
        this.valor = valor;
    }
}

const tablero = document.querySelector("#tablero");
const celdas = [];
const posicionBomba = 4;
let juegoTerminado = false;

function mostrarCelda(celda, posicion) {
    if (juegoTerminado) {
        return;
    }

    if (celda.valor === "bomba") {
        juegoTerminado = true;
        celda.boton.textContent = "💣";

        for (let fila = 0; fila < 3; fila++) {
            for (let columna = 0; columna < 3; columna++) {
                const indice = fila * 3 + columna;
                if (Math.abs(fila - 1) <= 1 && Math.abs(columna - 1) <= 1) {
                    celdas[indice].boton.textContent = indice === posicionBomba ? "💣" : "X";
                    celdas[indice].boton.disabled = true;
                }
            }
        }
        return;
    }

    celda.boton.textContent = "😆";
}

for (let fila = 0; fila < 3; fila++) {
    const filaHTML = document.createElement("tr");

    for (let columna = 0; columna < 3; columna++) {
        const posicion = fila * 3 + columna;
        const celda = new Celda(posicion === posicionBomba ? "bomba" : "feliz");
        celda.boton = document.createElement("button");
        celda.boton.addEventListener("click", () => mostrarCelda(celda, posicion));
        celdas.push(celda);

        const casillaHTML = document.createElement("td");
        casillaHTML.appendChild(celda.boton);
        filaHTML.appendChild(casillaHTML);
    }

    tablero.appendChild(filaHTML);
}
