// On click event for user hitting "search" button
 $("#run-search").on("click", function (event) {
     event.preventDefault();

 // var weatherData = JSON.parse(localStorage.getItem("weatherData")) || [];


 // Local Storage from user input 
 var citySearch = $("#searcedCity").val().trim();

 // Variables to produce URL for AJAX call 
 var apiKey = "39d310963c56645dbc7002332b76e141";
 var apiForecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&cnt=5&appid=${apiKey}`
 var apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;


 // Storing response from AJAX call into local storage
 // var response = JSON.stringify();

 console.log(apiForecastUrl);

 $.ajax({
    url: apiForecastUrl,
    method: "GET",
    dataType: "json"
    }).then(function (response) {
    var weatherData = response.list;
    // console.log(weatherData);
        // console.log(date);
    for (let i = 0; i < weatherData.length; i++) {

        // return date from ajax call  
        var date = weatherData[0].dt;
        console.log(date);      

        // return temperature from ajax call 
        var temp = weatherData[0].main.temp;
        console.log(temp);

        // return max temp from ajax call 
        var maxTemp = weatherData[0].main.temp_max;
        console.log(maxTemp);

        // return low temp from ajax call 
        var minTemp = weatherData[0].main.temp_min;
        console.log(minTemp);

        // return humidity from ajax call 
        var humidity = weatherData[0].main.humidity;
        console.log(humidity);

        // return wind speed from ajax call
        var windSpeed = weatherData[0].wind.speed;
        console.log(windSpeed);

        }
    });
});


    

// var apiKey = "39d310963c56645dbc7002332b76e141";
// var citySearch = $("#searcedCity")
// var apiUrl = `api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;
// var apiKey = "39d310963c56645dbc7002332b76e141";
// var citySearch = $("#searcedCity").val().trim();
// var apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;

// console.log(apiUrl);

// $.ajax({
//     url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=39d310963c56645dbc7002332b76e141",
//     url: apiUrl,
//     method: "GET",
//     }).then(function (response) {
//         console.log(response.main.temp);
//     });
// });