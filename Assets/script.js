// On click event for user hitting "search" button
 $("#run-search").on("click", function (event) {
     event.preventDefault();

 // var weatherData = JSON.parse(localStorage.getItem("weatherData")) || [];


 // Local Storage from user input 
 var citySearch = $("#searcedCity").val().trim();

 // Variables to produce URL for AJAX call 
 var apiKey = "39d310963c56645dbc7002332b76e141";
 var apiForecastUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${citySearch}&cnt=5&appid=${apiKey}`;
 var apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;
 var dailyForecast = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${citySearch}&cnt={5}&appid=${apiKey}`;
 




 // Storing response from AJAX call into local storage
 // var response = JSON.stringify();

 console.log(apiForecastUrl);
 console.log(dailyForecast);

 $.ajax({
    url: apiForecastUrl,
    method: "GET",
    dataType: "json"
    }).then(function (response) {
    var weatherData = response.list;
    for (let i = 0; i < weatherData.length; i++) {


        // Taking Date from API in 'GMT UNIX Timestamp' format and converting to M/DD/YY HH:MM:SS
        const unixTimestamp = weatherData[i].dt;
        const milliseconds = unixTimestamp * 1000; 
        const dateObject = new Date(milliseconds);
        

        dateObject.toLocaleString("en-US", {weekday: "long"}); 
        dateObject.toLocaleString("en-US", {month: "long"}); 
        dateObject.toLocaleString("en-US", {day: "numeric"});
        dateObject.toLocaleString("en-US", {year: "numeric"});
        dateObject.toLocaleString("en-US", {hour: "numeric"});
        dateObject.toLocaleString("en-US", {minute: "numeric"});
        dateObject.toLocaleString("en-US", {second: "numeric"});
        dateObject.toLocaleString("en-US", {timeZoneName: "short"});

        // Converting Kelvin to Farenheit 
        // Kelvin to Fahrenheit: F = 9/5(K - 273) + 32 
        // or F = 1.8(K - 273) + 32.
        var temp = weatherData[i].main.temp;

        
        // Data pulled out of API in final format
        const humanDateFormat = dateObject.toLocaleString(); 
        var maxTemp = weatherData[i].main.temp_max;
        var minTemp = weatherData[i].main.temp_min;
        var humidity = weatherData[i].main.humidity;
        var windSpeed = weatherData[i].wind.speed;
        
        var weatherDiv = $("<div>");
        // Data pulled out of AJAX call (Date, Temperature, Max Temperature, Min Temperature, Humidity, Wind Speed)

        var dateHTML = $("<ul>").text("Date: " + date);
        var tempHTML = $("<ul>").text("Temperature: " + temp);
        var maxTempHTML = $("<ul>").text("High Temp: " + maxTemp);
        var minTempHTML = $("<ul>").text("Low Temp: " + minTemp);
        var humidityHTML = $("<ul>").text("Humidity: " + humidity);
        var windSpeedHTML = $("<ul>").text("Wind Speed: " + windSpeed);

        $("#weatherHTML").prepend(weatherDiv);

        weatherDiv.append(dateHTML);
        weatherDiv.append(tempHTML);
        weatherDiv.append(maxTempHTML);
        weatherDiv.append(minTempHTML);
        weatherDiv.append(humidityHTML);
        weatherDiv.append(windSpeedHTML);

    };
    });
});


