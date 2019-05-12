$(document).ready(function() {
  var thermostat = new Thermostat();

  $("#currentTemp").text(thermostat.temperature);
  $("#PSMstatus").text(thermostat.powerSaving);

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

$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#londonWeather').text(data.weather[0].main);
});
$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#londonWeatherTemp').text(data.main.temp);
});
