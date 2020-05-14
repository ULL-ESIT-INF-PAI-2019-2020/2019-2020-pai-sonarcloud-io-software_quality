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
 * @description:  Contiene el desarrollo de la clase Line, que representa una línea dibujada en 
                  un Canvas. Contiene métodos para crear la línea entre dos coordenadas determinadas
                  por el usuario. Asimismo, pinta la línea con el color especificado. Para especificar 
                  los dos puntos sobre los que se traza la recta, se utilizan dos objetos de la clase
                  Point.
                  
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

/** Clase que representa una línea */
class Line {

  /**
   * @desc Crea un objeto Line.
   * @constructor
   * @param {Point} startPoint - Punto de partida de la recta.
   */
  constructor(startPoint) {
    this.coorX = startPoint.xCoor;
    this.coorY = startPoint.yCoor;
  }

  /**
   * @desc Obtiene la coordenada X del punto inicial de la recta.
   * @return {number} Coordenada X del punto.
   */
  get xCoor() {
    return this.coorX;
  }

  /**
   * @desc Obtiene la coordenada Y del punto inicial de la recta.
   * @return {number} Coordenada Y del punto.
   */
  get yCoor() {
    return this.coorY;
  }

  /**
   * @desc Establece la coordenada X del punto inicial de la recta.
   * @param {number} coorX - Coordenada X del punto.
   */
  set xCoor(coorX) {
    this.coorX = coorX;
  }

  /**
   * @desc Establece la coordenada Y del punto inicial de la recta.
   * @param {number} coorY - Coordenada Y del punto.
   */
  set yCoor(coorY) {
    this.coorY = coorY;
  }
  
  /* istanbul ignore next */
  /**
   * @desc Crea una línea con los parámetros dados.
   * @param {Point} destinyPoint - Punto de destino de la línea.
   * @param {object} CONTEXT - Context del Canvas.
   */
  createLine(destinyPoint, CONTEXT) {
    CONTEXT.moveTo(this.coorX, this.coorY);
    CONTEXT.lineTo(destinyPoint.xCoor, destinyPoint.yCoor);
  }

  /* istanbul ignore next */
  /**
   * @desc Pinta el contorno de la línea de un color.
   * @param {string} color - Color de la línea.
   * @param {object} CONTEXT - Context del Canvas.
   */
  stroke(color, CONTEXT) {
    //CONTEXT.strokeStyle = color;
    CONTEXT.fillStyle = "rgba(200, 200, 200, 0.5)";

    CONTEXT.stroke();
  }

  /**
   * @desc Crea una línea discontínua.
   * @param {Point} destinyPoint - Punto de destino de la línea.
   * @param {object} CONTEXT - Context del Canvas.
   */
  createDiscontinuous(destinyPoint, CONTEXT, firstDash, secondDash) {
    CONTEXT.setLineDash([firstDash, secondDash]);
    CONTEXT.moveTo(this.coorX, this.coorY);
    CONTEXT.lineTo(destinyPoint.xCoor, destinyPoint.yCoor);
  }
}