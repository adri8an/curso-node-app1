
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    // default: '/etc/passwd',
                    describe: 'Es la base de la tabla multiplicar',
                    type: 'number'
                })
                .option('l', {
                    alias: 'listar',
                    demandOption: false,
                    default: 'false',
                    describe: 'Muestra la tabla en consola',
                    type: 'boolean'
                })
                .option('h', {
                    alias: 'hasta',
                    default: '10',
                    describe: 'Hasta que número llega la tabla.',
                    type: 'number'
                })
                
                .check((argv, options) => {
                    if( isNaN(argv.b)){
                        throw 'La base tiene que ser un número.'
                    }
                    if( isNaN(argv.h)){
                        throw 'El parámetro H tiene que ser un número.'
                    }
                    return true;
                  })
            .argv;


module.exports = argv;

