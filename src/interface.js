$(document).ready(function() {
  var thermostat = new Thermostat();


  $('#tempUp').click(function() {
    thermostat.tempUp();
    $("#currentTemp").text(thermostat.temperature);
  });

  $('#temp-down').click(function() {
    thermostat.thermostat.tempDown();
    $("#currentTemp").text(thermostat.temperature);
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    $("#currentTemp").text(thermostat.temperature);
  });

  $('#psm-on').click(function() {
    thermostat.powerSavingOn();
    $('#powerSaving').text('on')
    $("#PSMstatus").text(thermostat.powerSavingOn);
  });

  $('#psm-off').click(function() {
    thermostat.powerSavingOff();
    $('#powerSaving').text('off')
    $("#PSMstatus").text(thermostat.powerSavingOff);
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.usage());
});

displayWeather('London');

$('#select-city').submit(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
});

$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f011724912ca210c9f553a2894282145
', function(data) {console.log(data);
})
$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f011724912ca210c9f553a2894282145
', function(data) {$('#londonWeatherTemp').text(data.main.temp);
});
