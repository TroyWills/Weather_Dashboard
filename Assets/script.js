$("#run-search").on("click", function (event) {
    event.preventDefault();

var apiKey = "39d310963c56645dbc7002332b76e141";
var citySearch = $("#searcedCity").val().trim();
var apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;

$.ajax({
    url: apiUrl,
    method: "GET",
    }).then(function (response) {
        console.log(response.main.temp);
    });
});





