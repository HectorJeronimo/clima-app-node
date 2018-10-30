const axios = require('axios');


const getTemp = async(lat, lng) => {
    const OPENWEATHERMAP_API_KEY = '335b99b0120b30483ca4676e3b940a0e';
    const UNITS = "metric";

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=${UNITS}&appid=${OPENWEATHERMAP_API_KEY}`);

    //console.log(resp);
    //console.log(JSON.stringify(resp, undefined, 2));
    return resp.data.main.temp;
}


module.exports = {
    getTemp
}