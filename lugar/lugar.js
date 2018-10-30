const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    const GoogleKey = 'AIzaSyAbPC1F9pWeD70Ny8PHcjguPffSLhT-YF8';
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=${GoogleKey}`);
    //console.log(JSON.stringify(resp.data.results[0].formatted_address, undefined, 2));
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coors = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coors.lat,
        lng: coors.lng
    };
}

module.exports = {
    getLugarLatLng
}