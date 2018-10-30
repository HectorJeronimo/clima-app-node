const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
        clima.getTemp(9.9280694, 84.0907246)
            .then(resp => console.log(resp))
            .catch(e => console.log(e));
    })
    .catch(e => console.log(e));*/

//Esta funcion resume la anterior comentada con el uso de async y await
let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getTemp(coors.lat, coors.lng);
        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    }

};


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));