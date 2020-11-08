//requiere
const fs = require('fs');
const colors = require('colors');


let crearArchivo = (base, limite) => {



    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`el valor introducido: ${base} no es un nmero`);
            return;
        }

        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += (`${ base } * ${ i} = ${ base * i } \n`);;
        }


        fs.writeFile(`tablas/tabla del ${base} al ${limite}`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla del ${base} al ${limite}`.magenta);
            }

        });
    });
}


let listarTabla = (base, limite = 10) => {

    console.log('==============='.red);
    console.log(`  tabla del ${base}  `.red);
    console.log('==============='.red);

    for (let i = 0; i <= limite; i++) {
        console.log(`${ base } * ${ i} = ${ base * i } `.green);
    }


}

module.exports = {
    crearArchivo,
    listarTabla
}