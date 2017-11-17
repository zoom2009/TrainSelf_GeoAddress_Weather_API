const request = require('request');

var getLatLng = (url) => {
    return new Promise((resolve, reject) => {
       request.get({
            url: url,
            json: true,
          }, (err, res, data) => {
            if (err) {
              reject('Error:', err);
            } else if (res.statusCode !== 200) {
              reject('Status:', res.statusCode);
            } else if (data.status === 'ZERO_RESULTS'){
                reject('Not found data for this address.');
            }else if(data.status === 'OK'){
                resolve({
                    address: data.results[0].formatted_address,
                    lat: data.results[0].geometry.location.lat,
                    lng: data.results[0].geometry.location.lng
                });
            }
        });  
    });
}

exports.getLatLng = getLatLng ;
