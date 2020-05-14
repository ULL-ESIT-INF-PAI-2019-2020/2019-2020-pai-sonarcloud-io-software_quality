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
 * @description:  Contiene el desarrollo de la clase Grid, que se utiliza para representar
                  una cuadrícula dentro del Canvas. A su vez, esta clase hará uso de la clase
                  Line para crear las líneas de la cuadrícula.
                  
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

/** Clase que representa una cuadrícula. Crea y dibuja una cuadrícula
 * en un Canvas mediante el dibujo de líneas horizontales y verticales.
 * Para la creación y el dibujo de las líneas se utiliza la clase Line.
 */
class Grid {
  /**
   * @desc Crea un objeto de tipo Grid.
   * @constructor
   * @param {number} width - Anchura de la cuadrícula.
   * @param {number} height - Altura de la cuadrícula.
   * @param {number} density - Densidad de la cuadrícula. Cuando menor sea 
   * este parámetro, mayor será la densidad de la cuadrícula (a mayor número
   * mayor distancia entre las líneas de la cuadrícula).
   */
  constructor(width = 1200, height = 500, density = 50) {
    this.width = width;
    this.height = height;
    this.density = density;   
  }

  /**
   * @desc Obtiene la anchura de la cuadrícula.
   * @return {number} Anchura de la cuadrícula.
   */
  get gridWidth() {
    return this.width;
  }

  /**
   * @desc Obtiene la altura de la cuadrícula.
   * @return {number} Altura de la cuadrícula.
   */
  get gridHeight() {
    return this.height;
  }

  /**
   * @desc Obtiene la densidad de la cuadrícula.
   * @return {number} Densidad de la cuadrícula.
   */
  get gridDensity() {
    return this.density;
  }

  /**
   * @desc Establece la anchura de la cuadrícula.
   * @param {number} width - Anchura de la cuadrícula.
   */
  set gridWidth(width) {
    this.width = width;
  }

  /**
   * @desc Establece la altura de la cuadrícula.
   * @param {number} height - Altura de la cuadrícula.
   */
  set gridHeight(height) {
    this.height = height;
  }

  /**
   * @desc Establece la densidad de la cuadrícula.
   * @param {number} density - Densidad de la cuadrícula.
   */
  set gridDensity(density) {
    this.density = density;
  }

  /* istanbul ignore next */
  /**
   * @desc Crea la cuadrícula con los parámetros dados.
   * @param {object} CONTEXT - Context del canvas.
   * @param {object} CANVAS - Canvas. 
   */
  createGrid(CONTEXT, CANVAS) {
    for (let width = 0; width <= this.width; width += this.density) {
      let startPoint = new Point(width, 0);
      let firstLine = new Line(startPoint);
      let destinyPoint = new Point(width, CANVAS.height);
      firstLine.createLine(destinyPoint, CONTEXT);
    }
    for (let height = 0; height <= this.height; height += this.density) {
      let startPoint = new Point(0, height);
      let secondLine = new Line(startPoint);
      let destinyPoint = new Point(CANVAS.width, height);
      secondLine.createLine(destinyPoint, CONTEXT);
    }
  }

  /* istanbul ignore next */
  /**
   * @desc Dibuja en el Canvas la cuadrícula creada.
   * @param {number} color - Color de las líneas de la cuadrícula.
   * @param {object} CONTEXT - Context del canvas.
   * @param {object} CANVAS - Canvas. 
   */
  stroke(color, CONTEXT) {
    CONTEXT.strokeStyle = color;
    CONTEXT.stroke();
  }
}