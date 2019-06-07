$(document).ready(function() {
  var thermostat = new Thermostat();
  $("#currentTemp").text(thermostat.temperature);
  $("#PSMstatus").text(thermostat.powerSaving);
  $("#tempUp").click(function() {
    thermostat.tempUp();
    $("#currentTemp").text(thermostat.temperature);
  });

  $("#temp-down").click(function() {
    thermostat.thermostat.tempDown();
    $("#currentTemp").text(thermostat.temperature);
  });

  $("#PSM_on").click(function() {
    thermostat.powerSavingOn();
    $("#powerSaving").text("on");
    $("#PSMstatus").text(thermostat.powerSaving);
  });

  $("#PSM_off").click(function() {
    thermostat.powerSavingOff();
    $("#powerSaving").text("off");
    $("#PSMstatus").text(thermostat.powerSaving);
  });

  $("#temp-reset").click(function() {
    thermostat.reset();
    $("#currentTemp").text(thermostat.temperature);
  });

  $.get(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f011724912ca210c9f553a2894282145",
    function(data) {
      $("#londonWeather").text(data.weather[0].main);
    }
  );
  $.get(
    "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f011724912ca210c9f553a2894282145",
    function(data) {
      $("#londonWeatherTemp").text(data.main.temp);
    }
  );
});
