const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-one');
const messageTwo = document.querySelector('#message-two');
//test

const addressForecast = (location) => {fetch(`/weather?address=` + location).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = 'Error: ' + data.error;
            messageTwo.textContent = '';
        } else {
            messageOne.textContent = 'Location: ' + data.location;
            messageTwo.textContent = 'Forecast: ' + data.forecast;
        }
    })
})
}

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    messageOne.textContent = 'Loading...';
    messageTwo.textContent = '';
    addressForecast(search.value);
})
