/** 
 * Universidad de La Laguna
 * Facultad: Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 3º
 * Práctica 9. Random Walk. Programación Gráfica y Orientada a Objetos en JS.
 * @author David Hernández Suárez
 * Correo: alu0101048239@ull.edu.es
 * @since 17/04/2020
 * @description:  Contiene la implementación del programa random-walk, que muestra en un Canvas la 
                  trayectoria de un camino aleatorio. Hace uso de la clase Path para generar la 
                  cuadrícula e ir dibujando la trayectoria del camino. Cada línea de la trayectoria
                  tendrá el tamaño de la densidad de la cuadrícula. Se dibujará una nueva línea cada
                  0.350 segundos. Como el camino es aleatorio, las líneas podrán tomar direcciones ya
                  dibujadas. El algoritmo finaliza cuando se llegue a cualquier borde de la cuadrícula.
                  
 * Referencias:   Enunciado de la práctica:
                  https://github.com/fsande/PAI-P09-RandomWalk/blob/master/2019-2020_p09_RandomWalk.md
                  Repositorio con el código:
                  https://github.com/ULL-ESIT-INF-PAI-2019-2020/practica-9-random-walk-alu0101048239
                  Camino aleatorio:
                  https://en.wikipedia.org/wiki/Random_walk
                  Ejemplos de caminos aleatorios:
                  https://raw.githubusercontent.com/fsande/PAI-P09-RandomWalk/master/random-walk.png
                  Test Driven Development (TDD):
                  https://en.wikipedia.org/wiki/Test-driven_development
                  
                      
 *  Historial de revisiones:
                  17/04/2020 - Creación del código (primera versión)
                  21/04/2020 - Versión para evaluación
 */

'use strict';

/**
  * @desc Función principal que crea un objeto Path para dibujar una cuadrícula
  * y un camino aleatorio sobre ella. Pinta un segmento del camino cada 0.350
  * segundos.
  * @param {number} density - Densidad de la cuadrícula.
  */
function randomWalk() {
  const CANVAS = document.getElementById('canvas');
  const CONTEXT = CANVAS.getContext('2d');
  const SIZES = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 5];
  let density;
  /*do {
    density = prompt("Introduzca la densidad de la cuadrícula, entre 0 y 10", 0);
    if (density < 0 || density > 10) {
      alert("Error. Valor fuera del rango");
    }
  } while (density > 10 || density < 0);*/
  density = prompt("Introduzca la densidad de la cuadrícula, entre 0 y 10", 0);
  density = SIZES[density] - 1;
  let grid = new Grid(CANVAS.width, CANVAS.height, density);
  grid.createGrid(CONTEXT, CANVAS); 
  grid.stroke('black', CONTEXT);
}
randomWalk();