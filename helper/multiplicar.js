const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (j = 5, listar = true, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
      salida += `${j} x ${i} = ${j * i}\n`; // sin colores, para guardar
      consola += `${j} ${'x'.green} ${i} ${'='.green} ${j * i}\n`; // con colores, para consola
    }

    if (listar) {
      console.log('===================='.green);
      console.log('   Tabla del: ', colors.blue(j));
      console.log('===================='.green);
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-del-${j}.txt`, salida);
    return `Tabla del ${j}`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo
};




/*const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = async (j = 5, listar = true) => {
    try {
        let salida = '';
        for (i = 1; i <= 10; i++) {
            salida += `${j} x ${i} = ${j * i}\n`;
        }

        if (listar) {
            console.log('=============');
            console.log('  Tabla del:', j);
            console.log('=============');
            console.log(salida);
        }

        fs.writeFileSync(`tabla-del-${j}.txt`, salida);
        return `Tabla del ${j}`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};


*/






/*
const fs = require('fs');

const crearArchivo = async (j = 5, listar = true) => {
    try {
        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${j} x ${i} = ${j * i}\n`;
        }

        if (listar) {
            console.log('=============');
            console.log('  Tabla del:', j);
            console.log('=============');
            console.log(salida);
        }

        fs.writeFileSync(`tabla-del-${j}.txt`, salida);
        return `Tabla del ${j}`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};
*/
/*
const fs = require('fs');
const crearArchivo = async (j = 5) => {
    try {
        console.log('=============');
        console.log('  Tabla del:', j);
        console.log('=============');

        let salida = '';
        for (let i = 1; i <= 10; i++) {
            salida += `${j} x ${i} = ${j * i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-del-${j}.txt`, salida);
        return `Tabla del ${j}`;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
};

*/