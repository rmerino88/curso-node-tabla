const fs = require('fs');
const colors = require('colors');

const crearArchivo = (base = 5, listar, hasta) => {

    // console.log(process.argv);
    
    let salida = '';
    salida = salida.concat(`=====================\n`);
    salida = salida.concat(`==== Tabla del ${base} ====\n`);
    salida = salida.concat(`=====================\n`);
    for (let index = 1; index <= hasta; index++) {
        salida = salida.concat(`${base} x ${index} = ${base * index}\n`);
    }

    // const data = new Uint8Array(Buffer.from(salida));
    // fs.writeFile(`./tablas/tabla${base}.txt`, data), (err) => {
    // fs.writeFile(`C:/Users/rmeri/OneDrive/Escritorio/tabla-${base}.txt`, Buffer.from(salida, 'utf-8'), (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // });

    // fs.writeFileSync(`C:/Users/rmeri/OneDrive/Escritorio/tabla-${base}.txt`, Buffer.from(salida, 'utf-8'));
    fs.writeFileSync(`./tablas/tabla-${base}.txt`, Buffer.from(salida, 'utf-8'));
    if(listar){
        console.log(colors.bgBrightGreen.brightRed.italic(`tabla-${base}.txt creado!`));
        console.log(salida.brightRed);
    }
    return(`tabla-${base}.txt`);
}

const crearArchivoPromise = async (base = 5, listar, hasta) => {
    return new Promise((resolve, reject) => {
        let salida = '';
        salida = salida.concat(`=====================\n`);
        salida = salida.concat(`==== Tabla del ${base} ====\n`);
        salida = salida.concat(`=====================\n`);
        let consola = salida;
        for (let index = 1; index <= hasta; index++) {
            salida = salida.concat(`${base} x ${index} = ${base * index}\n`);
            consola = consola.concat(`${base} ${ colors.green('x') } ${index} = ${base * index}\n`);
        }
        fs.writeFileSync(`./tablas/tabla-${base}.txt`, Buffer.from(salida, 'utf-8'));
        if(listar){
            console.log(`tabla-${base}.txt creado!`.rainbow);
            console.log(consola);
        }
        resolve(`tabla-${base}.txt`);
    });
}

const crearArchivoAsync = async (base = 5, listar, hasta) => {
    // try {
        
        let salida = '';
        salida = salida.concat(`=====================\n`);
        salida = salida.concat(`==== Tabla del ${base} ====\n`);
        salida = salida.concat(`=====================\n`);
        for (let index = 1; index <= hasta; index++) {
            salida = salida.concat(`${base} x ${index} = ${base * index}\n`);
        }
        fs.writeFileSync(`./tablas/tabla-${base}.txt`, Buffer.from(salida, 'utf-8'));
        if(listar){
            console.log(`tabla-${base}.txt creado!`.green);
            console.log(salida.green);
        }
        return (`tabla-${base}.txt`);
    // } catch (error) {
    //     return error;
    // }
}


module.exports = {
    // crearArchivo sin alias, se exporta con el mismo nombre
    crearArchivoSimple: crearArchivo,
    crearArchivoPromise,
    crearArchivoAsync
};