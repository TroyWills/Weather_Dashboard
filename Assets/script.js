// API KEY = 39d310963c56645dbc7002332b76e141


$("#run-search").on("click", function (event) {
    // event.preventDefault();
    alert('working');

// var apiKey = "39d310963c56645dbc7002332b76e141";
// var citySearch = $("#searcedCity")
// var apiUrl = `api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${apiKey}`;

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=39d310963c56645dbc7002332b76e141",
    method: "GET",
    }).then(function (response) {
        console.log(response.main.temp);
//  userCalories.push(response.calories);
//  localStorage.setItem("userCalories", JSON.stringify(userCalories));
//  applyTable();
// });

});
});

