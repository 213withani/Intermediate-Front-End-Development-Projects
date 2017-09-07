$(document).ready(function() {

  var lat, lon;
  var apiURL="";

  function toFahrenheit(deg){
    var num=1.8 * (deg - 273) + 32;
    return num.toFixed();
  }

  function toCelcius(deg){
    var num =deg-273;
    return num.toFixed();
  }

  function success(position) {
          lat=position.coords.latitude.toFixed();
          lon=position.coords.longitude.toFixed();

          apiURL="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=2ed49d05c64144ca0d7f84a62aa20fdb";

          $.getJSON(apiURL, function(json) {

            $(".celcius").on('click', function (){
              var icon="<img src=\"https://openweathermap.org/img/w/"+json.weather[0].icon+".png\"</img>";
              // $(".weather").html(icon);
              console.log(icon);
            $(".weather").html('Icon: '+icon+ '<br/>Weather: '+json.weather[0].main+ '<br/>Temperature: '+ toCelcius(json.main.temp)+'<br/>Country: '+json.sys.country+' <br/>Name: '+json.name);
            });

            $(".fahrenheit").on('click', function (){
              $(".weather").html('Icon: '+icon+ '<br/>Weather: '+json.weather[0].main+ '<br/>Temperature: '+ toFahrenheit(json.main.temp)+'<br/>Country: '+json.sys.country+' <br/>Name: '+json.name);
            });

          });


    }

  if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
  }

});
