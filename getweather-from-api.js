const yargs = require('yargs');
const request = require('request');
const getLatLng = require('./getLatLng');
const getTemp = require('./getTemp');

const argv = yargs
    .command('get', 'Get weather from address', {
        address: {
            describe: 'Address where you want to know weather.',
            demand: true,
            type: 'string',
            alias: 'a'
        }
    })
    .help()
    .argv ;

var addressEncoded = encodeURIComponent(argv.a);
const apiKey = 'AIzaSyB5h7TvGR60hL1Vm0eWuE43dsu3TNfixWU' ;
const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' ;
const urlAddress = url+addressEncoded+'&key='+apiKey ;

//console.log(urlAddress);
console.log(argv.a);
getLatLng.getLatLng(urlAddress).then((res) => {
    console.log(res);
    return getTemp.getTemp(res.lat, res.lng);
}).then((res) => {
    console.log('======================');
    console.log(res);
}).catch((errMessage) => {
    console.log(errMessage);
});


