const argvApp = require('yargs').option('b', {
    alias: 'base',
    // demandOption: false,
    // default: 5,
    describe: 'Número sobre el que generaremos las tablas.',
    type: 'number'
})
.option('l', {
    alias: 'listar',
    demandOption: false,
    default: false,
    describe: 'Opción que indica si deseamos mostrar el resultado en pantalla.',
    type: 'boolean'
})
.option('h', {
    alias: 'hasta',
    demandOption: false,
    default: 10,
    describe: 'Número hasta el que deseamos rrealizar el cálculo.',
    type: 'number'
})
.demandOption(['base'], '\nMensaje de parámetro de entrada requerido.\nSi le ponemos demandOption: false o default, no aplica.')
.check((argv, options) => {
    console.log('options', options);
    if (isNaN(argv.b)) {
        throw new Error('Elemento base no numérico.');
    }
    if (isNaN(argv.h) || argv.h<1) {
        throw new Error('Elemento hasta no válido.');
    }
    return true;
})
.argv;

// module.exports = {
//     argvApp: argv
// };
module.exports = argvApp;