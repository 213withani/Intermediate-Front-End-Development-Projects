$(document).ready(function() {

  var lat, lon;
  var apiURL = "";


  function location(position) {
    lat = position.coords.latitude.toFixed();
    lon = position.coords.longitude.toFixed();

    apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&APPID=2ed49d05c64144ca0d7f84a62aa20fdb";

    function weatherData(json) {
      var icon = "<img src=\"https://openweathermap.org/img/w/" + json.weather[0].icon + ".png\"</img>";
      var temp = json.main.temp;
      var mainWeather = json.weather[0].main;
      var country = json.sys.country;
      var loc = json.name;

      $("#celcius").on("click", function() {

        var displayInfo = 'Icon: ' + icon + '<br/>Weather: ' + mainWeather + '<br/>Temperature: ' +
          toCelcius(temp) + '<br/>Country: ' + country + ' <br/>Name: ' + loc;

        function toCelcius(deg) {
          var num = deg - 273;
          return num.toFixed();
        }

        $(".weather").html(displayInfo);
      });

      $("#fahrenheit").on("click", function() {

        var displayInfo = 'Icon: ' + icon + '<br/>Weather: ' + mainWeather + '<br/>Temperature: ' +
          toFahrenheit(temp) + '<br/>Country: ' + country + ' <br/>Name: ' + loc;

        function toFahrenheit(deg) {
          var num = 1.8 * (deg - 273) + 32;
          return num.toFixed();
        }

        $(".weather").html(displayInfo);
      });
    }

    $.getJSON(apiURL, weatherData);
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(location);
  }

});
