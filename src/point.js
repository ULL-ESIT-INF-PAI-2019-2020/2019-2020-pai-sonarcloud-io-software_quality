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
 * @description:  Contiene el desarrollo de la clase Point, que representa un punto. Un objeto de esta
                  clase tendrá como propiedades principales una coordenada 'x' y una coordenada 'y'.
                  Utilizaremos esta clase posteriormente en el desarrollo de la clase Line para 
                  especificar los dos puntos sobre los que se traza una línea en un Canvas.
                  
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

 /** Clase que representa un punto */
class Point {

  /**
   * @description Crea un objeto Point.
   * @param {number} coorX - Coordenada x del punto.
   * @param {number} coorY - Coordenada y del punto.
   */
  constructor(coorX, coorY) {
    this.coorX = coorX;
    this.coorY = coorY;
  }

  /**
   * @desc Obtiene la coordenada X del punto.
   * @return {number} Coordenada X del punto.
   */
  get xCoor() {
    return this.coorX;
  }

  /**
   * @desc Obtiene la coordenada Y del punto.
   * @return {number} Coordenada Y del punto.
   */
  get yCoor() {
    return this.coorY;
  }

  /**
   * @desc Establece la coordenada X del punto.
   * @param {number} coorX - Coordenada X del punto.
   */
  set xCoor(coorX) {
    this.coorX = coorX;
  }

  /**
   * @desc Establece la coordenada Y del punto.
   * @param {number} coorY - Coordenada Y del punto.
   */
  set yCoor(coorY) {
    this.coorY = coorY;
  }
}