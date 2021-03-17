// On click event for user hitting "search" button
 $("#run-search").on("click", function (event) {
     event.preventDefault();

 // Local Storage from user input 
 var citySearch = $("#searcedCity").val().trim();

 // Variables to produce URL for AJAX call 
 var apiKey = "39d310963c56645dbc7002332b76e141";
 var apiForecastUrl = `api.openweathermap.org/data/2.5/forecast?q=${citySearch}&cnt=5&appid=${apiKey}`;
console.log(apiForecastUrl);
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
        
        // Data pulled out of API in final format
        const humanDateFormat = dateObject.toLocaleString(); 
        var temp = parseInt((weatherData[i].main.temp - 273.15) * 9/5 + 32);
        var maxTemp = parseInt((weatherData[i].main.temp_max - 273.15) * 9/5 + 32);
        var minTemp = parseInt((weatherData[i].main.temp_min - 273.15) * 9/5 + 32);

        var humidity = weatherData[i].main.humidity;
        var windSpeed = weatherData[i].wind.speed;
        
        var weatherDiv = $("<div>");
        // Data pulled out of AJAX call (Date, Temperature, Max Temperature, Min Temperature, Humidity, Wind Speed)

        var dateHTML = $("<ul>").text("Date: " + humanDateFormat);
        var tempHTML = $("<ul>").text("Temperature: " + temp);
        var maxTempHTML = $("<ul>").text("High Temp: " + maxTemp);
        var minTempHTML = $("<ul>").text("Low Temp: " + minTemp);
        var humidityHTML = $("<ul>").text("Humidity: " + humidity);
        var windSpeedHTML = $("<ul>").text("Wind Speed: " + windSpeed);

        $("#weatherHTML").append(weatherDiv);

        weatherDiv.append(dateHTML);
        weatherDiv.append(tempHTML);
        weatherDiv.append(maxTempHTML);
        weatherDiv.append(minTempHTML);
        weatherDiv.append(humidityHTML);
        weatherDiv.append(windSpeedHTML);

    };
    });
});


