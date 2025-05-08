const { crearArchivo } = require('./helper/multiplicar');
const colors = require('colors');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
  .catch(err => console.log(err));

/*
const { option } = require('yargs');
const { crearArchivo } = require('./helper/multiplicar');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .check((argv, options ) => {
                    if (isNaN(argv.b)) {
                        throw 'La base debe ser un Numero';
                    }
                    return true;
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false
                })
                .argv;

console.clear();
console.log(argv);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err));
*/
/*
const {crearArchivo} = require('./helper/multiplicar');
const argv = require('yargs').argv;
console.clear();
console.log(process.argv);
console.log(argv);
console.log('j de yargs:', argv.j);

*/




/*
const { crearArchivo } = require('./helper/multiplicar');
console.clear();

// Desestructuramos process.argv para obtener el tercer argumento
const [ , ,arg3 = 'j=5'] = process.argv; // Si no se pasa ningún argumento, usará 'j=5' por defecto

// Separamos 'j=5' en 'j' y '5' usando el carácter '=' como delimitador
const[ , j ] = arg3.split('=');

console.log(j);  // Muestra el valor de j (en este caso 20 si lo pasas como argumento)

crearArchivo(j)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log('Error:', err));
*/