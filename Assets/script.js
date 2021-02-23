// On click event for user hitting "search" button
$("#run-search").on("click", function (event) {
    event.preventDefault();

// Local Storage from user input 
var citySearch = $("#searcedCity").val().trim();

// Variables to produce URL for AJAX call 
var apiKey = "39d310963c56645dbc7002332b76e141";
var apiForecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&cnt=5&appid=${apiKey}`

// Storing response from AJAX call into local storage
var response = JSON.stringify();

$.ajax({
    url: apiForecastUrl,
    method: "GET",
    dataType: "jsonp",
    }).then(function (response) {
        for (let i = 0; i < response.length; i++) {
            var weatherData = response[i];
            console.log(weatherData);
        }
    });
});



// Icon representation of weather conditions (is this in the AJAX response?)
// The temperature 
// The humidity 
// Wind speedz
// UV Index

// console.log((response.main.temp − 273.15) × 9/5 + 32 = 26.33)
// 270 = kelvin temp 


// (270K − 273.15) × 9/5 + 32 = 26.33
