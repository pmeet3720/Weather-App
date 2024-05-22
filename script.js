const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f12de108c3mshadf61e42b4f7165p15c161jsn90eefa6cee76',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city;

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })

        .catch(err => console.error(err));
}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(city.value);
})
getWeather('Delhi');

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=New York', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        temp3.innerHTML = response.temp
        max_temp3.innerHTML = response.max_temp
        min_temp3.innerHTML = response.min_temp
        feels_like3.innerHTML = response.feels_like
        wind_speed3.innerHTML = response.wind_speed
        humidity3.innerHTML = response.humidity
        cloud_pct3.innerHTML = response.cloud_pct
        sunrise3.innerHTML = response.sunrise
        sunset3.innerHTML = response.sunset

    })

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Los Angeles', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        temp4.innerHTML = response.temp
        max_temp4.innerHTML = response.max_temp
        min_temp4.innerHTML = response.min_temp
        feels_like4.innerHTML = response.feels_like
        wind_speed4.innerHTML = response.wind_speed
        humidity4.innerHTML = response.humidity
        cloud_pct4.innerHTML = response.cloud_pct
        sunrise4.innerHTML = response.sunrise
        sunset4.innerHTML = response.sunset

    })

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        temp5.innerHTML = response.temp
        max_temp5.innerHTML = response.max_temp
        min_temp5.innerHTML = response.min_temp
        feels_like5.innerHTML = response.feels_like
        wind_speed5.innerHTML = response.wind_speed
        humidity5.innerHTML = response.humidity
        cloud_pct5.innerHTML = response.cloud_pct
        sunrise5.innerHTML = response.sunrise
        sunset5.innerHTML = response.sunset

    })

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Montreal', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)

        temp6.innerHTML = response.temp
        max_temp6.innerHTML = response.max_temp
        min_temp6.innerHTML = response.min_temp
        feels_like6.innerHTML = response.feels_like
        wind_speed6.innerHTML = response.wind_speed
        humidity6.innerHTML = response.humidity
        cloud_pct6.innerHTML = response.cloud_pct
        sunrise6.innerHTML = response.sunrise
        sunset6.innerHTML = response.sunset

    })

document.querySelector('.items').addEventListener('click', () => {
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + items, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })

        .catch(err => console.error(err));
})

function fun1() {
    cityName.innerHTML = "Mumbai";
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
}

function fun2() {
    cityName.innerHTML = "Jaipur";
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Jaipur', options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
}

function fun3() {
    cityName.innerHTML = "Bangalore";
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
}

function fun4() {
    cityName.innerHTML = "Ahmedabad";
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Ahmedabad', options)
        .then(response => response.json())
        .then(response => {

            console.log(response)

            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
        })
}