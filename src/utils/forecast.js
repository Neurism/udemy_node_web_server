const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/114893bdb2678e680ea77686008933f4/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain. The pressure is currently ' + body.currently.pressure + '. The high and low for today are ' + body.daily.data[0].temperatureHigh + ', ' + body.daily.data[0].temperatureLow + '.');
        }
    })
}
//test
module.exports = forecast