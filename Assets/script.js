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


        // Data pulled out of AJAX call (Date, Temperature, Max Temperature, Min Temperature, Humidity, Wind Speed)
        var date = weatherData[i].dt;
        var temp = weatherData[i].main.temp;
        var maxTemp = weatherData[i].main.temp_max;
        var minTemp = weatherData[i].main.temp_min;
        var humidity = weatherData[i].main.humidity;
        var windSpeed = weatherData[i].wind.speed;
        
        var weatherDiv = $("<div>");

        var dateHTML = $("<ul>").text("Date: " + date);
        var tempHTML = $("<ul>").text("Temperature: " + temp);
        // var ul = $("<ul>").text{("Date: " + date);
        // var ul = $("<ul>").text{("Date: " + date);
        // var ul = $("<ul>").text{("Date: " + date);
        // var ul = $("<ul>").text{("Date: " + date);

        $("#weatherHTML").prepend(weatherDiv);
        weatherDiv.append(dateHTML);
        weatherDiv.append(tempHTML);
        // weatherDiv.append(ul);
        // weatherDiv.append(ul);
        // weatherDiv.append(ul);
        // weatherDiv.append(ul);

    };
    });
});


        // console.log(date);
        // console.log(temp);
        // console.log(maxTemp);
        // console.log(minTemp);
        // console.log(humidity);   
        // console.log(windSpeed);