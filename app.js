
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./Config/yargs');
require(`colors`);


console.clear();

// console.log('base:', argv.base);
// console.log('listar:', argv.listar);



crearArchivo(argv.b, argv.l, argv.h)
   .then(msg=> console.log(msg.rainbow))
    .catch(err => console.log(err));
