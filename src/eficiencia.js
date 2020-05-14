/** 
 * Universidad de La Laguna
 * Facultad: Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Asignatura: Programación de Aplicaciones Interactivas
 * Curso: 3º
 * Trabajo de Software Quality. 
 * @author David Hernández Suárez
 * Correo: alu0101048239@ull.edu.es
 * @since 13/05/2020
 * @description:  Contiene la implementación de un programa de ejemplo en el que se presentan errores en cuanto
                  a la eficiencia de la aplicación.

 * Referencias:   Repositorio con el código:
                  https://github.com/ULL-ESIT-INF-PAI-2019-2020/2019-2020-pai-sonarcloud-io-software_quality
                  
 *  Historial de revisiones:
                  13/03/2020 - Creación del código (primera versión)
                  18/03/2020 - Versión para evaluación
                  25/03/2020 - Versión para presentación
*/

// Algoritmo ineficiente
let start = new Date().getTime();
let operation = 0;
for (let index = 0; index < 1000000000; index ++) {
  if (index % 2 === 0) {
    operation += index;
  }
}
let end = new Date().getTime();
console.log('Tiempo de ejecución: ' + (end - start) / 1000 + " segundos");

// Algoritmo eficiente
/*let start = new Date().getTime();
let operation = 0;
for (let index = 0; index < 1000000000; index += 2) {
  operation += index;
}
let end = new Date().getTime();
console.log('Tiempo de ejecución: ' + (end - start) / 1000 + " segundos");*/