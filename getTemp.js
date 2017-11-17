const request = require('request');

var getTemp = (lat, lng) => {
    const url = `https://api.darksky.net/forecast/68c2aaa3f92c5d3ef0efa18be8c2541f/${lat},${lng}` ;
    return new Promise((resolve, reject) => {
        request.get({
            url: url,
            json: true
        }, (err, res, data) => {
            if(err){
                reject('Error:',err);
            }else if(res.statusCode !== 200){
                reject('Status:', res.statusCode);
            }else if(res.statusCode === 200){
                resolve({
                    temp: data.currently.temperature,
                    apparentTemp: data.currently.apparentTemperature
                });
            }
        }) 
    });
}

exports.getTemp = getTemp ;