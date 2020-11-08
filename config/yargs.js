const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime por consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo .txt con la tabla de multiplicar deseada-hasta ', opts)
    // .command('crear', 'Crea un archivo .txt con la tabla de multiplicar deseada-hasta ', {
    //     base: {
    //         demand: true,
    //         alias: 'b'
    //     },
    //     limite: {
    //         alias: 'l',
    //         default: 10
    //     }
    // })
    .help()
    .argv;

module.exports = {
    argv
}