
const { crearArchivoSimple } = require('./helpers/multiplicar');
const { crearArchivoPromise } = require('./helpers/multiplicar');
const { crearArchivoAsync } = require('./helpers/multiplicar');

const argvApp = require('./config/yargs')

/**
 * Para obetener información del proceso ejecutado: process
 */
// console.log(process.argv);
/**
 * Yargs crea un objeto con la información del proceso y de la llamada de este.
 * Podemos configurar el tipo de los parámetros de entrada.
 * Ofrece información como la version de la aplicación o help.
 * http://yargs.js.org/
 */
// console.log(argvApp);

// Todos los parámetros enviados por línea de comandos se recogen como string
// node app.js --base=9
// [, , arg3 ] = process.argv;
// [ , base = 5 ] = arg3.split('=');
// base = parseInt(base); or base = Number(base);

const base = argvApp.base;
const listar = argvApp.listar;
const hasta = argvApp.hasta;
console.log(base, listar, hasta);

console.log(crearArchivoSimple(base, listar, hasta));

crearArchivoPromise(base + 1, listar, hasta)
    .then(console.log)
    .catch(console.log);

crearArchivoAsync(base + 2, listar, hasta)
    .then(console.log)
    .catch(console.log);