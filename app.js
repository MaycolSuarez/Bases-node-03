const argv = require("./config/yargs").argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require("./multiplicar");

//console.log(process.argv);


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then((result) => {
                console.log(`archivo creado: ${result}`);
            }).catch((err) => {
                console.error(err);
            });
        break;

    default:
        console.log('comando no reconocido');
        break;
}

// console.log(argv); 

// console.log(argv.base);